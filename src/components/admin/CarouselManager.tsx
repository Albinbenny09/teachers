// src/components/admin/CarouselManager.tsx
'use client';

import { useEffect, useState, useRef } from 'react';

type Item = { id: number; url: string; title?: string | null; subtitle?: string | null; order_index?: number };

export default function CarouselManager() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState<{ url: string; title?: string; subtitle?: string; order_index?: number }>({
    url: '',
    title: '',
    subtitle: '',
    order_index: 0,
  });
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    const r = await fetch('/api/carousel', { cache: 'no-store' });
    const j = await r.json();
    setItems(j);
  };

  useEffect(() => {
    load();
  }, []);

  const reset = () => {
    setForm({ url: '', title: '', subtitle: '', order_index: 0 });
    setEditId(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `/api/carousel/${editId}` : '/api/carousel';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (!res.ok) { alert('Save failed'); return; }
    await load();
    reset();
  };

  const onDelete = async (id: number) => {
    if (!confirm('Delete this image?')) return;
    const res = await fetch(`/api/carousel/${id}`, { method: 'DELETE' });
    if (!res.ok) { alert('Delete failed'); return; }
    await load();
  };

  const onEdit = (it: Item) => {
    setEditId(it.id);
    setForm({ url: it.url, title: it.title ?? '', subtitle: it.subtitle ?? '', order_index: it.order_index ?? 0 });
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please select a valid image file (JPEG, PNG, or WebP)');
      return;
    }

    // Validate file size (max 50MB)
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      alert('File too large. Maximum size is 50MB.');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      const result = await response.json();
      
      // Set the carousel URL (optimized version)
      setForm(prev => ({
        ...prev,
        url: result.optimized.find((img: { size: string; path: string }) => img.size === 'carousel')?.path || result.original.path
      }));

      // Show success message with optimization stats
      alert(`Image uploaded and optimized successfully!\n\nOriginal: ${result.stats.originalSize}\nOptimized: ${result.stats.carouselSize}\nReduction: ${result.stats.reduction}`);

    } catch (error) {
      console.error('Upload error:', error);
      alert(`Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
      {/* Form Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Add New Image</h3>
          <p className="text-slate-600">Upload an image or provide a URL to add it to the carousel</p>
        </div>
        
        <form onSubmit={submit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Image</label>
              <div className="space-y-3">
                {/* File Upload Button */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={triggerFileUpload}
                    disabled={uploading}
                    className="flex-1 h-12 rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {uploading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Uploading... {uploadProgress}%</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span>Upload Image</span>
                      </>
                    )}
                  </button>
                  <div className="text-sm text-slate-500 font-medium">
                    or
                  </div>
                </div>
                
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                
                {/* URL Input */}
                <input
                  value={form.url}
                  onChange={(e) => setForm({ ...form, url: e.target.value })}
                  className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="/image/home1.JPG or https://…"
                  required
                />
                
                {/* Upload Progress Bar */}
                {uploading && (
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Title (optional)</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subtitle (optional)</label>
                <input
                  value={form.subtitle}
                  onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                  className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter subtitle"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Display Order</label>
              <input
                type="number"
                value={form.order_index ?? 0}
                onChange={(e) => setForm({ ...form, order_index: Number(e.target.value) })}
                className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                min={0}
                placeholder="0"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              type="submit" 
              disabled={loading || uploading} 
              className="flex-1 h-12 rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl hover:shadow-3xl hover:from-green-700 hover:to-emerald-700 focus:ring-green-500/50 transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {loading && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
              <span>{editId ? 'Update Image' : 'Add Image'}</span>
            </button>
            {editId && (
              <button 
                type="button" 
                onClick={reset} 
                className="h-12 px-6 rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 text-slate-600 shadow-lg hover:shadow-xl focus:ring-slate-500/50 transform hover:-translate-y-1 hover:scale-105 bg-white/50 backdrop-blur-sm border border-slate-200 hover:bg-slate-50"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Images Grid */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Current Images</h3>
          <p className="text-slate-600">Manage your carousel images</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it.id} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img src={it.url} alt={it.title || 'carousel'} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-slate-700">
                    Order: {it.order_index ?? 0}
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <div className="font-bold text-slate-900 text-lg">{it.title || 'Untitled'}</div>
                  <div className="text-slate-600">{it.subtitle || 'No subtitle'}</div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => onEdit(it)} 
                    className="flex-1 h-10 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 text-blue-600 shadow-lg hover:shadow-xl focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 bg-blue-50 backdrop-blur-sm border border-blue-200 hover:bg-blue-100"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => onDelete(it.id)} 
                    className="flex-1 h-10 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 text-red-600 shadow-lg hover:shadow-xl focus:ring-red-500/50 transform hover:-translate-y-1 hover:scale-105 bg-red-50 backdrop-blur-sm border border-red-200 hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="col-span-2 text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-slate-500 text-lg font-medium">No images yet</p>
              <p className="text-slate-400">Upload your first image to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
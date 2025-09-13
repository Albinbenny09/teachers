import OptimizedImage from "./OptimizedImage";

type Staff = {
  name: string;
  role: string;
  phone?: string;
  img: string;
};

const STAFF: Staff[] = [
  { name: "Shankline Jose", role: "Assistant Secretary", phone: "9446895482", img: "/image/Shankline.jpg" },
  { name: "Shaiju Lukkose", role: "Attender", phone: "9605603589", img: "/image/shaiju.jpg" },
  { name: "Albin John", role: "Attender", phone: "9995566571", img: "/image/albin.jpg" },
  { name: "Afigith K Benny", role: "Peon", phone: "9539439507", img: "/image/afi.png" },
  { name: "Dona Rajan", role: "Junior Clerk", phone: "9447674020", img: "/image/DonaRajan.png" },
];

export default function StaffGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {STAFF.map((person, index) => (
        <div 
          key={person.name} 
          className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/60 hover:border-blue-200/60 hover:-translate-y-2"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 z-10"></div>
          
          {/* Image container */}
          <div className="relative h-80 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6 overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-purple-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500 rounded-full"></div>
            </div>
            
            <div className="relative z-20 w-full h-full flex items-center justify-center">
              <OptimizedImage 
                src={person.img} 
                alt={person.name} 
                width={240}
                height={240}
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" 
                className="object-contain max-w-full max-h-full rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500" 
              />
            </div>
            
            {/* Hover overlay with contact info */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex items-end justify-center pb-6">
              <div className="text-center text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">{person.phone}</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 relative z-20">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                {person.name}
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-slate-600 font-medium">{person.role}</p>
              </div>
            </div>
            
            {/* Contact button */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <a 
                href={`tel:${person.phone}`}
                className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 group/btn"
              >
                <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact</span>
              </a>
            </div>
          </div>
          
          {/* Decorative corner accent */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}



type Row = { loan: string; amount: string; term: string; security: string; rate: string };

const rows: Row[] = [
  { loan: "സാധാരണ വായ്പ", amount: "30 ലക്ഷം രൂപ വരെ", term: "120 മാസം", security: "10 ലക്ഷം വരെ 2 ആൾ ജാമ്യം, 10 ലക്ഷത്തിന് മുകളിൽ 3 ആൾ ജാമ്യം", rate: "8.75%" },
  { loan: "ക്വാഷ് ക്രെഡിറ്റ്", amount: "5 ലക്ഷം രൂപ വരെ", term: "36 മാസം", security: "3 ആൾ ജാമ്യം", rate: "8.75%" },
  { loan: "ഷോർട്ട് ടേം ലോൺ", amount: "3 ലക്ഷം രൂപ", term: "40 മാസം", security: "ഒരാൾ ജാമ്യം", rate: "8.75%" },
  { loan: "എമർജൻസി ലോൺ", amount: "1 ലക്ഷം രൂപ വരെ", term: "12 മാസം", security: "ജാമ്യം ആവശ്യമില്ല", rate: "8.75%" },
  { loan: "ഫെസ്റ്റിവൽ ലോൺ", amount: "1 ലക്ഷം രൂപ വരെ", term: "10 മാസം", security: "ജാമ്യം ആവശ്യമില്ല", rate: "8.75%" },
  { loan: "കമ്പ്യൂട്ടർ/ടു വീലർ ലോൺ", amount: "1 ലക്ഷം രൂപ", term: "24 മാസം", security: "ജാമ്യം ആവശ്യമില്ല", rate: "8.75%" },
  { loan: "ഗോൾഡ് ലോൺ", amount: "10 ലക്ഷം രൂപ വരെ", term: "6 മാസം", security: "ഗ്രാമിന് 3750 വരെ", rate: "8.75%" },
  { loan: "പ്രതിമാസ സമ്പാദ്യ പദ്ധതി ലോൺ (സലയുടെ 75%)", amount: "375000/- രൂപ വരെ", term: "40 മാസം വരെ", security: "2 ആൾ ജാമ്യം", rate: "8.75%" },
];

export default function LoanPage() {
  return (
    <main className="font-sans min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              സംഘത്തിൽ നിന്നും വിതരണം ചെയ്യുന്ന വായ്പകൾ
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <tr>
                    <th className="p-6 text-lg font-bold text-slate-900">വായ്പകൾ</th>
                    <th className="p-6 text-lg font-bold text-slate-900">തുക</th>
                    <th className="p-6 text-lg font-bold text-slate-900">കാലാവധി</th>
                    <th className="p-6 text-lg font-bold text-slate-900">ജാമ്യം</th>
                    <th className="p-6 text-lg font-bold text-slate-900">പലിശ നിരക്ക്</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, index) => (
                    <tr key={r.loan} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/50 transition-colors duration-200`}>
                      <td className="p-6 font-semibold text-slate-900">{r.loan}</td>
                      <td className="p-6 text-slate-700">{r.amount}</td>
                      <td className="p-6 text-slate-700">{r.term}</td>
                      <td className="p-6 text-slate-700">{r.security}</td>
                      <td className="p-6 font-bold text-blue-600">{r.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-2xl border border-green-200">
            <p className="text-base md:text-lg leading-relaxed text-green-800 text-center font-medium">
              പ്രതിമാസ സമ്പാദ്യ പദ്ധതി പിടിക്കാത്ത ചിറ്റാളന്മാർക്ക് സ്വന്തം ജാമ്യത്തിൽ അടഞ്ഞ തുകയുടെ 70% വരെ വായ്പ നൽകുന്നു.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}




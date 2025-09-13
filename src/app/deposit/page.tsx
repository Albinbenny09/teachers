export default function DepositPage() {
  return (
    <main className="font-sans min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              സ്ഥിരനിക്ഷേപങ്ങളുടെ പലിശനിരക്ക്
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                <tr>
                  <th className="p-6 text-lg font-bold text-slate-900 text-left">കാലാവധി</th>
                  <th className="p-6 text-lg font-bold text-slate-900 text-left">പലിശനിരക്ക്</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-blue-50/50 transition-colors duration-200">
                  <td className="p-6 font-semibold text-slate-900">15 ദിവസം</td>
                  <td className="p-6 font-bold text-blue-600 text-xl">5.00%</td>
                </tr>
                <tr className="bg-slate-50/50 hover:bg-blue-50/50 transition-colors duration-200">
                  <td className="p-6 font-semibold text-slate-900">46 ദിവസം</td>
                  <td className="p-6 font-bold text-blue-600 text-xl">5.25%</td>
                </tr>
                <tr className="bg-white hover:bg-blue-50/50 transition-colors duration-200">
                  <td className="p-6 font-semibold text-slate-900">91 ദിവസം</td>
                  <td className="p-6 font-bold text-blue-600 text-xl">5.50%</td>
                </tr>
                <tr className="bg-slate-50/50 hover:bg-blue-50/50 transition-colors duration-200">
                  <td className="p-6 font-semibold text-slate-900">180 ദിവസം</td>
                  <td className="p-6 font-bold text-blue-600 text-xl">6.00%</td>
                </tr>
                <tr className="bg-white hover:bg-blue-50/50 transition-colors duration-200">
                  <td className="p-6 font-semibold text-slate-900">365 ദിവസം</td>
                  <td className="p-6 font-bold text-blue-600 text-xl">7.25%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl shadow-xl">
            <h3 className="text-center font-bold text-white text-lg">
              സീനിയർ സിറ്റിസൺസിന് 0.5% പലിശ അധികം നൽകുന്നു.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}




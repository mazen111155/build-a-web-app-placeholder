import { Phone, Sparkles, Shield, Wifi } from 'lucide-react';

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16">
        {/* Header Image */}
        <div className="text-center mb-12">
          <img
            src="https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/cf7f2b01-6022-4b6b-8df5-80b56ca4f94c/97388328af6ce350bb617bf009d03089.jpg?UCloudPublicKey=TOKEN_e15ba47a-d098-4fbd-9afc-a0dcf0e4e621&Expires=1770401056&Signature=awS9dPD/0qpXaSU9L7K2LL8s2os="
            alt="العالم النت"
            className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl ring-4 ring-white/20"
          />
        </div>

        {/* Speed Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-black text-3xl md:text-5xl px-10 py-5 rounded-3xl shadow-2xl ring-4 ring-white/30 animate-bounce">
            <Sparkles className="w-10 h-10 md:w-14 md:h-14 fill-current" />
            سرعة 6 جيجا
            <Sparkles className="w-10 h-10 md:w-14 md:h-14 fill-current" />
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur border border-cyan-400/30 text-white px-6 py-4 rounded-2xl text-lg font-bold flex items-center gap-3">
            <Wifi className="w-6 h-6" />
            إنترنت فائق السرعة
          </div>
          <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur border border-green-400/30 text-white px-6 py-4 rounded-2xl text-lg font-bold flex items-center gap-3">
            <Shield className="w-6 h-6" />
            آمن ومضمون
          </div>
          <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur border border-purple-400/30 text-white px-6 py-4 rounded-2xl text-lg font-bold flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            خدمة مميزة
          </div>
        </div>

        {/* Cards Grid */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
            💳 كروت بشتى الفئات
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {[
              { price: '200', color: 'from-emerald-400 to-green-600' },
              { price: '500', color: 'from-cyan-400 to-blue-600' },
              { price: '1000', color: 'from-blue-400 to-indigo-600' },
              { price: '1500', color: 'from-violet-400 to-purple-600' },
              { price: '2000', color: 'from-purple-400 to-fuchsia-600' },
              { price: '3000', color: 'from-pink-400 to-rose-600' },
              { price: '6000', color: 'from-orange-400 to-red-600' },
            ].map((card) => (
              <div
                key={card.price}
                className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-center shadow-xl transform hover:scale-105 transition-all duration-300 ring-2 ring-white/30`}
              >
                <div className="text-2xl md:text-4xl font-black text-white mb-1">
                  {card.price}
                </div>
                <div className="text-white/90 text-sm font-bold">
                  ريال
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            📞 للتواصل مع الإدارة
          </h2>
          <a
            href="tel:772881027"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 hover:from-green-500 hover:via-emerald-600 hover:to-teal-600 text-black font-black text-4xl md:text-6xl px-16 py-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 ring-4 ring-white/30"
          >
            <Phone className="w-12 h-12 md:w-16 md:h-16 fill-current" />
            772 881 027
          </a>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-black font-black text-xl py-4 px-12 rounded-2xl shadow-xl">
            🌐 العالم النت - اتصالك الأسرع 🌐
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
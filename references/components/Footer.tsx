export function Footer() {
  return (
    <footer className="bg-gray-100 relative overflow-hidden">
      {/* Colorful decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sdgs-red via-sdgs-orange via-sdgs-yellow via-sdgs-green via-sdgs-blue to-sdgs-purple"></div>
      
      {/* Floating colorful circles */}
      <div className="absolute top-8 left-16 w-12 h-12 bg-sdgs-light-blue/20 rounded-full animate-pulse"></div>
      <div className="absolute top-24 right-20 w-8 h-8 bg-sdgs-pink/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-sdgs-yellow/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-8 right-1/3 w-10 h-10 bg-sdgs-light-green/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Shop Info */}
          <div>
            <div className="mb-8">
              <a href="/" className="text-3xl font-bold text-sdgs-dark-green hover:text-sdgs-green transition-all duration-300 inline-block relative group">
                WOOD OFF
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sdgs-bright-orange transition-all duration-300 group-hover:w-full"></div>
              </a>
              <div className="w-16 h-1 bg-gradient-to-r from-sdgs-bright-orange to-sdgs-yellow rounded-full mt-3 shadow-sm"></div>
            </div>
            <div className="flex space-x-6">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-sdgs-dark-green hover:text-white transition-all duration-300 font-medium relative group px-4 py-2 rounded-lg bg-sdgs-light-blue/10 hover:bg-sdgs-light-blue border-2 border-sdgs-light-blue/30 hover:border-sdgs-light-blue"
              >
                Pinterest
                <div className="absolute -bottom-0.5 left-4 w-0 h-0.5 bg-sdgs-bright-orange transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></div>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-green border border-transparent hover:border-sdgs-green">
                    ホーム
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-bright-orange transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-blue border border-transparent hover:border-sdgs-blue">
                    配送・送料について
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-yellow transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
                <li>
                  <a href="/return" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-purple border border-transparent hover:border-sdgs-purple">
                    返品について
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-light-green transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
                <li>
                  <a href="/payment" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-orange border border-transparent hover:border-sdgs-orange">
                    支払い方法について
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-pink transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="/legal" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-pink border border-transparent hover:border-sdgs-pink">
                    特定商取引法に基づく表記
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-light-blue transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-navy border border-transparent hover:border-sdgs-navy">
                    プライバシーポリシー
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-yellow transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
                <li>
                  <span className="text-gray-600 px-3 py-2 inline-block">
                    <a href="/rss" className="hover:text-sdgs-light-blue transition-colors relative group">
                      RSS
                      <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sdgs-light-blue transition-all duration-300 group-hover:w-full"></div>
                    </a> / 
                    <a href="/atom" className="hover:text-sdgs-light-green transition-colors ml-1 relative group">
                      ATOM
                      <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sdgs-light-green transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  </span>
                </li>
                <li>
                  <a href="/account" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-light-green border border-transparent hover:border-sdgs-light-green">
                    マイアカウント
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-purple transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
                <li>
                  <a href="/cart" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-yellow border border-transparent hover:border-sdgs-yellow">
                    カートを見る
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-red transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-white transition-all duration-300 relative group inline-block px-3 py-2 rounded-lg hover:bg-sdgs-red border border-transparent hover:border-sdgs-red">
                    お問い合わせ
                    <div className="absolute -bottom-0.5 left-3 w-0 h-0.5 bg-sdgs-blue transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        

      </div>
    </footer>
  );
}
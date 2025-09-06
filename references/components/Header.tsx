'use client';

import { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-xl relative">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1>
                <a href="/" className="text-2xl font-bold text-sdgs-navy hover:text-sdgs-blue transition-all duration-300 relative group transform hover:scale-105">
                  WOOD OFF
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sdgs-bright-orange transition-all duration-300 group-hover:w-full"></div>
                  <div className="absolute -top-1 -left-1 w-0 h-0 border-l-2 border-t-2 border-sdgs-yellow transition-all duration-300 group-hover:w-3 group-hover:h-3"></div>
                  <div className="absolute -top-1 -right-1 w-0 h-0 border-r-2 border-t-2 border-sdgs-orange transition-all duration-300 group-hover:w-3 group-hover:h-3"></div>
                </a>
              </h1>
            </div>

            {/* Search and Cart - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-3 text-sdgs-blue hover:text-white hover:bg-sdgs-green rounded-full transition-all duration-300 border-2 border-sdgs-light-blue hover:border-sdgs-green transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl"
                aria-label="検索"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart */}
              <div className="relative">
                <a href="/cart" className="p-3 text-sdgs-purple hover:text-white hover:bg-sdgs-pink rounded-full flex items-center transition-all duration-300 border-2 border-sdgs-purple hover:border-sdgs-pink transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="ml-2 bg-sdgs-bright-orange text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold shadow-md animate-bounce">
                    1
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-sdgs-navy hover:text-white hover:bg-sdgs-blue rounded-full transition-all duration-300 border-2 border-sdgs-navy hover:border-sdgs-blue transform hover:scale-110"
              aria-label="メニュー"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Search Dropdown */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b-4 border-sdgs-orange shadow-2xl z-50">
              <div className="max-w-7xl mx-auto p-4">
                <div className="flex items-center">
                  <form className="flex-1 flex" method="GET">
                    <input type="hidden" name="mode" value="srh" />
                    <div className="flex-1">
                      <input
                        type="text"
                        name="keyword"
                        placeholder="商品検索"
                        className="w-full px-4 py-3 border-2 border-sdgs-light-blue rounded-l-xl focus:outline-none focus:ring-4 focus:ring-sdgs-yellow/50 focus:border-sdgs-orange text-sdgs-navy transition-all duration-300 bg-white shadow-inner"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-sdgs-orange hover:bg-sdgs-bright-orange text-white rounded-r-xl transition-all duration-300 shadow-lg transform hover:scale-105"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-4 p-2 text-sdgs-blue hover:text-white hover:bg-sdgs-pink rounded-full transition-all duration-300 transform hover:rotate-90"
                    aria-label="閉じる"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}


        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sdgs-yellow/50">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div>
                <form className="flex" method="GET">
                  <input type="hidden" name="mode" value="srh" />
                  <input
                    type="text"
                    name="keyword"
                    placeholder="商品検索"
                    className="flex-1 px-4 py-2 border-2 border-sdgs-light-blue rounded-l-xl focus:outline-none focus:ring-2 focus:ring-sdgs-yellow text-sdgs-navy bg-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-sdgs-orange text-white rounded-r-xl transition-all duration-300"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Mobile Cart */}
              <div>
                <a href="/cart" className="flex items-center space-x-2 py-2 text-sdgs-purple hover:text-sdgs-pink transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span>カートを見る (1)</span>
                </a>
              </div>


            </div>
          </div>
        )}
      </header>

      {/* Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => {
            setIsSearchOpen(false);
          }}
        />
      )}
    </>
  );
}
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  url: string;
}

interface CategoryNavProps {
  categories?: Category[];
}

export function CategoryNav({ categories = [] }: CategoryNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // デフォルトカテゴリ（カテゴリが提供されない場合のサンプル）
  const defaultCategories = [
    { id: '1', name: '古材・再生木材', url: '/category/reclaimed-wood' },
    { id: '2', name: '建具・扉', url: '/category/doors' },
    { id: '3', name: '床材・フローリング', url: '/category/flooring' },
    { id: '4', name: '梁・柱材', url: '/category/beams' },
    { id: '5', name: '家具材', url: '/category/furniture-wood' },
    { id: '6', name: '装飾材', url: '/category/decorative' }
  ];

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  // 各カテゴリのカラーを定義
  const getButtonColor = (index: number) => {
    const colors = [
      'bg-sdgs-green hover:bg-sdgs-dark-green border-sdgs-green hover:border-sdgs-dark-green',
      'bg-sdgs-blue hover:bg-sdgs-navy border-sdgs-blue hover:border-sdgs-navy',
      'bg-sdgs-orange hover:bg-sdgs-bright-orange border-sdgs-orange hover:border-sdgs-bright-orange',
      'bg-sdgs-purple hover:bg-sdgs-pink border-sdgs-purple hover:border-sdgs-pink',
      'bg-sdgs-yellow hover:bg-sdgs-dark-orange border-sdgs-yellow hover:border-sdgs-dark-orange text-gray-800 hover:text-white',
      'bg-sdgs-pink hover:bg-sdgs-red border-sdgs-pink hover:border-sdgs-red'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <nav>
          <ul className="grid grid-cols-3 gap-4">
            {displayCategories.map((category, index) => (
              <li key={category.id}>
                <a
                  href={category.url}
                  className={`block text-white rounded-xl px-4 py-3 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${getButtonColor(index)}`}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-sdgs-light-blue/10 p-4 text-sdgs-dark-green rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-sdgs-light-blue/20 border-2 border-sdgs-light-blue/30"
        >
          <div className="text-sdgs-dark-green">
            {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        </button>
        
        {isOpen && (
          <div className="mt-4 animate-fade-in">
            <nav>
              <ul className="space-y-3">
                {displayCategories.map((category, index) => (
                  <li key={category.id}>
                    <a
                      href={category.url}
                      className={`block text-white rounded-lg px-4 py-3 transition-all duration-300 transform hover:translate-x-2 border-2 ${getButtonColor(index)}`}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
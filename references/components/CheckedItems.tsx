import { ImageWithFallback } from './figma/ImageWithFallback';

interface CheckedItem {
  id: string;
  name: string;
  price: string;
  taxPrice: string;
  imageUrl: string;
  productUrl: string;
}

interface CheckedItemsProps {
  items: CheckedItem[];
}

export function CheckedItems({ items }: CheckedItemsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="mb-6">
          <span className="block text-3xl font-bold bg-gradient-to-r from-sdgs-navy to-sdgs-blue bg-clip-text text-transparent mb-3">
            CHECKED ITEMS
          </span>
          <span className="text-lg text-gray-600">最近チェックした商品</span>
        </h2>
        <div className="flex justify-center space-x-1 mb-4">
          <div className="w-3 h-1 bg-sdgs-pink rounded-full"></div>
          <div className="w-3 h-1 bg-sdgs-purple rounded-full"></div>
          <div className="w-3 h-1 bg-sdgs-blue rounded-full"></div>
        </div>
      </div>
      
      <div className="overflow-x-auto pb-4">
        <ul className="flex space-x-6">
          {items.map((item) => {
            return (
              <li key={item.id} className="flex-shrink-0 w-48">
                <div className="bg-white rounded-2xl shadow-lg border-2 border-sdgs-light-blue/30 shadow-sdgs-light-blue/10 hover:shadow-xl hover:border-sdgs-blue/50 transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 relative">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-sdgs-light-blue"></div>
                  
                  <div className="aspect-square overflow-hidden rounded-t-2xl relative">
                    <a href={item.productUrl} className="block">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-br from-sdgs-light-blue/5 to-sdgs-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sdgs-blue font-bold text-lg mb-1">
                        {item.price}
                      </div>
                      <div className="text-gray-500 text-xs">
                        (税{item.taxPrice})
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: string;
  name: string;
  price: string;
  taxPrice: string;
  imageUrl: string;
  productUrl: string;
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export function ProductSection({ title, subtitle, products }: ProductSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="mb-6">
          <span className="block text-4xl font-bold bg-gradient-to-r from-sdgs-navy to-sdgs-blue bg-clip-text text-transparent mb-3">
            {title}
          </span>
          <span className="text-xl text-gray-600">{subtitle}</span>
        </h2>
        <div className="flex justify-center space-x-2 mb-4">
          <div className="w-4 h-1 bg-sdgs-red rounded-full"></div>
          <div className="w-4 h-1 bg-sdgs-orange rounded-full"></div>
          <div className="w-4 h-1 bg-sdgs-yellow rounded-full"></div>
          <div className="w-4 h-1 bg-sdgs-green rounded-full"></div>
          <div className="w-4 h-1 bg-sdgs-light-blue rounded-full"></div>
          <div className="w-4 h-1 bg-sdgs-blue rounded-full"></div>
          <div className="w-4 h-1 bg-sdgs-purple rounded-full"></div>
        </div>
      </div>
      
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => {
          // カラフルな価格バッジの色をローテーション
          const priceColors = [
            'bg-sdgs-red',
            'bg-sdgs-orange', 
            'bg-sdgs-yellow',
            'bg-sdgs-green',
            'bg-sdgs-light-blue',
            'bg-sdgs-purple',
            'bg-sdgs-pink',
            'bg-sdgs-bright-orange'
          ];
          const colorClass = priceColors[index % priceColors.length];
          
          return (
            <li key={product.id} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative">
                <div className="aspect-square overflow-hidden rounded-t-xl">
                  <a href={product.productUrl} className="block">
                    <ImageWithFallback
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </a>
                </div>
                
                {/* カラフルな価格バッジ */}
                <div className={`absolute top-3 right-3 ${colorClass} text-white px-3 py-1 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                  <span className="font-bold text-sm">{product.price}</span>
                </div>
                
                <div className="p-5">
                  <div className="text-center mb-4">
                    <a 
                      href={product.productUrl}
                      className="text-gray-700 hover:text-sdgs-green transition-colors font-medium text-sm leading-relaxed"
                    >
                      {product.name}
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 text-xs">
                      (税{product.taxPrice})
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
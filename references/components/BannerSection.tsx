import { ImageWithFallback } from './figma/ImageWithFallback';

interface Banner {
  id: string;
  imageUrl: string;
  linkUrl: string;
  alt: string;
}

interface BannerSectionProps {
  banners: Banner[];
}

export function BannerSection({ banners }: BannerSectionProps) {
  const gradientOverlays = [
    'from-sdgs-blue/20 to-sdgs-light-blue/20',
    'from-sdgs-green/20 to-sdgs-light-green/20', 
    'from-sdgs-orange/20 to-sdgs-yellow/20'
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {banners.map((banner, index) => {
            const gradientClass = gradientOverlays[index % gradientOverlays.length];
            
            return (
              <li key={banner.id}>
                <a 
                  href={banner.linkUrl}
                  className="block group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                >
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={banner.imageUrl}
                      alt={banner.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Colorful overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${gradientClass} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-2 drop-shadow-lg">{banner.alt}</h3>
                    <div className="w-12 h-1 bg-white rounded-full group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
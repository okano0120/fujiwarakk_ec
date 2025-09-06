import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { ProductSection } from './components/ProductSection';
import { BannerSection } from './components/BannerSection';
import { CheckedItems } from './components/CheckedItems';
import { ShoppingGuide } from './components/ShoppingGuide';
import { Footer } from './components/Footer';

// サンプルデータ
const recommendedProducts = [
  {
    id: '1',
    name: 'ケヤキ蔵戸',
    price: '1,100円',
    taxPrice: '100円',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&h=400',
    productUrl: '/product/1'
  },
  {
    id: '2',
    name: 'オークの古材テーブル',
    price: '25,000円',
    taxPrice: '2,500円',
    imageUrl: 'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=400&h=400',
    productUrl: '/product/2'
  },
  {
    id: '3',
    name: 'ウォールナット収納棚',
    price: '18,500円',
    taxPrice: '1,850円',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&h=400',
    productUrl: '/product/3'
  },
  {
    id: '4',
    name: 'パイン材の木箱',
    price: '3,200円',
    taxPrice: '320円',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&h=400',
    productUrl: '/product/4'
  }
];

const newProducts = [
  {
    id: '5',
    name: '古材フローリング',
    price: '8,800円',
    taxPrice: '880円',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=400&h=400',
    productUrl: '/product/5'
  },
  {
    id: '6',
    name: 'ヒノキの建具',
    price: '15,000円',
    taxPrice: '1,500円',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&h=400',
    productUrl: '/product/6'
  },
  {
    id: '7',
    name: 'スギ材の梁',
    price: '22,000円',
    taxPrice: '2,200円',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=400&h=400',
    productUrl: '/product/7'
  },
  {
    id: '8',
    name: '古い窓枠',
    price: '6,500円',
    taxPrice: '650円',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&h=400',
    productUrl: '/product/8'
  }
];

const banners = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=600&h=300',
    linkUrl: '/category/flooring',
    alt: 'フローリング特集'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&h=300',
    linkUrl: '/category/furniture',
    alt: '家具コレクション'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=600&h=300',
    linkUrl: '/category/building-materials',
    alt: '建材コレクション'
  }
];

const checkedItems = [
  {
    id: '1',
    name: 'ケヤキ蔵戸',
    price: '1,100円',
    taxPrice: '100円',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=200&h=200',
    productUrl: '/product/1'
  },
  {
    id: '2',
    name: 'オークの古材テーブル',
    price: '25,000円',
    taxPrice: '2,500円',
    imageUrl: 'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=200&h=200',
    productUrl: '/product/2'
  },
  {
    id: '3',
    name: 'ウォールナット収納棚',
    price: '18,500円',
    taxPrice: '1,850円',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=200&h=200',
    productUrl: '/product/3'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      <Header />
      
      <main>
        <CategoryNav />
        
        <ProductSection
          title="RECOMMENDED"
          subtitle="おすすめ"
          products={recommendedProducts}
        />
        
        <ProductSection
          title="NEW ARRIVAL"
          subtitle="新着"
          products={newProducts}
        />
        
        <BannerSection banners={banners} />
      </main>
      
      <div className="bg-gradient-to-b from-gray-50/50 to-white">
        <CheckedItems items={checkedItems} />
        <ShoppingGuide />
      </div>
      
      <Footer />
    </div>
  );
}
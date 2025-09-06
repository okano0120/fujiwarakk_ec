import { Truck, RotateCcw, CreditCard } from 'lucide-react';

export function ShoppingGuide() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="sr-only">ショッピングガイド</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shipping */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-sdgs-blue hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sdgs-blue/5 to-sdgs-light-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 p-3 bg-gradient-to-r from-sdgs-blue to-sdgs-light-blue rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">SHIPPING</h3>
                <p className="text-sm text-sdgs-blue font-medium">配送・送料について</p>
              </div>
            </div>
            <dl className="space-y-3">
              <div>
                <dt className="font-bold text-gray-800 mb-1">クロネコヤマト</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">
                  全国一律送料でお届けします
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Return */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-sdgs-green hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sdgs-green/5 to-sdgs-light-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 p-3 bg-gradient-to-r from-sdgs-green to-sdgs-light-green rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">RETURN</h3>
                <p className="text-sm text-sdgs-green font-medium">返品について</p>
              </div>
            </div>
            <dl className="space-y-4">
              <div>
                <dt className="font-bold text-gray-800 mb-1">不良品</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">
                  商品到着後速やかにご連絡ください。商品に欠陥がある場合を除き、返品には応じかねますのでご了承ください。
                </dd>
              </div>
              <div>
                <dt className="font-bold text-gray-800 mb-1">返品期限</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">
                  商品到着後７日以内とさせていただきます。
                </dd>
              </div>
              <div>
                <dt className="font-bold text-gray-800 mb-1">返品送料</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">
                  お客様都合による返品につきましてはお客様のご負担とさせていただきます。不良品に該当する場合は当方で負担いたします。
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-sdgs-orange hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sdgs-orange/5 to-sdgs-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 p-3 bg-gradient-to-r from-sdgs-orange to-sdgs-yellow rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">PAYMENT</h3>
                <p className="text-sm text-sdgs-orange font-medium">お支払いについて</p>
              </div>
            </div>
            <dl className="space-y-3">
              <div>
                <dt className="font-bold text-gray-800 mb-1">商品代引き（ゆうパック・ゆうメール）</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">
                  代金引換でのお支払いが可能です
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
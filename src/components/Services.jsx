import { motion } from 'framer-motion'
import { Zap, Leaf, Factory, Building, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 'energy',
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: '能源再造',
      subtitle: '提升能源使用效率，導入智慧化系統',
      description: '透過先進的能源管理技術和智慧化系統，幫助企業優化能源使用效率，降低營運成本，實現可持續發展目標。',
      features: [
        '能源使用分析與診斷',
        '智慧能源管理系統導入',
        '再生能源整合規劃',
        '能源效率優化方案',
        '即時監控與報告系統'
      ],
      benefits: [
        '降低能源成本 20-40%',
        '提升能源使用效率',
        '減少碳排放量',
        '符合國際標準認證'
      ]
    },
    {
      id: 'carbon',
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: '企業減碳',
      subtitle: '協助碳盤查、碳管理與減碳路徑規劃',
      description: '提供完整的碳管理解決方案，從碳盤查到減碳策略制定，協助企業達成淨零碳排目標，提升企業永續競爭力。',
      features: [
        'ISO 14064 碳盤查服務',
        '碳足跡計算與分析',
        '減碳路徑規劃',
        '碳中和策略制定',
        '碳權交易諮詢'
      ],
      benefits: [
        '符合國際碳管理標準',
        '提升品牌永續形象',
        '降低碳稅風險',
        '增強投資者信心'
      ]
    },
    {
      id: 'manufacturing',
      icon: <Factory className="w-12 h-12 text-primary" />,
      title: '智慧製造',
      subtitle: '整合工業數據與AI，打造低碳智慧工廠',
      description: '運用物聯網、大數據分析和人工智慧技術，協助製造業轉型升級，建立智慧化、低碳化的生產體系。',
      features: [
        '工業4.0系統整合',
        'IoT設備監控與管理',
        'AI預測性維護',
        '生產流程優化',
        '品質管理系統'
      ],
      benefits: [
        '提升生產效率 15-30%',
        '降低設備故障率',
        '減少資源浪費',
        '提高產品品質'
      ]
    },
    {
      id: 'building',
      icon: <Building className="w-12 h-12 text-primary" />,
      title: '建築低碳',
      subtitle: '從建築設計到營運，建構淨零碳排路徑',
      description: '提供全生命週期的綠色建築解決方案，從設計規劃到營運管理，協助建築物達成低碳、節能、舒適的目標。',
      features: [
        '綠建築設計諮詢',
        'LEED/BREEAM認證輔導',
        '建築能效評估',
        '智慧建築系統整合',
        '營運階段優化'
      ],
      benefits: [
        '獲得綠建築認證',
        '降低營運成本',
        '提升建築價值',
        '改善室內環境品質'
      ]
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            我們的服務
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            專業的永續顧問團隊，為您提供全方位的智慧節能解決方案，
            協助企業在永續發展的道路上取得成功
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-50 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                      <p className="text-lg text-primary font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        服務內容
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        預期效益
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild size="lg">
                    <Link to="/contact">
                      立即諮詢 <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="h-80 bg-gradient-to-br from-green-50 to-primary/10">
                    <CardContent className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="p-6 bg-white rounded-full shadow-lg mb-6 inline-block">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">
                          專業解決方案
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            準備開始您的永續之旅？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            聯絡我們的專業顧問團隊，為您量身打造最適合的永續解決方案
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-3">
              <Link to="/contact">
                立即聯絡我們 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services


import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Calendar, MapPin, TrendingUp, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Cases = () => {
  const [expandedCase, setExpandedCase] = useState(null)

  const cases = [
    {
      id: 1,
      title: '大型製造業智慧節能改造',
      category: '智慧製造',
      client: '某知名電子製造商',
      location: '台中工業區',
      date: '2023年6月',
      image: 'https://static.wixstatic.com/media/yyy.jpg',
      summary: '透過IoT設備監控與AI分析，成功降低30%能源消耗，年節省電費超過500萬元。',
      challenge: '該製造商面臨能源成本持續上升的挑戰，傳統的能源管理方式無法有效控制成本，急需導入智慧化解決方案。',
      solution: '我們為客戶設計了完整的智慧能源管理系統，包括：IoT感測器網路建置、即時能源監控平台、AI預測分析系統、自動化控制系統整合。',
      results: [
        '能源消耗降低30%',
        '年節省電費500萬元',
        '設備效率提升25%',
        '碳排放減少40%',
        'ROI回收期僅18個月'
      ],
      technologies: ['IoT', 'AI分析', '雲端平台', '自動化控制'],
      impact: '此專案成為業界標竿案例，客戶後續擴展至其他廠區，總節能效益超過千萬元。'
    },
    {
      id: 2,
      title: '綠色辦公大樓LEED認證',
      category: '建築低碳',
      client: '某國際企業總部',
      location: '台北信義區',
      date: '2023年9月',
      image: 'https://static.wixstatic.com/media/yyy.jpg',
      summary: '協助取得LEED Gold認證，建築能效提升40%，成為台灣綠建築典範。',
      challenge: '客戶希望新建總部大樓能夠獲得國際綠建築認證，展現企業永續承諾，但對認證流程與技術要求不熟悉。',
      solution: '提供全方位綠建築顧問服務，包括：LEED認證策略規劃、綠建築設計諮詢、能源模擬分析、施工階段監督、認證文件準備與申請。',
      results: [
        '成功取得LEED Gold認證',
        '建築能效提升40%',
        '室內空氣品質優化',
        '雨水回收系統建置',
        '綠屋頂與立體綠化'
      ],
      technologies: ['BIM建模', '能源模擬', '智慧建築系統', '再生能源'],
      impact: '該建築成為台灣綠建築標竿，吸引多家企業參訪學習，推動產業綠建築發展。'
    },
    {
      id: 3,
      title: '企業碳中和路徑規劃',
      category: '企業減碳',
      client: '某大型零售集團',
      location: '全台門市',
      date: '2023年12月',
      image: 'https://static.wixstatic.com/media/yyy.jpg',
      summary: '完成全集團碳盤查，制定2030年碳中和路徑，獲得國際投資人高度認可。',
      challenge: '面對國際供應鏈對碳中和的要求，客戶需要建立完整的碳管理體系，制定可行的減碳策略。',
      solution: '執行全面性碳管理專案，包括：ISO 14064碳盤查、供應鏈碳足跡分析、減碳策略制定、碳中和路徑規劃、內部碳管理制度建立。',
      results: [
        '完成全集團碳盤查',
        '制定2030碳中和路徑',
        '供應鏈減碳20%',
        '獲得SBTi目標認證',
        '提升ESG評級'
      ],
      technologies: ['碳盤查軟體', '生命週期評估', '數據分析平台', '區塊鏈追蹤'],
      impact: '成為台灣零售業首家承諾碳中和的企業，帶動整個產業鏈的永續轉型。'
    },
    {
      id: 4,
      title: '工業園區微電網建置',
      category: '能源再造',
      client: '某科技園區',
      location: '新竹科學園區',
      date: '2024年3月',
      image: 'https://static.wixstatic.com/media/yyy.jpg',
      summary: '建置智慧微電網系統，整合太陽能與儲能設備，提升園區能源自主性。',
      challenge: '園區面臨電力供應不穩定與成本上升問題，需要建立自主性更高的能源系統。',
      solution: '設計並建置智慧微電網系統，包括：太陽能發電系統、儲能系統、智慧電網管理、需量反應機制、緊急備援系統。',
      results: [
        '再生能源占比達60%',
        '電力成本降低35%',
        '供電穩定性提升',
        '碳排放減少50%',
        '獲得政府補助認可'
      ],
      technologies: ['太陽能', '儲能系統', '智慧電網', 'AI調度'],
      impact: '成為台灣首個大規模工業園區微電網示範案例，為其他園區提供參考模式。'
    }
  ]

  const toggleExpand = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId)
  }

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
            成功案例
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            透過專業的永續顧問服務，我們協助眾多企業實現節能減碳目標，
            創造經濟效益與環境價值的雙贏局面
          </motion.p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="cursor-pointer" onClick={() => toggleExpand(caseItem.id)}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {caseItem.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {caseItem.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            {caseItem.location}
                          </div>
                        </div>
                        <CardTitle className="text-2xl mb-2">{caseItem.title}</CardTitle>
                        <p className="text-gray-600">{caseItem.summary}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        {expandedCase === caseItem.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>

                  <AnimatePresence>
                    {expandedCase === caseItem.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Image */}
                            <div className="lg:col-span-1">
                              <div className="aspect-square bg-gradient-to-br from-green-50 to-primary/10 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                                  <p className="text-lg font-semibold text-gray-800">
                                    {caseItem.category}
                                  </p>
                                  <p className="text-sm text-gray-600">成功案例</p>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-2 space-y-6">
                              {/* Client Info */}
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  客戶資訊
                                </h3>
                                <p className="text-gray-700">{caseItem.client}</p>
                              </div>

                              {/* Challenge */}
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  面臨挑戰
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                  {caseItem.challenge}
                                </p>
                              </div>

                              {/* Solution */}
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  解決方案
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                  {caseItem.solution}
                                </p>
                              </div>

                              {/* Technologies */}
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  應用技術
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {caseItem.technologies.map((tech, idx) => (
                                    <Badge key={idx} variant="outline">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Results */}
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  專案成果
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {caseItem.results.map((result, idx) => (
                                    <div key={idx} className="flex items-center">
                                      <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                      <span className="text-gray-700">{result}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Impact */}
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  專案影響
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                  {caseItem.impact}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              我們的成就
            </h2>
            <p className="text-xl text-gray-600">
              數字說明一切，我們為客戶創造的實際價值
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: '成功專案', icon: <Award className="w-8 h-8" /> },
              { number: '30%', label: '平均節能效益', icon: <TrendingUp className="w-8 h-8" /> },
              { number: '1000萬+', label: '累計節省成本', icon: <TrendingUp className="w-8 h-8" /> },
              { number: '40%', label: '平均減碳成效', icon: <TrendingUp className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cases


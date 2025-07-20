import { motion } from 'framer-motion'
import { Users, Target, Globe, Award, Heart, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: '創新思維',
      description: '持續探索最新技術與解決方案，為客戶提供創新的永續服務'
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: '專業承諾',
      description: '以專業知識與豐富經驗，為每位客戶量身打造最適合的解決方案'
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: '永續發展',
      description: '致力於推動企業永續轉型，為地球環境貢獻一份心力'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: '團隊合作',
      description: '跨領域專業團隊協作，提供全方位的顧問服務'
    }
  ]

  const team = [
    {
      name: '張執行長',
      position: '執行長暨創辦人',
      expertise: '永續策略、企業轉型',
      experience: '15年永續顧問經驗，曾服務多家跨國企業',
      education: '台大環工博士、MIT永續管理碩士'
    },
    {
      name: '李技術長',
      position: '技術長',
      expertise: '智慧製造、IoT系統整合',
      experience: '12年工業4.0實務經驗，擁有多項技術專利',
      education: '清大電機博士、德國工業4.0認證'
    },
    {
      name: '王顧問',
      position: '資深顧問',
      expertise: '碳管理、綠建築認證',
      experience: '10年碳盤查與綠建築顧問經驗',
      education: '成大建築碩士、LEED AP認證'
    },
    {
      name: '陳經理',
      position: '專案經理',
      expertise: '能源管理、數據分析',
      experience: '8年能源管理系統導入經驗',
      education: '台科大能源工程碩士、CEM認證'
    }
  ]

  const milestones = [
    {
      year: '2019',
      title: '公司成立',
      description: 'Smart Green 正式成立，開始提供永續顧問服務'
    },
    {
      year: '2020',
      title: '技術突破',
      description: '開發自主智慧能源管理平台，獲得多項技術認證'
    },
    {
      year: '2021',
      title: '業務擴展',
      description: '服務範圍擴展至智慧製造與綠建築領域'
    },
    {
      year: '2022',
      title: '國際認可',
      description: '獲得國際永續顧問認證，成為台灣領先業者'
    },
    {
      year: '2023',
      title: '里程碑',
      description: '累計服務超過50家企業，節能效益突破千萬元'
    },
    {
      year: '2024',
      title: '持續創新',
      description: '推出AI驅動的碳管理解決方案，引領產業發展'
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
            關於我們
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Smart Green 致力於成為台灣領先的智慧節能與永續顧問服務提供者，
            以專業技術與創新思維，協助企業實現永續發展目標
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">我們的使命</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                透過專業的永續顧問服務與創新技術解決方案，協助企業在追求經濟成長的同時，
                實現環境保護與社會責任的平衡發展。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                我們相信永續發展不僅是企業的社會責任，更是未來競爭力的關鍵。
                因此，我們致力於為客戶創造經濟效益與環境價值的雙贏局面。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Globe className="w-10 h-10 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">我們的願景</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                成為亞太地區最具影響力的永續顧問服務提供者，引領企業邁向淨零碳排的未來，
                為下一代創造更美好的地球環境。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                我們期望透過持續的技術創新與服務優化，建立永續發展的生態系統，
                讓更多企業能夠輕鬆踏上永續轉型的道路。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心價值</h2>
            <p className="text-xl text-gray-600">
              我們的價值觀指引著每一個決策與行動
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-50 rounded-full">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">專業團隊</h2>
            <p className="text-xl text-gray-600">
              擁有豐富經驗的跨領域專家，為您提供最專業的服務
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-green-200/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {member.position}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>專業領域：</strong>{member.expertise}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>工作經歷：</strong>{member.experience}
                        </p>
                        <p className="text-gray-600">
                          <strong>學歷認證：</strong>{member.education}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">發展歷程</h2>
            <p className="text-xl text-gray-600">
              從創立至今，我們持續成長與創新的重要里程碑
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">專業認證</h2>
            <p className="text-xl text-gray-600 mb-8">
              我們擁有多項國際認證，確保服務品質與專業水準
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'ISO 14064 碳盤查認證',
              'LEED AP 綠建築認證',
              'CEM 能源管理認證',
              'SBTi 科學減碳目標認證'
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <p className="text-gray-700 font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


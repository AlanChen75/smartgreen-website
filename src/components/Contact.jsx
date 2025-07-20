import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 這裡可以添加表單提交邏輯
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // 重置表單
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: '電話',
      content: '+886-2-1234-5678',
      description: '週一至週五 09:00-18:00'
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: '電子郵件',
      content: 'info@smartgreen.com.tw',
      description: '24小時內回覆'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: '辦公地址',
      content: '台北市信義區信義路五段7號',
      description: '台北101大樓35樓'
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: '營業時間',
      content: '週一至週五 09:00-18:00',
      description: '國定假日休息'
    }
  ]

  const services = [
    '能源再造',
    '企業減碳',
    '智慧製造',
    '建築低碳',
    '其他諮詢'
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
            聯絡我們
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            準備開始您的永續之旅？我們的專業顧問團隊隨時為您提供諮詢服務，
            協助您制定最適合的永續解決方案
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">立即諮詢</CardTitle>
                  <p className="text-gray-600">
                    填寫以下表單，我們將在24小時內與您聯繫
                  </p>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">姓名 *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                            placeholder="請輸入您的姓名"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">電子郵件 *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">公司名稱</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="請輸入公司名稱"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">聯絡電話</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="09XX-XXX-XXX"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service">感興趣的服務</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">請選擇服務項目</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">留言內容 *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-1"
                          placeholder="請詳細描述您的需求或問題..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        送出諮詢
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        感謝您的諮詢！
                      </h3>
                      <p className="text-gray-600">
                        我們已收到您的訊息，將在24小時內與您聯繫。
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  聯絡資訊
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  我們的專業團隊隨時準備為您提供最優質的永續顧問服務。
                  無論您有任何問題或需求，都歡迎與我們聯繫。
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-green-50 rounded-lg">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-gray-800 font-medium mb-1">
                              {info.content}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-green-100 to-primary/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                        <p className="text-lg font-semibold text-gray-800">
                          台北市信義區
                        </p>
                        <p className="text-gray-600">
                          台北101大樓35樓
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              常見問題
            </h2>
            <p className="text-xl text-gray-600">
              以下是客戶最常詢問的問題，或許能為您提供參考
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: '你們的服務範圍包含哪些項目？',
                answer: '我們提供能源再造、企業減碳、智慧製造、建築低碳等四大核心服務，涵蓋從策略規劃到技術實施的完整解決方案。'
              },
              {
                question: '專案執行需要多長時間？',
                answer: '專案時程依據複雜度而定，一般而言，碳盤查專案需要2-3個月，智慧製造系統導入需要6-12個月，我們會在初期評估時提供詳細時程規劃。'
              },
              {
                question: '你們有哪些成功案例？',
                answer: '我們已成功服務超過50家企業，包括製造業、科技業、零售業等，平均為客戶節省30%能源成本，詳細案例可參考我們的案例頁面。'
              },
              {
                question: '如何開始合作？',
                answer: '您可以透過聯絡表單或電話與我們聯繫，我們會安排專業顧問進行免費初步諮詢，了解您的需求後提供客製化解決方案。'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact


import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Factory, Building, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Home = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: '能源再造',
      description: '提升能源使用效率，導入智慧化系統',
      link: '/services#energy'
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: '企業減碳',
      description: '協助碳盤查、碳管理與減碳路徑規劃',
      link: '/services#carbon'
    },
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: '智慧製造',
      description: '整合工業數據與AI，打造低碳智慧工廠',
      link: '/services#manufacturing'
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: '建築低碳',
      description: '從建築設計到營運，建構淨零碳排路徑',
      link: '/services#building'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://static.wixstatic.com/media/xxx.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Smart <span className="text-primary">Green</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
          >
            我們以國際視野，結合在地實務經驗，<br />
            提供智慧節能與永續顧問服務。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link to="/services">
                探索服務 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <Link to="/contact">聯絡我們</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-green-200/30 rounded-full"
        />
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">我們的服務</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              專業的永續顧問團隊，為您提供全方位的智慧節能解決方案
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-green-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                    >
                      了解更多 <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                引領永續未來
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Smart Green 致力於成為台灣領先的智慧節能與永續顧問服務提供者。
                我們結合國際先進技術與在地實務經驗，為企業打造量身定制的永續解決方案。
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                從能源效率提升到碳管理策略，從智慧製造到綠色建築，
                我們的專業團隊協助客戶在永續發展的道路上取得成功。
              </p>
              <Button asChild size="lg">
                <Link to="/about">
                  了解更多 <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-green-200/30 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-gray-800">永續發展</p>
                  <p className="text-lg text-gray-600">智慧未來</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


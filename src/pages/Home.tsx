import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Home as HomeIcon, 
  Star
} from 'lucide-react';
import { MOCK_BENTO_ITEMS } from '../constants';
import { BentoCard } from '../components/BentoCard';

export const Home = () => {
  const navigate = useNavigate();
  const featuredItems = [MOCK_BENTO_ITEMS[0], MOCK_BENTO_ITEMS[1], MOCK_BENTO_ITEMS[5]];

  const healthGoals = [
    { name: '減脂餐', icon: <span className="text-3xl">🔥</span>, color: 'bg-orange-100 text-orange-600', tag: '減脂' },
    { name: '增肌餐', icon: <span className="text-3xl">💪</span>, color: 'bg-blue-100 text-blue-600', tag: '增肌' },
    { name: '腸胃調整', icon: <span className="text-3xl">🍅</span>, color: 'bg-green-100 text-green-600', tag: '低卡' },
    { name: '兒童營養', icon: <span className="text-3xl">🧒</span>, color: 'bg-purple-100 text-purple-600', tag: '均衡' },
  ];

  return (
    <div className="pb-20 space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1920&q=80"
            alt="Healthy Lifestyle"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="glass-card !bg-white/15 !backdrop-blur-md !border-white/30 text-white">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-accent text-white font-black text-xs mb-8 uppercase tracking-[0.2em] shadow-lg shadow-accent/20"
              >
                讓身體成為你想要的樣子
              </motion.span>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
                阿爸的家園<br />
                <span className="text-white/60">健康便當</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-medium max-w-xl">
                我們相信，健康的身體始於每一口真實的食物。透過精心調配的營養比例，帶給您家的溫暖。
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/menu" className="btn-accent text-center py-5 text-xl flex items-center justify-center group !px-12">
                  開始健康飲食
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/menu" className="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-black border border-white/30 hover:bg-white hover:text-primary transition-all duration-500 text-center text-xl">
                  查看今日菜單
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Goals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Personalized Nutrition</span>
          <h2 className="section-title">選擇你的健康目標</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {healthGoals.map((goal, index) => (
            <motion.button
              key={goal.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/menu?tag=${goal.tag}`)}
              className="group relative bg-white p-8 rounded-[2.5rem] shadow-sm border border-warm-beige/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              <div className={`w-16 h-16 ${goal.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                {goal.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 group-hover:text-primary transition-colors">{goal.name}</h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="bg-warm-beige/30 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
            <div className="text-center md:text-left">
              <span className="section-subtitle">Best Sellers</span>
              <h2 className="section-title">熱門健康餐點</h2>
            </div>
            <Link to="/menu" className="btn-primary !bg-white !text-primary border border-primary/10 hover:!bg-primary hover:!text-white flex items-center">
              瀏覽所有菜單 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredItems.map((item) => (
              <BentoCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary shadow-inner">
              <Leaf className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black">嚴選天然食材</h3>
              <p className="text-gray-500 leading-relaxed">堅持使用在地小農蔬菜與優質肉品，無添加人工調味。</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary shadow-inner">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black">專業營養調配</h3>
              <p className="text-gray-500 leading-relaxed">由營養師精準計算熱量與三大營養素，滿足不同健康需求。</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary shadow-inner">
              <HomeIcon className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black">家的溫暖滋味</h3>
              <p className="text-gray-500 leading-relaxed">每一份餐盒都帶著阿爸的用心，讓您吃得安心又舒心。</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="bg-primary py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 leading-tight">
            「自從開始吃阿爸的便當，我不再為午餐煩惱，身體也感覺更輕盈了！」
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30" />
            <div className="text-left">
              <p className="text-white font-bold">林小姐</p>
              <p className="text-white/60 text-sm">上班族 / 減脂計畫中</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


import { motion } from 'framer-motion'
import { StarsCanvas } from '../canvas'

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden">
            <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-neon-purple shadow-[0_0_20px_rgba(123,47,247,0.8)]' />
                    <div className='w-1 sm:h-80 h-40 purple-gradient opacity-50' />
                </div>

                <div>
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 font-black leading-tight"
                    >
                        شركة <span className='text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink'>المستقبل الرقمي</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-dark-secondary font-medium lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[40px] mt-4 max-w-2xl"
                    >
                        نحن شركة تدمج الإبداع مع التقنية لتقديم حلول مبتكرة… <br className="sm:block hidden" />
                        نصمم أعمالاً ثلاثية الأبعاد تنبض بالحياة وتجذب العملاء.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-10"
                    >
                        <a href="#projects" className="bg-neon-purple hover:bg-neon-pink text-white px-8 py-4 rounded-full font-bold text-lg shadow-neon transition-all duration-300 transform hover:scale-105 inline-block">
                            استعرض مشاريعنا
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 z-0">
                <StarsCanvas />
            </div>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-dark-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-dark-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero

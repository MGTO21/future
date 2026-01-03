import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { cn } from '../../lib/utils'

const services = [
    { title: "تصميم مواقع 3D", icon: "🌐" },
    { title: "تطوير واجهات تفاعلية", icon: "💻" },
    { title: "حلول VR / AR", icon: "🥽" },
    { title: "هوية بصرية مبتكرة", icon: "🎨" },
]

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: index * 0.2, duration: 0.75 }}
            className='w-full p-[1px] rounded-[20px] shadow-card bg-gradient-to-b from-neon-purple to-neon-pink'
        >
            <div
                options={{ max: 45, scale: 1, speed: 450 }}
                className='bg-dark-tertiary rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col glassmorphism border border-white/10'
            >
                <span className='text-6xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse'>{icon}</span>
                <h3 className='text-white text-[20px] font-bold text-center mt-5'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
)

const About = () => {
    return (
        <section id="about" className="sm:px-16 px-6 sm:py-24 py-16 max-w-7xl mx-auto relative z-0">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-right"
            >
                <p className="sm:text-[20px] text-[16px] text-neon-purple font-bold uppercase tracking-widest">مقدمة</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[35px]">عن الشركة.</h2>
            </motion.div>

            <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-8 text-dark-secondary text-[18px] max-w-3xl leading-[35px] text-right ml-auto'
            >
                نحن شركة تدمج الإبداع مع التقنية لتقديم حلول مبتكرة تتجاوز التوقعات. نؤمن بأن المستقبل الرقمي يجب أن يكون تجربة غامرة وتفاعلية، لذا نسعى دائماً لابتكار واجهات ثلاثية الأبعاد تعزز من هوية علامتك التجارية وتجذب عملائك بطرق غير تقليدية.
            </motion.p>

            <div className='mt-24 flex flex-wrap gap-12 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    )
}

export default About

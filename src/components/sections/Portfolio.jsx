import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

const projects = [
    {
        name: "مشروع ميتافيرس",
        description: "منصة واقع افتراضي متكاملة للشركات تتيح تجربة تسوق فريدة ثلاثية الأبعاد.",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "three.js", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "تطبيق AR العقاري",
        description: "تطبيق يتيح للمستخدمين معاينة العقارات بتقنية الواقع المعزز قبل الشراء.",
        tags: [
            { name: "nextjs", color: "blue-text-gradient" },
            { name: "supabase", color: "green-text-gradient" },
            { name: "css", color: "pink-text-gradient" },
        ],
        image: "https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?q=80&w=2046&auto=format&fit=crop",
    },
    {
        name: "متجر أزياء 3D",
        description: "تجربة تسوق فريدة تتيح للمستخدمين تجربة الملابس افتراضياً قبل الشراء.",
        tags: [
            { name: "shopify", color: "blue-text-gradient" },
            { name: "threejs", color: "green-text-gradient" },
            { name: "gsap", color: "pink-text-gradient" },
        ],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2046&auto=format&fit=crop",
    },
]

const ProjectCard = ({ index, name, description, tags, image }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <Tilt
                options={{ max: 45, scale: 1.05, speed: 450 }}
                className="bg-dark-tertiary p-5 rounded-3xl sm:w-[360px] w-full glassmorphism border border-white/10 shadow-card"
            >
                <div className='relative w-full h-[230px] group overflow-hidden rounded-2xl'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <button className='bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform'>عرض التفاصيل</button>
                    </div>
                </div>

                <div className='mt-5 text-right'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-3 text-dark-secondary text-[15px] leading-relaxed h-[60px] overflow-hidden'>{description}</p>
                </div>

                <div className='mt-6 flex flex-wrap gap-3 justify-end'>
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] font-bold ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Portfolio = () => {
    return (
        <section id="projects" className="sm:px-16 px-6 sm:py-24 py-16 max-w-7xl mx-auto relative z-0">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-right"
            >
                <p className="sm:text-[20px] text-[16px] text-neon-pink font-bold uppercase tracking-widest">أعمالنا المميزة</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[35px]">المشاريع.</h2>
            </motion.div>

            <div className='w-full flex justify-end'>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='mt-6 text-dark-secondary text-[18px] max-w-3xl leading-[35px] text-right ml-auto'
                >
                    نحن لا نصمم مجرد مواقع، بل نبني تجارب رقمية غامرة. كل مشروع هنا يمثل قصة نجاح ودمجاً مثالياً بين الفن والبرمجة ثلاثية الأبعاد.
                </motion.p>
            </div>

            <div className='mt-24 flex flex-wrap gap-10 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio

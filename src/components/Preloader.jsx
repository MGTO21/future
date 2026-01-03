import { motion } from 'framer-motion'

const Preloader = () => {
    return (
        <div className='fixed inset-0 z-[100] bg-dark-primary flex flex-col justify-center items-center'>
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
                className='w-16 h-16 bg-neon-purple shadow-neon'
            />
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='text-white mt-10 text-2xl font-bold font-arabic'
            >
                جاري تصميم المستقبل...
            </motion.h2>
        </div>
    )
}

export default Preloader

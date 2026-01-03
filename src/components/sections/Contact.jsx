import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { SphereCanvas } from '../canvas'

const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            alert('شكراً لتواصلك معنا. سنرد عليك في أقرب وقت.')
            setForm({ name: '', email: '', message: '' })
        }, 2000)
    }

    return (
        <section id="contact" className="sm:px-16 px-6 sm:py-24 py-16 max-w-7xl mx-auto relative z-0">
            <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-16 overflow-hidden items-center`}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='flex-[0.75] bg-dark-tertiary p-10 rounded-3xl glassmorphism border border-white/10 shadow-card'
                >
                    <p className="sm:text-[20px] text-[16px] text-neon-blue font-bold uppercase tracking-widest text-right">ابدأ رحلتك معنا</p>
                    <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[35px] text-right">تواصل معنا.</h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-12 flex flex-col gap-8'
                    >
                        <label className='flex flex-col'>
                            <span className='text-white font-semibold mb-4 text-right'>الاسم الكامل</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="أدخل اسمك هنا..."
                                className='bg-dark-primary/50 py-4 px-6 placeholder:text-dark-secondary text-white rounded-xl outline-none focus:ring-2 focus:ring-neon-purple border border-white/5 font-medium text-right transition-all'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-semibold mb-4 text-right'>البريد الإلكتروني</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="example@domain.com"
                                className='bg-dark-primary/50 py-4 px-6 placeholder:text-dark-secondary text-white rounded-xl outline-none focus:ring-2 focus:ring-neon-blue border border-white/5 font-medium text-right transition-all'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-semibold mb-4 text-right'>ماذا يدور في ذهنك؟</span>
                            <textarea
                                rows={5}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder="اكتب رسالتك هنا..."
                                className='bg-dark-primary/50 py-4 px-6 placeholder:text-dark-secondary text-white rounded-xl outline-none focus:ring-2 focus:ring-neon-pink border border-white/5 font-medium text-right transition-all'
                                required
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-gradient-to-r from-neon-purple to-neon-pink py-4 px-10 rounded-2xl outline-none w-fit text-white font-black text-xl shadow-neon hover:opacity-90 transition-all duration-300 self-end'
                        >
                            {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full'
                >
                    <SphereCanvas />
                </motion.div>
            </div>
        </section>
    )
}

export default Contact

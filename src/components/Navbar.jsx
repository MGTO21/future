import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { id: "about", title: "عن الشركة" },
    { id: "services", title: "الخدمات" },
    { id: "projects", title: "المشاريع" },
    { id: "testimonials", title: "آراء العملاء" },
    { id: "contact", title: "تواصل معنا" },
]

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            if (scrollTop > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-dark-primary/60 backdrop-blur-xl border-b border-neon-purple/20" : "bg-transparent"}`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-4'
                    onClick={() => {
                        setActive("")
                        window.scrollTo(0, 0)
                    }}
                >
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Future&nbsp;
                        <span className='sm:block hidden text-neon-purple'> | Creative Portfolio</span>
                    </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-neon-purple" : "text-dark-secondary"} hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div onClick={() => setToggle(!toggle)} className='cursor-pointer text-white'>
                        {toggle ? <X size={28} /> : <Menu size={28} />}
                    </div>

                    <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-dark-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl glassmorphism`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-dark-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(link.title)
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

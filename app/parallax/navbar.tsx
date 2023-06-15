import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from './image/logo.svg'

const NavBar = () => {
    return(
        <nav className="fixed flex p-6 items-center Nav-container justify-between rounded-xl bg-white/20 backdrop-blur-md w-screen h-16 ">
            <Image src={logo} alt='logo-panu' className=' w-20 h-7'></Image>
            <ul className=" flex pr-11 space-x-12">
                <li><Link href='/'>Projects</Link></li>
                <li><Link href=''>Profile</Link></li>
                <li><Link href=''>Contact</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar
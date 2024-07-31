import styles from './Header.module.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { RxHamburgerMenu } from "react-icons/rx";
import Menu from '../../Menu/Menu';
import { useState } from 'react';

import { CiSquareRemove } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser, FaPhone } from "react-icons/fa6";

import { GrProjects } from "react-icons/gr";
import { Link } from 'react-router-dom';
import MobileHeader from '../Mobile/MobileHeader';
function Header() {
    let [menu, setMenu] = useState(false)
    
    return (
        <>
            <header className={styles.mobile}>
                <MobileHeader />
            </header >
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h1>hnn</h1>
                </div>

                <nav className={styles.nav}>
                    <Link to='/' style={{textDecoration:"none"}}>
                        <p><AiOutlineHome /> Home</p>
                    </Link>
                    <Link to='/about' style={{textDecoration:"none"}}>
                        <p>
                            <FaRegUser /> About me
                        </p>
                    </Link>
                    <Link to="/projects" style={{textDecoration:"none"}}>
                        <p><GrProjects /> Projects</p>
                    </Link>
                    <Link to="/contact" style={{textDecoration:"none"}}>
                        <p><FaPhone /> Contact</p>
                    </Link>
                </nav>

                <div className={styles.social_media}>
                    <nav className={styles.links}>
                        <a>
                            <FaLinkedin />
                        </a>
                        <a >
                            <FaGithub />
                        </a>
                        <a>
                            <FaWhatsapp />
                        </a>
                        <a>
                            <FaXTwitter />
                        </a>

                    </nav>
                </div>
                {/* <div className="menu">
                    <RxHamburgerMenu style={{ color: "white", fontSize: "2rem" , cursor:"pointer"}} onClick={()=>setMenu(!menu)}/>
                </div> */}
            </div>
        </>
    )
}
export default Header;
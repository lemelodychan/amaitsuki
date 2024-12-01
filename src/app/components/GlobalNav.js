"use client"
import { useState } from "react";

import Image from 'next/image';
import styles from "./GlobalNav.module.scss";
import Link from "next/link";
import { usePathname} from 'next/navigation';

import Menu from "./Menu"
import SocialMenu from "./SocialMenu";

import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

    const pathname = usePathname();

    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
        if (showMe === false) {
            document.querySelector("body").classList.add("overflowHidden");
        } else if (showMe === true) {
            document.querySelector("body").classList.remove("overflowHidden");
        };
    }

    function closeMenu() {
        setShowMe(false);
        document.querySelector("body").classList.remove("overflowHidden");
      }

    return (
        <div className={styles.navigation}>
            <SocialMenu />
            <div className={styles.menu}>
                <Link 
                    href="/"
                    className={styles.Logo} >
                    <Image 
                        alt="Amaitsuki Logo"
                        src="/Logo.svg"
                        width={70}
                        height={48}
                    />
                </Link>

                <nav className={styles.navbar} role="navigation">
                    <Menu />
                </nav>
                
                <button onClick={toggle} className={styles.mobilebutton}>
                    <HiMenuAlt3 style={{ display: showMe?"none":"block" }} />
                </button>
            </div>

            <div 
                className={styles.mobilemenu}
                style={{ display: showMe?"block":"none" }}
            >
                <button onClick={toggle} className={styles.mobilebutton}>
                    <HiX style={{ display: showMe?"block":"none" }} />
                </button>
                <nav className={styles.navbar} role="navigation">
                    <Link 
                        href="/"
                        className={styles.Logo} >
                        <Image 
                            alt="Amaitsuki Logo"
                            src="/Logo_white.svg"
                            width={70}
                            height={48}
                        />
                    </Link>
                    <Menu closeMenu={closeMenu} />
                    <SocialMenu />
                </nav>
            </div>
        </div>
    )
}
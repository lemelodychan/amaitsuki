"use client"
import { useState } from "react";
import { usePathname} from 'next/navigation';

import Link from "next/link";
import Image from "next/image";
import styles from './Menu.module.scss';

export default function Menu({ closeMenu }) {

    const pathname = usePathname();

    return (
        <>
            <ul className={`${styles.menuContent} ${styles.menuLeft}`}>
                <li>
                    <Link 
                        onClick={closeMenu}
                        href="/"
                        className={pathname == "/" ? "active" : ""} >
                            Home
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={closeMenu}
                        href="/about"
                        className={pathname == "/about" ? "active" : ""} >
                            About Us
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={closeMenu}
                        href="/all-videos"
                        className={pathname == "/all-videos" ? "active" : ""} >
                            Videos
                    </Link>
                </li>
            </ul>
            <Link 
                onClick={closeMenu}
                href="/"
                className={styles.Logo} >
                <Image 
                    alt="Amaitsuki Logo"
                    src="/Logo.svg"
                    width={70}
                    height={64}
                />
            </Link>
            <ul className={`${styles.menuContent} ${styles.menuRight}`}>
                <li>
                    <Link 
                        onClick={closeMenu}
                        href="/members"
                        className={pathname == "/members" ? "active" : ""} >
                            Members
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={closeMenu}
                        href="/auditions"
                        className={pathname == "/auditions" ? "active" : ""} >
                            Auditions
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={closeMenu}
                        href="/contact"
                        className={pathname == "/contact" ? "active" : ""} >
                            Contact
                    </Link>
                </li>
            </ul>
        </>
    )
}
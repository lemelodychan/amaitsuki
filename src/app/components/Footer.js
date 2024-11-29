import { PrismicLink, PrismicText } from '@prismicio/react'
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from "@/prismicio";

import styles from './Footer.module.scss';
import { FaYoutube, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

export default async function Footer() {
    const client = createClient();

    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterWave}> 
                <svg width="1440" height="90" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_293_1287)">
                    <path d="M0 21.3L60 16C120 10.3 240 0.3 360 0C480 0.3 600 10.3 720 32C840 53.3 960 85.3 1080 85.3C1200 85.3 1320 53.3 1380 37.3L1440 21.3V181.3H1380C1320 181.3 1200 181.3 1080 181.3C960 181.3 840 181.3 720 181.3C600 181.3 480 181.3 360 181.3C240 181.3 120 181.3 60 181.3H0V21.3Z" fill="#BD96FD"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_293_1287">
                    <rect width="1440" height="90" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div className={styles.FooterContainer}>
                <div className={styles.Social}>
                    <Link href="https://www.youtube.com/@amaitsukiland" target="_blank">
                        <FaYoutube />
                    </Link>
                    <Link href="https://x.com/amaitsukiland" target="_blank">
                        <FaXTwitter />
                    </Link>
                    <Link href="https://www.instagram.com/amaitsukiland" target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.tiktok.com/@amaitsukiland" target="_blank">
                        <FaTiktok />
                    </Link>
                </div>
                <Image 
                    className={styles.Logo} 
                    src="/Logo_white.svg"
                    width={70}
                    height={64}
                />
                <div className={styles.Credits}>
                    Copyright 2008-2024 Amaitsukiland. All rights reserved. 
                    | Official Photo Credit: <a href="https://nathangey.com/" target="_blank">Nathan Gey</a></div>
            </div>
        </footer>
    )
}
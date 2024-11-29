import { PrismicLink, PrismicText } from '@prismicio/react'
import Image from 'next/image';
import { createClient } from "@/prismicio";

import styles from './Footer.module.scss';

export default async function Footer() {
    const client = createClient();

    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterWave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#BD96FD" fill-opacity="1" d="M0,64L80,90.7C160,117,320,171,480,160C640,149,800,75,960,42.7C1120,11,1280,21,1360,26.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
            <div className={styles.FooterContainer}>
                <div className={styles.Social}>Social Menu</div>
                <Image 
                    className={styles.Logo} 
                    src="../assets/Logo_white.svg"
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
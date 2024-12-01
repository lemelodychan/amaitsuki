import Link from "next/link";
import { FaYoutube, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import styles from './SocialMenu.module.scss';

export default function SocialMenu() {

    return (
        <div className={styles.SocialMenu}>
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
    )
}
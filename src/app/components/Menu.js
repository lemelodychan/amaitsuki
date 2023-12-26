import { PrismicLink, PrismicText } from '@prismicio/react'
import { createClient } from "@/prismicio";
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';

import styles from './Menu.module.scss';

export default async function Menu() {
    const client = createClient();
    const nav = await client.getSingle("global_nav");

    console.log(nav);

    return (
        <nav>
            <SliceZone slices={nav.data.slices} components={components} />
        </nav>
    )
}
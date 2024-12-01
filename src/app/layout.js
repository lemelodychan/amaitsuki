import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import './globals.css'

import Navbar from './components/GlobalNav';
import Footer from './components/Footer'

export const metadata = {
  title: 'Amaitsuki | Idol Dance and Vocal Cover Group from France',
  description: 'Amaitsuki is a Dance and Vocal Cover Group based in France. We cover Japanese pop idol songs on Youtube and perform in Japanese culture conventions across France and Switzerland.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Logo.svg" />
        <link rel="icon" href="/assets/Logo.png" type="image/x-icon" sizes="16x16"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,701,501,401,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
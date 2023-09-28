import TopNav from '@/components/TopNav'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import Footer_L from '@/components/Home-Components/Footer_L'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav/>
        <Navbar/>
        <MobileNav/>
        {children}
        <Footer/>
        <Footer_L/>



        
        </body>
    </html>
  )
}

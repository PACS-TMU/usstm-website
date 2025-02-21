import Navbar from './_components/general/navbar/navbar'
import Footer from './_components/general/footer'
import Banner from "@/app/_components/general/banner";
import './globals.css'
import {Cantarell} from 'next/font/google';

export const metadata = {
    metadataBase: new URL('https://www.usstm.ca'),
    title: {
        default: 'USSTM',
        template: '%s - USSTM',
      },
    description: 'Undergraduate Science Society of Toronto Metropolitan',
}

const cantarell = Cantarell({
    subsets: ['latin'],
    weight: ['400', '700'],
})

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={cantarell.className}>
        <Navbar/>
        <Banner/>
        <main className='space-y-20'>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}

import { Lato } from 'next/font/google'
import Navbar from './_components/general/navbar'
import Footer from './_components/general/footer'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"]
})

export const metadata = {
  title: 'USSTM',
  description: 'Undergraduate Science Society of Toronto Metropolitan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <Navbar />
        <main className='space-y-20'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

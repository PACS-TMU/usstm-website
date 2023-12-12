import Navbar from './_components/general/navbar/navbar'
import Footer from './_components/general/footer'
import './globals.css'

export const metadata = {
  title: 'USSTM',
  description: 'Undergraduate Science Society of Toronto Metropolitan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif">
        <Navbar />
        <main className='space-y-20'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

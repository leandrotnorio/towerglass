import './globals.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export const metadata = {
  title: 'AGT Vidros',
  description: 'Engenharia em tecnologia de vidros',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="box-border">
      <body className="overflow-x-hidden w-full max-w-full flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 m-2 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] });
const popins = Poppins({ subsets: ["latin"], weight: '500', style: ['normal'] });
const montserrat = Montserrat({ subsets: ["latin"], weight: '500', style: ['normal'] });

export const metadata: Metadata = {
  title: 'Amazon.com. Spend less. Smile more.',
  description: 'An Ecommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='removescroll'>
      {/* <body className={inter.className}>{children}</body> */}
      <body className={popins.className}>{children}</body>
      {/* <body className={montserrat.className}>{children}</body> */}
    </html>
  )
}

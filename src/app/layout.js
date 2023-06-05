import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Уборка и клининг в Бишкеке по цене от 39 сом за м2',
  description:
    'Клининговая компания «Clean Time осуществляет услуги по уборке квартир, офисов, коттеджей, загородных домов, и помещений различного назначения в Бишкеке. Вы можете сделать заказ на профессиональный клининг у нас на сайте или позвонить по телефону.',
  keywords: 'уборка квартир, клининг бишкек, заказать клининг, доступная цена'
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru' className='smooth-scroll'>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

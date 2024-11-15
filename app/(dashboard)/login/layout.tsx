import "@/app/_style/login/index.scss";

import { magra } from "@/app/_font/font"

export const metadata = {
  title: 'Админ Панель',
  description: 'Админка',

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={magra.className}>
      <body>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

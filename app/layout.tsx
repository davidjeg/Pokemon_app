import { MyContextProvider } from '../context/ContextWrapper'
import { Roboto } from '@next/font/google'
import '../styles/globals.css'
import Navbar from './components/Navbar'
import { MainLayout } from '../types'
const roboto = Roboto({
  weight: ['300', '400', '500', '700']
})
export default function RootLayout({
  children,
  title,
  description
}: MainLayout) {
  return (
    <MyContextProvider>
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <meta name="description" content={description} />
          <title>{title}</title>
        </head>
        <body className={roboto.className}>
          <Navbar />
          <main>
            <div>{children}</div>
          </main>
        </body>
      </html>
    </MyContextProvider>
  )
}

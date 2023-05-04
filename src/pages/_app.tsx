import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localfont from '@next/font/local';

const poppins = localfont({
  src: [
    {
      path: '../../public/fonts/AirbnbCereal_W_Bd.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/AirbnbCereal_W_Bd.otf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-sans`}>
    <Component {...pageProps} />
    </main>
  )
}

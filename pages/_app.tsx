import { Plus_Jakarta_Sans } from 'next/font/google'
import type { AppProps } from "next/app";
import Layout from '@components/Layout';
import "@styles/globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jakartaSans.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>Hello World</h1>
    <Link href="/about">Go to about page</Link>
    </main>
  )
}

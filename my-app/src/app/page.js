import Image from 'next/image'
import styles from '@/page.module.css';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import Items from './components/Items';
export default function Home() {
  return (
    <main >

      <HomeContent/>
      <Items/>
    </main>
  )
}

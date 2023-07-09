import Image from 'next/image'
import styles from '@/page.module.css';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import Items from './components/Items';
export default function Home() {
  return (
    <main className="bg-[url('https://free4kwallpapers.com/uploads/originals/2022/03/27/hong-kong-urban-night-shop-signs-neon-lights-buildings-wallpaper.jpg')] h-[100vh] bg-cover bg-no-repeat">
      <Navbar/>
      <HomeContent/>
      <Items/>
    </main>
  )
}

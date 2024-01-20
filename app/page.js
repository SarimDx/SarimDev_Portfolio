import AboutMe from '@/components/HomePage/AboutMe';
import Main from '@/components/HomePage/Main';

export default function Home() {
  return (
    <main>
      <div className='scroll-smooth'>
        <Main/>
        <AboutMe/>
      </div>
    </main>
  )
}

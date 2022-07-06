import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import style from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={style.main}>
      <SectionOne />
      <SectionTwo />
    </main>
  )
}

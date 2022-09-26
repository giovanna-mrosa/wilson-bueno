import PartOne from '../components/PartOne'
import PartTwo from '../components/PartTwo'
import style from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={style.main}>
      <PartOne />
      <PartTwo />
    </main>
  )
}

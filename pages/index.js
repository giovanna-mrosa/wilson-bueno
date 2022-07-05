import Navbar from '../components/Navbar'
import style from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={style.main}>
      <Navbar />
      <div>
        <h1>Conteudo Principal</h1>
      </div>
    </main>
  )
}

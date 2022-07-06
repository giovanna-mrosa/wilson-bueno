import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import style from '../styles/SectionOne.module.scss'

export default function SectionOne() {
  return (
    <section className={style.sectionOneBox}>
      <Navbar />
      <div className={style.columnOne}>
        <p><span>Lorem ipsum dolor sit</span> adipiscing elit. Sed at risus neque.  
          Cras sit amet ligula ut jus to commo
          do porta id ut nim. 
        </p>
        <Image 
          src="/images/wilson.png"
          width="500"
          height="450"
          alt="Wilson Bueno"
          className={style.wilson}
        />
      </div>
      <div className={style.columnTwo}>
      <Image 
          src="/images/synolis-logo.svg"
          width="385"
          height="70"
          alt="Synolis logo"
          className={style.logoSynolis}
        />
        <div className={style.columnTwoContent}>
          <Image 
            src="/images/synolis.svg"
            width="530"
            height="220"
            alt="Synolis"
            className={style.synolis}
          />
          <div className={style.textBtn}>
            <p>Lorem ipsum dolor sit amet. Est quasi possimus sed
              rerum quas quo consequatur quos voluptatem sequi est
              voluptates prae sentium ut sunt quisquam non voluptas
              minima. In rerum dolores rem quia odio ea error odio.
              Ad voluptatibus velit aut omnis. </p>
            <button className={style.btnKnowMore}>
              <Link href="/synolis">
                <a>CONHECER MAIS</a>
              </Link>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  )
}


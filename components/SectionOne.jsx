import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import style from '../styles/SectionOne.module.scss'
import NavbarMobile from './NavbarMobile'

export default function SectionOne() {
  return (
    <section className={style.sectionOneBox}>
      {window.screen.width > 768 ? (
          <Navbar />
        ) : (
          <NavbarMobile />
        )            
      }      
      <div className={style.columnOne}>
        <div className={style.about}>
          <p><span>Atuando</span> no mercado farmáceutico há mais de <span>30 anos</span>, atualmente trabalho para a <span>Dermhalys</span>, representante da <span>Aptissen</span> no Brasil<span>.</span></p>
          <div className={style.btnCompanies}>
            <a target="_blank" rel="noreferrer" href="https://dermhalys.com.br/">Conheça a Dermhalys</a>
            <a target="_blank" rel="noreferrer" href="https://aptissen.com/">Conheca a Aptissen</a>
          </div>

        </div>

        <Image 
          src="/images/wilson.png"
          width="500"
          height="450"
          alt="Wilson Bueno"
          
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
            <p>É o único Visco-Antálgico do mercado e o produto mais utilizado 
              pelos médicos para Viscossuplementação e tratamento da artrose de 
              joelho e quadril, além de outras articulações menores. O único produto que 
              atua diretamente na dor sem necessidade de associação com 
              corticóides, além de ser oneshot, uma única dose. 
            </p>
            <button className={style.btnKnowMore}>
              <Link target="_blank" rel="noreferrer" href="/synolis">
                <a>CONHECER MAIS</a>
              </Link>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  )
}


import Image from 'next/image';
import { useEffect, useState } from 'react'
import Navbar from '/components/Navbar'
import NavbarMobile from '/components/NavbarMobile'

import style from '../styles/Synolis.module.scss'
import Link from 'next/link';
import { CaretLeft, Plus } from 'phosphor-react';

export default function Synolis() {
  const [isMobile, setIsMobile] = useState(false)
  const [openInfoTreat, setOpenInfoTreat] = useState(false)
  const [openInfoDisease, setOpenInfoDisease] = useState(false)

  function handleBoxInfoTreat() {
    setOpenInfoTreat(!openInfoTreat)
  }

  function handleBoxInfoDisease() {
    setOpenInfoDisease(!openInfoDisease)
  }

  useEffect(() => {
    if (window.screen.width <= 1024) {
      setIsMobile(true)
    }
  }, [])

  return (   
      <>
        <header className={style.header}>
          {isMobile ? (
            <NavbarMobile />
          ) : (
            <Navbar />
          )            
          }   
        </header>

        <Link href="/" >
          <a className={style.back}>
            <CaretLeft /> Voltar
          </a>
        </Link>
        
        <div className={style.cheetah}>
        <Image 
          src="/images/synolis-logo.svg"
          width="640"
          height="108"
          alt="Synolis logo"
        />
        <h2 className={style.osteo}>E A <span>OSTEO</span>ARTRITE</h2>
        </div> 

        <section className={style.intro}>
          <p>SynolisVA é uma poderosa infiltração intra-articular 
            &#x00028;viscossuplementação&#x00029; com tecnologia única, a qual é 
            usada para combater os sintomas causados pela Osteoartrite nas 
            articulações humanas restaurando rapidamente a mobilidade da 
            articulação acometida e promovendo rápida resposta à dor do paciente.
          </p>
          <div className={style.package}>
            <Image
              src="/images/synolis-noShadow.png"
              width="710"
              height="290"
              alt="Synolis logo"
            />
          </div>
        </section>

        <section className={style.disease}>
          <div className={style.rowImage}>
            <Image
                src="/images/knee.jpg"
                width="456"
                height="456"
                alt="Synolis logo"
                className={style.knee}
              />
              <p>Clique aqui</p>
              <Plus size={70} className={style.plus} onClick={() => handleBoxInfoDisease()} />
          </div>
          <h2>Artrose, <br />
            Osteoartrite ou <br />
            Osteoartrose
          </h2>
        </section>

        {openInfoDisease === true && (
            <section className={style.box}>
              <div className={style.diseaseContent}>
                <div className={style.diseaseContentText}>
                  <p>
                    É uma doença articular crônica caracterizada pela destruição
                    progressiva da cartilagem nas articulações. Ela ataca o fluído
                    sinovial saudável, causando a disfunção e a degradação do ácido
                    hialurônico, principal componente desse fluído, alterando o peso
                    molecular dentro da articulação, causando a desidratação da
                    cartilagem e consequentemente a morte celular dos condrócitos,
                    as únicas células contidas nessa cartilagem. <br /> <br />
                    O fluído sinovial tem as funções de reduzir a fricção através
                    da lubrificação, absorver impactos e proteger a cartilagem
                    articular, além de fornecer oxigênio e nutrientes à cartilagem
                    articular. Ao perder sua viscosidade, que é responsável pela
                    lubrificação, e sua elasticidade, responsável pela proteção
                    contra impactos, há o aumento do atrito e impacto dos ossos na
                    cartilagem, que juntamente com a desidratação, torna a
                    destruição progressiva e a diminuição de espessura inevitáveis.
                    Tal processo de degeneração causa perda de mobilidade, muita
                    dor e, consequentemente, perda na qualidade de vida. O
                    desfecho, quando não ocorre o devido diagnóstico e tratamento,
                    é a destruição completa da cartilagem e a necessidade de
                    implantar-se uma prótese através de cirurgia. <br /> <br />
                    As articulações mais acometidas pela doença são primeiramente
                    joelhos, pelo maior impacto, seguido pelos quadris, ombros e
                    posteriormente articulações menores, como mãos e tornozelos.
                  </p>
                  <div className={style.symptoms}>
                    <p>Sintomas</p>
                    <div className={style.more}>
                      <Plus size={25} />
                    </div>
                  </div>
                  <div className={style.factors}>
                    <p>Fatores Atribuídos</p>
                    <div className={style.more}>
                      <Plus size={25}/>
                    </div>
                  </div>
                </div>
                <Image
                src="/images/body.png"
                width="450"
                height="600"
                alt=""
                className={style.knee}
              />
              </div>
              <p className={style.warning}>
                Quando houver suspeitas e/ou apresentar alguns dos sintomas, 
                procure imediatamente seu médico
              </p>
            </section>
          )}

        <section className={style.treatment}>
          <h2>Tratamento</h2>
          <div className={`${style.rowImage} ${style.rowImage2}`}>
            <Image
                src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                width="456"
                height="456"
                alt=""
                className={style.knee}
              />
              <p>Clique aqui</p>
              <Plus size={70} className={style.plus} onClick={() => handleBoxInfoTreat()} />         
          </div> 
        </section>

        {openInfoTreat === true && (
            <section className={style.box}>
              <div className={style.treatamentContent}>
                <p>
                  Sempre será o médico que determinará o tratamento mais adequado. 
                  Dentro das opções propostas, a viscossuplementação com ácido 
                  hialurônico encontra-se nos tratamentos intra-articulares. Ela 
                  é um procedimento geralmente rápido e seguro, se feita pelo 
                  profissional correto, tem um ótimo custo-benefício ao paciente, 
                  e visa devolver rapidamente a qualidade de vida ao paciente e 
                  postergar, ou mesmo eliminar a necessidade da cirurgia de 
                  prótese. Dos profissionais que a utilizam, encontramos 
                  ortopedistas, reumatologistas, fisiatras, médicos 
                  intervencionistas da dor e médicos do esporte. 
                </p>
                <Image
                src="/images/gestão-tratamento.svg"
                width="556"
                height="424"
                alt=""
              />
              </div>
              <p className={style.warning}>
                Quando houver suspeitas e/ou apresentar alguns dos sintomas, 
                procure imediatamente seu médico
              </p>
            </section>
          )}

        <section className={style.synolisContent}>
          <p>
            Atualmente existem vários produtos no mercado para a 
            viscossuplementação, variando de laboratórios, formulações, pesos 
            moleculares, concentrações, componentes, origens, propriedades, uso, 
            resultados e até níveis de satisfação do paciente e do médico. <br />
            <br />
            O que torna o SynolisVA a melhor e a única opção é a presença de 
            Sorbitol em sua fórmula. <br />
            <br />
            O Sorbitol, em alta concentração, combinado com o ácido hialurônico, 
            também em alta concentração, reage de forma sinérgica e cria um gel de 
            propriedades viscoelásticas diferenciadas e com capacidades 
            visco-antálgica, e consequentemente o único produto com essas 
            propriedades no mercado.  Ele protege a cadeia de ácido hialurônico da 
            degradação causada por agentes oxidantes que causam estresse oxidativo 
            e inflamação, dando assim maior tempo de permanência do gel na cápsula 
            articular. Além disso a propriedade visco-antálgica do gel formado 
            proporciona rápida melhora nas propriedades reológicas do fluido 
            sinovial, rápida redução do quadro inflamatório, rápido alívio da dor, 
            rápida restauração da mobilidade articular, e também elimina a 
            necessidade de associar outras substâncias ao SynolisVA durante a 
            infiltração, como por exemplo corticóides. 
          </p>
          <video width="1000px" controls={true} className={style.synolisVideo}>
            <source src="/images/range.mp4#t=2.8" />
          </video>
          <p>
            A linha possui duas apresentações: uma delas traz na embalagem uma 
            seringa com 2 mL de volume apresentando 40 mg de ácido hialurônico e 
            80mg de sorbitol, e a outra apresenta seringa com 4 mL de volume com 
            80 mg de ácido hialurônico e 160 mg de sorbitol. A seringa de 2mL é 
            destinada ao tratamento de articulações sinoviais menores, como é o 
            caso dos ombros. A seringa de 4mL é para as articulações maiores, 
            como joelhos e quadris. Ambas seguem o regime de dose única.            
            <br />
            <br />
            Após o SynolisVA ser infiltrado na cápsula articular, este assumirá 
            o papel de ser novamente o fluido sinovial jovem e saudável na 
            articulação do paciente. Assim, com a viscoelasticidade restaurada, 
            a cartilagem voltará a ser “banhada” por um fluido viscoso, 
            eliminando o atrito dos ossos, e também por um fluido elástico, que 
            protegerá a cartilagem do impacto causados, devolvendo a esta o 
            melhor ambiente possível para que ela passe a viabilizar a vida de 
            seus condrócitos, e devolver ao paciente a melhor qualidade de vida. 
          </p>
        </section>
        <p className={style.source}><span>Fonte: </span>synolis.com/pt-br/</p>
      </>   
  )
}

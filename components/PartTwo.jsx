import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ComponentMap from './Map/index'

import style from '../styles/PartTwo.module.scss'
import { FormContact } from './FormContact';
import Image from 'next/image';
import { ArrowUpLeft } from 'phosphor-react';

const DEFAULT_CENTER = [-23.1298775,-46.5678642]
const anotherPosition = [-23.1304447,-46.569866]

export default function PartTwo() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ],    
  )

  return (
    <main className={style.partTwoBox}>
      <section className={style.sectionOne} id="about">
        <div className={style.testimony}>
          <h3>Depoimentos</h3>
          <div className="carousel-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <p>
                  “Lorem ipsum dolor sit amet. Est quasi possimus sed
                  rerum quas quo consequatur quos voluptatem sequi est
                  voluptates prae sentium ut sunt quisquam non voluptas “ <br />
                  <br />
                  <span>Lorem Ipsum Dolor</span>
                </p>
              </div>
              <div className="keen-slider__slide">
                <p>
                    “Lorem ipsum dolor sit amet. Est quasi possimus sed
                    rerum quas quo consequatur quos voluptatem sequi est
                    voluptates prae sentium ut sunt quisquam non voluptas “ <br />
                    <br />
                    <span>Lorem Ipsum Dolor</span>
                  </p>
              </div>
              <div className="keen-slider__slide">
                <p>
                  “Lorem ipsum dolor sit amet. Est quasi possimus sed
                  rerum quas quo consequatur quos voluptatem sequi est
                  voluptates prae sentium ut sunt quisquam non voluptas “ <br />
                  <br />
                  <span>Lorem Ipsum Dolor</span>
                </p>
              </div>
              <div className="keen-slider__slide">
              <p>
                “Lorem ipsum dolor sit amet. Est quasi possimus sed
                rerum quas quo consequatur quos voluptatem sequi est
                voluptates prae sentium ut sunt quisquam non voluptas “ <br />
                <br />
                <span>Lorem Ipsum Dolor</span>
              </p>
              </div>
            </div>
          </div>          
        </div>
        <div className={style.videoBox}>
          <Image 
          src="/images/video.jpg"
          width="560"
          height="315"
          alt=""
          className={style.logoSynolis}
          />
        </div>
      </section>

      <section className={style.sectionTwo} id="where">

      <ComponentMap className={style.homeMap} center={DEFAULT_CENTER} zoom={14}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <Marker position={anotherPosition}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </ComponentMap>

        <div className={style.where}>
          <h3>Onde você encontra SynolisVA na sua cidade</h3>
          <p>
            <ArrowUpLeft size={30} />
            Clique na lupa e busque
          </p>
        </div>

      </section>


      <section className={style.sectionThree} id="talkToMe">

        <div className={style.rowOne}>
           <p>Atuando nas regiões <br />
            <span className={style.bigGray}>de </span>
            <span className={style.bigRed}>Campinas</span>
            <span className={style.bigGray}>,<br /></span>
            <span className={style.bigRed}>Jundiaí</span>
            <span className={style.bigGray}>,<br /></span>
            <span className={style.bigRed}>Sorocaba </span>
            <span className={style.bigGray}>e<br /></span>
            <span className={style.bigRed}>Vale do Paraíba</span>
            <span className={style.bigGray}>,<br /></span>
            alcançando mais de<br />
            <span className={style.bigRed}>180 </span>
            <span className={style.bigGray}>cidades<br /></span>
            no Estado de  
            <span className={style.red}> São Paulo</span>
          </p>

          <div className={style.optionCity}>
            <p>Confira se na sua cidade estou disponível</p>
            <select 
              name="cities" 
              id="cities" 
              className={style.cities}
            >
              <option></option>
              <option>Águas de Lindóia</option>
              <option>Águas de Santa Bárbara</option>
              <option>Alambari</option>
              <option>Alumínio</option>
              <option>Americana</option>
              <option>Amparo</option>
              <option>Angatuba</option>
              <option>Aparecida</option>
              <option>Apiaí</option>
              <option>Araçariguama</option>
              <option>Araçoiaba da Serra</option>
              <option>Arandu</option>
              <option>Arapeí</option>
              <option>Areias</option>
              <option>Artur Nogueira</option>
              <option>Atibaia</option>
              <option>Avaré</option>
              <option>Bananal</option>
              <option>Barão de Antonina</option>
              <option>Barra do Chapéu</option>
              <option>Barra do Turvo</option>
              <option>Bofete</option>
              <option>Boituva</option>
              <option>Bom Jesus dos Perdões</option>
              <option>Bom Sucesso de Itararé</option>
              <option>Bragança Paulista</option>
              <option>Buri</option>
              <option>Cabreúva</option>
              <option>Caçapava</option>
              <option>Cachoeira Paulista</option>
              <option>Cajati</option>
              <option>Campina do Monte Alegre</option>
              <option>Campinas</option>
              <option>Campo Limpo Paulista</option>
              <option>Campos do Jordão</option>
              <option>Cananéia</option>
              <option>Canas</option>
              <option>Capão Bonito</option>
              <option>Capela do Alto</option>
              <option>Capivari</option>
              <option>Caraguatatuba</option>
              <option>Cerqueira César</option>
              <option>Cerquilho</option>
              <option>Cesário Lange</option>
              <option>Conchas</option>
              <option>Cordeirópolis</option>
              <option>Coronel Macedo</option>
              <option>Cosmópolis</option>
              <option>Cruzeiro</option>
              <option>Cunha</option>
              <option>Eldorado</option>
              <option>Elias Fausto</option>
              <option>Engenheiro Coelho</option>
              <option>Fartura</option>
              <option>Guapiara</option>
              <option>Guaratinguetá</option>
              <option>Guareí</option>
              <option>Holambra</option>
              <option>Hortolândia</option>
              <option>Iaras</option>
              <option>Ibiúna</option>
              <option>Igaratá</option>
              <option>Iguape</option>
              <option>Ilha Comprida</option>
              <option>Ilhabela</option>
              <option>Indaiatuba</option>
              <option>Iperó</option>
              <option>Iporanga</option>
              <option>Itaberá</option>
              <option>Itaí</option>
              <option>Itaóca</option>
              <option>Itapetininga</option>
              <option>Itapeva</option>
              <option>Itapira</option>
              <option>Itapirapuã Paulista</option>
              <option>Itaporanga</option>
              <option>Itararé</option>
              <option>Itariri</option>
              <option>Itatiba</option>
              <option>Itatinga</option>
              <option>Itu</option>
              <option>Itupeva</option>
              <option>Jacareí</option>
              <option>Jacupiranga</option>
              <option>Jaguariúna</option>
              <option>Jambeiro</option>
              <option>Jarinú</option>
              <option>Joanópolis</option>
              <option>Jumirim</option>
              <option>Jundiaí</option>
              <option>Juquiá</option>
              <option>Lagoinha</option>
              <option>Laranjal Paulista</option>
              <option>Lavrinhas</option>
              <option>Lindóia</option>
              <option>Lorena</option>
              <option>Louveira</option>
              <option>Mairinque</option>
              <option>Manduri</option>
              <option>Miracatu</option>
              <option>Mombuca</option>
              <option>Monte Alegre do Sul</option>
              <option>Monte Mor</option>
              <option>Monteiro Lobato</option>
              <option>Morungaba</option>
              <option>Natividade da Serra</option>
              <option>Nazaré Paulista</option>
              <option>Nova Campina</option>
              <option>Nova Odessa</option>
              <option>Paraibuna</option>
              <option>Paranapanema</option>
              <option>Pardinho</option>
              <option>Pariquera-Açu</option>
              <option>Paulínia</option>
              <option>Pedra Bela</option>
              <option>Pedreira</option>
              <option>Pedro de Toledo</option>
              <option>Pereiras</option>
              <option>Piedade</option>
              <option>Pilar do Sul</option>
              <option>Pindamonhangaba</option>
              <option>Pinhalzinho</option>
              <option>Piquete</option>
              <option>Piracaia</option>
              <option>Piraju</option>
              <option>Porangaba</option>
              <option>Porto Feliz</option>
              <option>Potim</option>
              <option>Quadra</option>
              <option>Queluz</option>
              <option>Rafard</option>
              <option>Redenção da Serra</option>
              <option>Registro</option>
              <option>Ribeira</option>
              <option>Ribeirão Branco</option>
              <option>Ribeirão Grande</option>
              <option>Rio das Pedras</option>
              <option>Riversul</option>
              <option>Roseira</option>
              <option>Saltinho</option>
              <option>Salto</option>
              <option>Salto de Pirapora</option>
              <option>Santa Bárbara d&lsquo;Oeste</option>
              <option>Santa Branca</option>
              <option>Santo Antônio de Posse</option>
              <option>Santo Antônio do Pinhal</option>
              <option>São Bento do Sapucaí</option>
              <option>São José do Barreiro</option>
              <option>São José dos Campos</option>
              <option>São Luís do Paraitinga</option>
              <option>São Miguel Arcanjo</option>
              <option>São Roque</option>
              <option>São Sebastião</option>
              <option>Sarapuí</option>
              <option>Sarutaiá</option>
              <option>Serra Negra</option>
              <option>Sete Barras</option>
              <option>Silveiras</option>
              <option>Socorro</option>
              <option>Sorocaba</option>
              <option>Sumaré</option>
              <option>Taguaí</option>
              <option>Tapiraí</option>
              <option>Taquarituba</option>
              <option>Taquarivaí</option>
              <option>Tatuí</option>
              <option>Taubaté</option>
              <option>Tejupá</option>
              <option>Tietê</option>
              <option>Torre de Pedra</option>
              <option>Tremembé</option>
              <option>Tuiuti</option>
              <option>Ubatuba</option>
              <option>Valinhos</option>
              <option>Vargem</option>
              <option>Várzea Paulista</option>
              <option>Vinhedo</option>
              <option>Votorantim</option>
            </select>
          </div>
        </div>

        <div className={style.rowTwo}>
          <h3>Não conhece o SynolisVA ainda? <br />
            Quer saber mais?
          </h3>
          
          <FormContact />

        </div>
      </section>

      <section className={style.sectionFour}>
        <p className={style.obs}>Ortopedistas, Reumatologistas e Médicos do Esporte, este produto é vendido em nível nacional, quando necessitar dentro dessas regiões, não exite em entrar em contato comigo.</p>
      </section>
    </main>
  )
}
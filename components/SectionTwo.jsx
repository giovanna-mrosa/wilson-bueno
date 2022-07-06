import Image from "next/image"
import Carousel from "react-elastic-carousel"

import style from '../styles/SectionTwo.module.scss'

export default function SectionTwo() {
  return (
    <section className={style.sectionTwoBox}>
      <div className={style.columnOneSectionTwo}>
        <div className={style.testimony}>
          <h3>Depoimentos</h3>
          <Carousel
            itemsToShow={1}
            showArrows={false}
          >
            <p>
            “Lorem ipsum dolor sit amet. Est quasi possimus sed
            rerum quas quo consequatur quos voluptatem sequi est
            voluptates prae sentium ut sunt quisquam non voluptas “ <br />
            <br />
            <span>Lorem Ipsum Dolor</span>
            </p>
            <p>
            “Lorem ipsum dolor sit amet. Est quasi possimus sed
            rerum quas quo consequatur quos voluptatem sequi est
            voluptates prae sentium ut sunt quisquam non voluptas “ <br />
            <br />
            <span>Lorem Ipsum Dolor</span>
            </p>
            <p>
            “Lorem ipsum dolor sit amet. Est quasi possimus sed
            rerum quas quo consequatur quos voluptatem sequi est
            voluptates prae sentium ut sunt quisquam non voluptas “ <br />
            <br />
            <span>Lorem Ipsum Dolor</span>
            </p>
            <p>
            “Lorem ipsum dolor sit amet. Est quasi possimus sed
            rerum quas quo consequatur quos voluptatem sequi est
            voluptates prae sentium ut sunt quisquam non voluptas “ <br />
            <br />
            <span>Lorem Ipsum Dolor</span>
            </p>
          </Carousel>
        </div>
        <div className={style.videoBox}>
          <Image
            src="/images/video.jpg"
            width="690"
            height="414"
            alt="Institutional Video"
          />
        </div>
      </div>
      <div className={style.columnTwoSectionTwo}>
        <Image 
          src="/images/map.jpg"
          width="1222"
          height="596"
          alt="Map"
        />
        <div className="where">
          <h3>Onde você encontra SynolisVA na minha rede</h3>
        </div>
      </div>
      <div className={style.columnThreeSectionTwo}>
        <div className={style.rowOne}>
          <p>Atendo toda a <br />
            <span className={style.bigGray}>região do<br /></span>
            <span className={style.bigRed}>Vale do Paraíba</span>
            <span className={style.bigGray}>,<br /></span>
            alcançando mais de<br />
            <span className={style.bigRed}>180 </span>
            <span className={style.bigGray}>cidades<br /></span>
            no Estado de São Paulo
          </p>
          <div className={style.optionCity}>
            <p>Confira se na sua cidade estou disponível</p>
            <select 
              name="cities" 
              id="cities" 
              className={style.cities}
            >
              <option value="">Águas de Lindóia</option>
              <option value="">Águas de Santa Bárbara</option>
              <option value="">Alambari</option>
              <option value="">Alumínio</option>
              <option value="">Americana</option>
              <option value="">Amparo</option>
              <option value="">Angatuba</option>
              <option value="">Anhembi</option>
              <option value="">Aparecida</option>
              <option value="">Apiaí</option>
              <option value="">Araçariguama</option>
              <option value="">Araçoiaba da Serra</option>
              <option value="">Arandu</option>
              <option value="">Arapeí</option>
              <option value="">Areias</option>
              <option value="">Areiópolis</option>
              <option value="">Artur Nogueira</option>
              <option value="">Atibaia</option>
              <option value="">Avaré</option>
              <option value="">Bananal</option>
              <option value="">Barão de Antonina</option>
              <option value="">Barra do Chapéu</option>
              <option value="">Barra do Turvo</option>
              <option value="">Bofete</option>
              <option value="">Boituva</option>
              <option value="">Bom Jesus dos Perdões</option>
              <option value="">Bom Sucesso de Itararé</option>
              <option value="">Botucatu</option>
              <option value="">Bragança Paulista</option>
              <option value="">Buri</option>
              <option value="">Cabreúva</option>
              <option value="">Caçapava</option>
              <option value="">Cachoeira Paulista</option>
              <option value="">Cajati</option>
              <option value="">Campina do Monte Alegre</option>
              <option value="">Campinas</option>
              <option value="">Campo Limpo Paulista</option>
              <option value="">Campos do Jordão</option>
              <option value="">Cananéia</option>
              <option value="">Canas</option>
              <option value="">Capão Bonito</option>
              <option value="">Capela do Alto</option>
              <option value="">Capivari</option>
              <option value="">Caraguatatuba</option>
              <option value="">Cerqueira César</option>
              <option value="">Cerquilho</option>
              <option value="">Cesário Lange</option>
              <option value="">Conchas</option>
              <option value="">Cordeirópolis</option>
              <option value="">Coronel Macedo</option>
              <option value="">Cosmópolis</option>
              <option value="">Cruzeiro</option>
              <option value="">Cunha</option>
              <option value="">Eldorado</option>
              <option value="">Elias Fausto</option>
              <option value="">Engenheiro Coelho</option>
              <option value="">Fartura</option>
              <option value="">Guapiara</option>
              <option value="">Guaratinguetá</option>
              <option value="">Guareí</option>
              <option value="">Holambra</option>
              <option value="">Hortolândia</option>
              <option value="">Iaras</option>
              <option value="">Ibiúna</option>
              <option value="">Igaratá</option>
              <option value="">Iguape</option>
              <option value="">Ilha Comprida</option>
              <option value="">Ilhabela</option>
              <option value="">Indaiatuba</option>
              <option value="">Iperó</option>
              <option value="">Iporanga</option>
              <option value="">Iracemápolis</option>
              <option value="">Itaberá</option>
              <option value="">Itaí</option>
              <option value="">Itaóca</option>
              <option value="">Itapetininga</option>
              <option value="">Itapeva</option>
              <option value="">Itapira</option>
              <option value="">Itapirapuã Paulista</option>
              <option value="">Itaporanga</option>
              <option value="">Itararé</option>
              <option value="">Itariri</option>
              <option value="">Itatiba</option>
              <option value="">Itatinga</option>
              <option value="">Itu</option>
              <option value="">Itupeva</option>
              <option value="">Jacareí</option>
              <option value="">Jacupiranga</option>
              <option value="">Jaguariúna</option>
              <option value="">Jambeiro</option>
              <option value="">Jarinú</option>
              <option value="">Joanópolis</option>
              <option value="">Jumirim</option>
              <option value="">Jundiaí</option>
              <option value="">Juquiá</option>
              <option value="">Lagoinha</option>
              <option value="">Laranjal Paulista</option>
              <option value="">Lavrinhas</option>
              <option value="">Limeira</option>
              <option value="">Lindóia</option>
              <option value="">Lorena</option>
              <option value="">Louveira</option>
              <option value="">Mairinque</option>
              <option value="">Manduri</option>
              <option value="">Miracatu</option>
              <option value="">Mombuca</option>
              <option value="">Monte Alegre do Sul</option>
              <option value="">Monte Mor</option>
              <option value="">Monteiro Lobato</option>
              <option value="">Morungaba</option>
              <option value="">Natividade da Serra</option>
              <option value="">Nazaré Paulista</option>
              <option value="">Nova Campina</option>
              <option value="">Nova Odessa</option>
              <option value="">Paraibuna</option>
              <option value="">Paranapanema</option>
              <option value="">Pardinho</option>
              <option value="">Pariquera-Açu</option>
              <option value="">Paulínia</option>
              <option value="">Pedra Bela</option>
              <option value="">Pedreira</option>
              <option value="">Pedro de Toledo</option>
              <option value="">Pereiras</option>
              <option value="">Piedade</option>
              <option value="">Pilar do Sul</option>
              <option value="">Pindamonhangaba</option>
              <option value="">Pinhalzinho</option>
              <option value="">Piquete</option>
              <option value="">Piracaia</option>
              <option value="">Piracicaba</option>
              <option value="">Piraju</option>
              <option value="">Porangaba</option>
              <option value="">Porto Feliz</option>
              <option value="">Potim</option>
              <option value="">Pratânia</option>
              <option value="">Quadra</option>
              <option value="">Queluz</option>
              <option value="">Rafard</option>
              <option value="">Redenção da Serra</option>
              <option value="">Registro</option>
              <option value="">Ribeira</option>
              <option value="">Ribeirão Branco</option>
              <option value="">Ribeirão Grande</option>
              <option value="">Rio das Pedras</option>
              <option value="">Riversul</option>
              <option value="">Roseira</option>
              <option value="">Saltinho</option>
              <option value="">Salto</option>
              <option value="">Salto de Pirapora</option>
              <option value="">Santa Bárbara d&lsquo;Oeste</option>
              <option value="">Santa Branca</option>
              <option value="">Santo Antônio de Posse</option>
              <option value="">Santo Antônio do Pinhal</option>
              <option value="">São Bento do Sapucaí</option>
              <option value="">São José do Barreiro</option>
              <option value="">São José dos Campos</option>
              <option value="">São Luís do Paraitinga</option>
              <option value="">São Manuel</option>
              <option value="">São Miguel Arcanjo</option>
              <option value="">São Roque</option>
              <option value="">São Sebastião</option>
              <option value="">Sarapuí</option>
              <option value="">Sarutaiá</option>
              <option value="">Serra Negra</option>
              <option value="">Sete Barras</option>
              <option value="">Silveiras</option>
              <option value="">Socorro</option>
              <option value="">Sorocaba</option>
              <option value="">Sumaré</option>
              <option value="">Taguaí</option>
              <option value="">Tapiraí</option>
              <option value="">Taquarituba</option>
              <option value="">Taquarivaí</option>
              <option value="">Tatuí</option>
              <option value="">Taubaté</option>
              <option value="">Tejupá</option>
              <option value="">Tietê</option>
              <option value="">Torre de Pedra</option>
              <option value="">Tremembé</option>
              <option value="">Tuiuti</option>
              <option value="">Ubatuba</option>
              <option value="">Valinhos</option>
              <option value="">Vargem</option>
              <option value="">Várzea Paulista</option>
              <option value="">Vinhedo</option>
              <option value="">Votorantim</option>
            </select>
          </div>
        </div>
        <div className={style.rowTwo}>
          <h3>Não receita o SynolisVA ainda? <br />
            Quer saber mais?
          </h3>
          <form action="submit">
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Nome"
            />
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="E-mail"
            />
             <input 
              type="tel" 
              name="tel" 
              id="tel" 
              placeholder="Telefone"
            />
            <textarea name="message" id="message" cols="30" rows="10" />
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </div>
    </section>
  )
}
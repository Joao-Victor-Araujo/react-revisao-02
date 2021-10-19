import React from "react";
import '../components/Galeria.css'
import Header from './Header'
import Footer from "./Footer";

let Galeria = () => {
    return(
        <main data-testid="main-tag">
          <Header />
          <div data-testid="my-div" className='intro'>
              <h1>Galeria de imagens</h1>
              <p>Aqui você encontra as imagens mais diversas <br /> Alguns Bionas:</p>
          </div>
            <div data-testid="my-div" className="container">

                <div data-testid="my-div" className="showInfos">
                    <img src={itens.img.amazonia} alt=""/>
                        <h2>Amazonia</h2>
                        <p>{itens.text.amazoniaText}</p>
                </div>

                <div data-testid="my-div" className="showInfos">
                    <img src={itens.img.pantanal} alt=""/>
                        <h2>Pantanal</h2>
                        <p>{itens.text.pantanalText}</p>
                </div>

                <div data-testid="my-div" className="showInfos">
                    <img src={itens.img.caatinga} alt=""/>
                        <h2>Caatinga</h2>
                        <p>{itens.text.caatinga}</p>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Galeria

//obj de todos os links de itens e seus respectivos textos
const itens = {
    img: {
        amazonia: "https://gife.org.br/wp/media/2020/05/materia_amazonia-desmatamento.png",
        pantanal: "https://s2.static.brasilescola.uol.com.br/be/2020/06/areas-alagadas.jpg",
        caatinga: "https://www.biofilica.com.br/wp-content/uploads/2020/04/dia-da-caatinga.jpg"


    },

    text: {
        amazoniaText: "Mesmo frente ao cenário de pandemia da Covid-19, a Floresta Amazônica sofre com índices recordes de desmatamento na chamada Amazônia Legal – que engloba os estados do Acre, Amapá, Amazonas, Mato Grosso, Pará, Rondônia, Roraima, Tocantins e parte do Maranhão.",
        pantanalText: "O Pantanal é um dos menores biomas existentes no Brasil. Sua localização está na região Centro-Oeste, nos estados do Mato Grosso (no sul do estado) e do Mato Grosso do Sul (no noroeste do estado), além de poder ser encontrado no Paraguai e na Bolívia.",
        caatinga: "Predominante na região nordeste, a Caatinga é o bioma de clima semiárido com a maior biodiversidade do mundo e o único encontrado exclusivamente em território nacional. Sua flora e fauna chamam atenção por abrigarem cerca de 5.300 espécies de plantas, sendo 1.547 exclusivas dessa região, e mais de 1.000 espécies de animais, entre eles a ararinha-azul, ave com maior risco de extinção do Brasil."
    }
}
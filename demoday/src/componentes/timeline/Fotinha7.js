import Imagem from './Imagem';
import { BsSuitHeart } from 'react-icons/bs';
import { BiMessageRounded } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { BiCollection } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import img1 from './imagens/t.png';
import img2 from './imagens/tt.jpg';
import React from "react";
import VideoInput from "./VideoInput";
import "./Styles.css";
import Video7 from './imagens/7.mp4'

function Fotinha7(props){
    return(
        <div className="fotinha" >
           <div className="foto_nome">
            <img className='img_perfil_fotinha' src="https://image.freepik.com/fotos-gratis/barbeiro-bonito-com-barba-espessa-segurando-seu-acessorio-de-barbearia-demonstrando-a-lamina-afiada-de-uma-navalha_273609-6487.jpg" />
            <h4 className="nome_fotinha"> BESTATTO </h4> 
            
            </div>
        
            <div className="img_timeline">
            <div className="App">
            <video className='video' src={Video7} controls loop />
      </div>
            </div>

           </div>

        

        

    )
}

export default Fotinha7;
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
import Video2 from './imagens/2.mp4'


function Fotinha2(props){
    return(
        <div className="fotinha" >
           <div className="foto_nome">
            <img className='img_perfil_fotinha' src="https://thumbs.dreamstime.com/b/mulher-negra-bonita-35601260.jpg" />
            <h4 className="nome_fotinha"> AlexiaHair </h4> 
            </div>
        
            <div className="img_timeline">
            <div className="App">
        
            <video className='video' src={Video2} controls loop />
      </div>
            </div>

           </div>

        

        

    )
}

export default Fotinha2;
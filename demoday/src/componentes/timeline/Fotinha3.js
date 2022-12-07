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
import Video3 from './imagens/3.mp4'


function Fotinha3(props){
    return(
        <div className="fotinha" >
           <div className="foto_nome">
            <img className='img_perfil_fotinha' src='https://th.bing.com/th/id/R.10f365b361ba785d2b9efd8f5ed41578?rik=swTMej6Diefakw&pid=ImgRaw&r=0' />
            <h4 className="nome_fotinha"> CabelosKimbely</h4> 
            
            </div>
        
            <div className="img_timeline">
            <div className="App">
        
            <video className='video' src={Video3} controls loop />
      </div>
            </div>

           </div>

        

        

    )
}

export default Fotinha3;
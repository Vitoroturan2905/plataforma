import './Sugestoes.css';
import img1 from './imagens/mao.jpg';

import { FaHandsHelping } from 'react-icons/fa'; 
import { TfiSave } from 'react-icons/tfi';
import { FaShareSquare } from 'react-icons/fa';
import { GiShakingHands } from 'react-icons/gi';
import { FaRegHandshake } from 'react-icons/fa';
import Imagem from '../timeline/Imagem';

 
function Sugestoes2(){
    return(
        <div className="sugest2"> 
          
            <div className='foto_nome_sugest1'>
           <Imagem className='te'  icone= {<FaShareSquare />} /> 
            <h4 className="nome_fotinha1">  Compartilhar </h4> 
            </div>

            <div className='foto_nome_sugest1'>
           <Imagem className='te'  icone= {<TfiSave />} /> 
            <h4 className="nome_fotinha1">  Salvar </h4> 
            </div>

            <div className='foto_nome_sugest1'>
           <Imagem className='te'  icone= {<FaRegHandshake />} /> 
            <h4 className="nome_fotinha1">  Contratar </h4> 
            </div>
            

            

        

            

        </div>
        
    )
}

export default Sugestoes2;
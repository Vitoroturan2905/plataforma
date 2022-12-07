import './Sugestoes.css';
import img1 from './imagens/mao.jpg';

import { FaHandsHelping } from 'react-icons/fa'; 
import { TfiSave } from 'react-icons/tfi';
import { FaShareSquare } from 'react-icons/fa';
import { GiShakingHands } from 'react-icons/gi';
import { FaRegHandshake } from 'react-icons/fa';
import { BsFillPeopleFill} from 'react-icons/bs';
import { BsBookmarksFill} from 'react-icons/bs';
import Imagem from '../timeline/Imagem';

 
function Sugestoes(){
    return(
        <div className="sugest"> 
          
            <div className='foto_nome_sugest1'>
           <Imagem className='te'  icone= {<FaShareSquare />} /> 
            <h4 className="nome_fotinha1">  Compartilhar </h4> 
            </div>

            <div className='foto_nome_sugest1'>
           <Imagem className='te'  icone= {<BsBookmarksFill />} /> 
            <h4 className="nome_fotinha1">  Salvar </h4> 
            </div>

            <div className='foto_nome_sugest1'>
           <Imagem className='te'  icone= {<BsFillPeopleFill />} /> 
            <h4 className="nome_fotinha1">  Contratar </h4> 
            </div>
            

            

        

            

        </div>
        
    )
}

export default Sugestoes;
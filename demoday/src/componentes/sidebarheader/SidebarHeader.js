import './SidebarHeader.css';
import logoHome from './imagens/j5.png';
import Item from './componentes/Item';
import { FaBeer } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg'; 
import {AiOutlineSearch} from 'react-icons/ai';
import {BiMessageDetail} from 'react-icons/bi';
import {GrAddCircle} from 'react-icons/gr';
import {AiOutlineCompass} from 'react-icons/ai';
import {BsHeart} from 'react-icons/bs';
import {BsCoin} from 'react-icons/bs';
import Pesquisar from './componentes/Pesquisar';
import logoestilo from './imagens/logoes.png';
import ecoin from './imagens/ecoin.png'

 


function SidebarHeader(props){
    return(
        <div className='sidebar-header'>
          <div className='logo_nome'>
          <img src={logoestilo} alt="Logo do instagram" className="logoInstagram" />
          <a className='a'>Um</a> <a className='a-e'>Estilo</a>
          </div>

          <div className='pesquisar'>
          <Pesquisar icone ={<AiOutlineSearch />} nome="Home" />
          </div>

          <div className='fundo_moeda'>
          <img className='prof' src={ecoin}  />
          <a className='valor'>150</a> 
          </div>

          <div className='fundo_profile'>
          <Item className='prof-profile' icone ={<CgProfile />}  />
          </div>



        </div>
      
        
    )

}
export default SidebarHeader;
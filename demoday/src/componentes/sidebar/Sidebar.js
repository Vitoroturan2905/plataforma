import './Sidebar.css';
import {FaUpload} from 'react-icons/fa';
import {RiLayout2Line} from 'react-icons/ri';
import {RiPagesLine} from 'react-icons/ri';
import Item from './componentes/Item';

function Sidebar(){
    return(
        <div className='sidebar-header-side'>
        <div className="listItem-side">
        
         <div className='pra_voce'>
        {<RiLayout2Line />} 
         <a className='a-side'>Seu Estilo</a>
         </div>
         
         <b className='topics-trend'> TREND TOPICS </b>
         <a className='topics'> #CABELOAFRO  </a>
         <a className='topics'> #UNHADEFIBRA  </a>
         <a className='topics'> #360WAVES </a>
         <a className='topics'> #CORTEAMERICANO </a>

         <h1 className='perf'>Perfis</h1>
         <div className='imgens_geral_side'>
          
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIRrrrrr</a>
        <img className='img_side' src='https://i.pinimg.com/736x/cc/65/55/cc655519a768971d1e3a669eb1df494a.jpg' />
        
        <a className='nome_perf'>CRISTIAN CHAVES</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://aplicacionesparaselfies.org/wp-content/uploads/2018/04/preciosa-mujer.jpg' />
        <a className='nome_perf'>DIVA MAKES</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://noticiastu.com/wp-content/uploads/2018/08/Poses-de-Fotos-de-Perfil-14.jpg' />
        <a className='nome_perf'>VITORIA GOMES</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://www.wefashiontrends.com/wp-content/uploads/2019/03/ideias-de-pose-fotos-de-perfil.jpg' />
        <a className='nome_perf'>MARINA ONOFRE</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://i.pinimg.com/originals/25/29/fa/2529faa89490a4607fc2063a40f9bdfb.jpg' />
        <a className='nome_perf'>MELISSA LIMA</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        </div>

        <a className='politica-side'> POLITICA DE PRIVACIDADE - UM ESTILO 2022 DIREITOS, DIRETRIZES DA COMUNIDADE - <a className='politica-side'>LANDING PAGE</a> 

        </a>
        </div>

        

        

      </div>
    )
}

export default Sidebar;
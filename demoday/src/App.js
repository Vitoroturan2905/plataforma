import logo from './logo.svg';
import './App.css';
import logoInsta from './Instagram_logo.svg.png'; 
import SidebarHeader from './componentes/sidebarheader/SidebarHeader';
import Timeline from './componentes/timeline/Timeline';
import Sugestoes from './componentes/sugest/Sugestoes';
import Timeline2 from './componentes/timeline/Timeline2';
import Timeline3 from './componentes/timeline/Timeline3';
import Timeline4 from './componentes/timeline/Timeline4';
import Timeline5 from './componentes/timeline/Timeline5';
import Timeline6 from './componentes/timeline/Timeline6';
import Timeline7 from './componentes/timeline/Timeline7';
import Sidebar from './componentes/sidebar/Sidebar';





function App() {
  return (
    <div className="App">

        <SidebarHeader logo={logoInsta}/>
        
        <div className='geral_pag'>

        <div className='story_timeline'>
        <Sidebar />
        </div>

        <div className='geral_sugest'>
        <div className='geral_time'>
        <Timeline />
        <Timeline2 /> 
        <Timeline3 /> 
        <Timeline4 />
        <Timeline5 />
        <Timeline6 />
        <Timeline7 />
        </div>

        <div className='sugestao_geral'>
        <Sugestoes />
        <Sugestoes />
        <Sugestoes />
        <Sugestoes />
        <Sugestoes />
        <Sugestoes />
        <Sugestoes />
        
        </div>
        
        <div >
        </div>
        </div>
        </div>
        
        
      

      
    
    </div>
  );
}

export default App;

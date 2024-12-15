import { NavLink, Outlet } from 'react-router-dom'
import '../index.css'
import pichtmlcss from '../Assets/portfoliopic/HTML-CSS.jpg'
import picpwgen from '../Assets/portfoliopic/pwgen.jpg'
import picmotivation from '../Assets/portfoliopic/motivation.jpg'


const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className='portfolioText'>
            <h1>Portfolio</h1>
            <p>Här är min samling av projekt och arbeten.</p>
            </div>
            <div className='project'>
               <div><a href="https://order-summary-md.vercel.app/" >
               <img src={pichtmlcss} alt=""  /></a></div> 
               <div><a href="https://pw-gen-md.vercel.app/" >
               <img src={picpwgen} alt=""  /></a></div> 
               <div><a href="https://motivation-md.vercel.app/" >
               <img src={picmotivation} alt=""  /></a></div> 
                
           
            </div>
            
        </div>
    );
};

export default Portfolio;
import { NavLink, Outlet } from 'react-router-dom'
import '../index.css'
import pichtmlcss from '../Assets/HTML-CSS.jpg'


const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className='portfolioText'>
            <h1>Portfolio</h1>
            <p>Här är min samling av projekt och arbeten.</p>
            </div>
            <div className='project'>
                <a href="https://order-summary-md.vercel.app/" >
                <img src={pichtmlcss} alt=""  /></a>
            </div>
        </div>
    );
};

export default Portfolio;
import { NavLink, Outlet } from 'react-router-dom'
import '../index.css'

const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h2>Under Construction</h2>
                <div className='animation-container'>
                <dotlottie-player
                    src="https://lottie.host/0342659a-a963-48fa-8167-b61921f0aa54/msPNSzz9mA.lottie"
                    background="transparent"
                    speed="1"
                    style={{ width: '300px', height: '300px', }}
                    loop
                    autoplay
                ></dotlottie-player>
                </div>
            <nav className="help-layout__nav">
                {/* <NavLink className="help-layout__nav__link" to="faq">
                    Läs FAQ
                </NavLink> */}
                <NavLink className="help-layout__nav__link" to="contact">
                    Kontakta Mig (Ej i funktion)
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HelpLayout

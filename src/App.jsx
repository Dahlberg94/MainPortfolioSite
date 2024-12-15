import React from 'react'
import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Faq from './Pages/help/Faq.jsx'
import Contact from './Pages/help/Contact.jsx'
import NotFound from './Pages/NotFound'
import Portfolio from './layouts/Portfolio.jsx'
import ProfileDeteails, {profileDeteailsLoader} from './Pages/profiles/ProfileDeteails.jsx'


//Layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProfilesLayout from './layouts/ProfilesLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App

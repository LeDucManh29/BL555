import { Ban, Download } from "lucide-react"
import { useState } from "react"
import Header from "./header"
import HotMatches from "./hot-matches"
import Banner from "./banner"
import Features from "./features"
import Footer from "./footer"
import FeaturedProducts from "./featured-products"
import HotGamesSection from "./hot-game-section"
import GameCategory from "./game-category"
import DownloadApp from "./download-app"
import ContactMenu from "./contact-menu"
import PopupSlideshow from "./popup-slideshow"
import FloatingGifts from "./floating-gifts "
import Login from "../login"
import Register from "../register"


const Home = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  return (
    <div className="app-wrapper">
      <div
        className="main-content"
        style={{
          backgroundImage: 'url("https://www.36588555.com/res/img/common-bg.7899ecc.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <Header 
          onLoginClick={() => setShowLogin(true)}
          onRegisterClick={() => setShowRegister(true)}
        />
        <Banner />
        <HotMatches />
        <Features />
        <FeaturedProducts />
        <HotGamesSection />
        <GameCategory />
        <DownloadApp />
        <ContactMenu />
        <PopupSlideshow />
        <FloatingGifts />
        <Footer/>
      </div>
      
      {/* Popup Overlay */}
      {(showLogin || showRegister) && (
        <div className="popup-container">
          {/* Popup Login */}
          {showLogin && <Login onClose={() => setShowLogin(false)} onSwitchToRegister={() => {
            setShowLogin(false)
            setShowRegister(true)
          }} />}
          
          {/* Popup Register */}
          {showRegister && <Register onClose={() => setShowRegister(false)} onSwitchToLogin={() => {
            setShowRegister(false)
            setShowLogin(true)
          }} />}
        </div>
      )}
    </div>
  )
}

export default Home
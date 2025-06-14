import './App.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
    <div className="app">
      <div className="app__content">
        <Header />
        {/* <Home /> */}
        <About />
      </div>
      <Footer />
    </div>
    </>
  )
}
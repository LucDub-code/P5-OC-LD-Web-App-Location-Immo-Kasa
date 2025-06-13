import './App.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Home />
      </div>
    </>
  )
}
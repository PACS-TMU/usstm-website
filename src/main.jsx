import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './components/General/Navbar.jsx'
import Footer from './components/General/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
)

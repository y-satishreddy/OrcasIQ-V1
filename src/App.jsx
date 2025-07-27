import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { useState } from 'react';
import MainForm from './components/MainForm/ManiForm'
import Modules from './components/Modules/Modules.jsx';
import WebForm from './components/WebForm/WebForm.jsx';
import Carsedf from './components/Carsedf/Carsedf.jsx';
import Faq from './components/FAQ/Faq.jsx';
import DataAnalytics from './Pages/Courses/DataAnalytics/DataAnalytics.jsx';

function App() {
  return (
    <>
    <Navbar></Navbar>
 
    <DataAnalytics/>
        <Footer></Footer>
    </>
  )
}
export default App

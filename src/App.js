import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import AttatchYourCar from './pages/attatch-your-car';
import CompanyPolicy from './pages/company-policy';
import Contact from './pages/contact';
import ListedCar from './pages/listed-cars';
import TermsAndCondition from './pages/terms-and-condition';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element = {<About/>} />
        <Route path='/attatch-your-car' element = {<AttatchYourCar/>} />
        <Route path='/company-policy' element = {<CompanyPolicy/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/listed-cars' element = {<ListedCar/>} />
        <Route path='/terms-condition' element = {<TermsAndCondition/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

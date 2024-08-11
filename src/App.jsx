
import './App.css';
import Experience from './Component/Experience/Experience';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Title from './Component/Title/Title';

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <Title title={"Experience"}/>
      <Experience/>
       
    </>
  )
}

export default App

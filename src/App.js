import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './data.js';

function App() {
 
  const card = data.map((item) => {
    return <Card
    id={item.id}
    item={item}
    />  
  
  })
  

  return (
    <div className="App">
     <Navbar/>
     <section className="cards-list"> {card}</section>
    <Footer/>
    </div>
  );
}

export default App;

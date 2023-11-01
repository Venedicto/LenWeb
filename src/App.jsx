
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, } from 'react-router-dom';
import Public from './routes/Public';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>

      <NavBar />
      <Public />
      <Footer />
      
      </Router>

    </div>
  );
}

export default App;

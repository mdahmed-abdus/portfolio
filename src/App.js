import './App.scss';
import Home from './components/Home';
import Footer from './components/SharedComponents/Footer/Footer';
import Header from './components/SharedComponents/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

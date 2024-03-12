import './App.css';
import InformationBar from './Nav&Footer/InformationBar';
import NavigationBar from './Nav&Footer/NavigationBar';
import Footer from './Nav&Footer/Footer';


function App() {
  return (
    <div>
      <InformationBar />
      <NavigationBar />
      
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;

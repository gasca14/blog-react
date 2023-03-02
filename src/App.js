import './App.css';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
function App() {
  return (
    <>
    <BrowserRouter>
      <TopBar/>
       <AppRouter>
        
       </AppRouter>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

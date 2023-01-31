import './App.css';
import './style/style.scss'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import  Video  from './pages/Video';
import Navebar from './components/Navebar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='video/:id' element={<Video/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

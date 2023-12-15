import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Auth } from './pages/Auth';
import { Register } from './pages/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main />} />
        <Route path='/auth' element={ <Auth />} />
        <Route path='/registration' element={ <Register />} />
      </Routes>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
      </Routes>
    </div>
  );
}

export default App;

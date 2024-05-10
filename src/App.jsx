import Simple from './pages/Simple';
import Complex from './pages/Complex';
import Investment from './pages/Investment';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          index
          element={<Simple />}
        />
        <Route
          path='complex'
          element={<Complex />}
        /> 
        <Route
          path='investment'
          element={<Investment />}
        /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

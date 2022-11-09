/* eslint-disable */
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import CalcPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import NavBar from './components/NavBar';

function App() {
    return (
      <div className="main-container">
      <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='calculator' element={<CalcPage />} />
          <Route exact path='quotes' element={<QuotePage />} />
        </Routes>
        learn react
      </div>
    );
  }

export default App;
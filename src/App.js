import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './routes/Card';
import { Layout } from './components/Layout';
import Form from './routes/Form';

function App() {
  return (
    <BrowserRouter>
  <Layout />
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/card/:cardName" element={<Card />} />
          <Route path="/form" element={<Form />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

import './index.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavLinksRow from './components/nav-links-row';
import AboutComponent from './components/about';
import HomeView from './views/home';

function App() {
  return (
    <div className="App">
      <NavLinksRow />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutComponent />} />
      </Routes>
    </div>
  );
}

export default App;

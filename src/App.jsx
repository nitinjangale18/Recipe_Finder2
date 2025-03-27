import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/NavBar';
import Home from './pages/Home';
import './App.css';
import Receipes from './pages/Receipes';
import RecipeDetails from './components/ReceipeDetails';

function App() {
  return (
    <Router basename="/Recipe_Finder2">  {/* Add basename here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Receipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

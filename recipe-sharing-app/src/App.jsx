import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <h1>Recipe Sharing App</h1>

        {/* Navigation */}
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

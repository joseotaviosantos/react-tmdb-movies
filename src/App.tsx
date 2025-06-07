import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage, SearchPage, MovieDetailsPage, FavoritePage } from 'screens';

import './App.css';

import { AppLayout } from './components/layout';

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movieDetails" element={<MovieDetailsPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;

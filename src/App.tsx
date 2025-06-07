import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

import { HomePage, SearchPage, MovieDetailsPage, FavoritePage } from 'screens';

import { AppLayout } from './components/layout';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

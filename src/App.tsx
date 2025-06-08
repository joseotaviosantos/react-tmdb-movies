import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

import { HomePage, SearchPage, MovieDetailsPage, FavoritePage } from 'screens';

import { RootLayout } from './components/layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movieDetails/:id" element={<MovieDetailsPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </RootLayout>
      </Router>
    </Provider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import TvPage from 'pages/TvPage';
import AppLayout from 'components/AppLayout';
import FavoritesPage from 'pages/FavoritesPage';
import SearchListPage from 'pages/SearchListPage';
import './App.css';
import TvSearchPage from 'pages/TvSearchPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='favorites' element={<FavoritesPage />} />
          {/* <Route path='tv' element={<TvPage />} /> */}
          <Route path='movie/:search' element={<SearchListPage />} />

          <Route path='tv' element={<TvPage />} />
          <Route path='tv/:search' element={<TvSearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

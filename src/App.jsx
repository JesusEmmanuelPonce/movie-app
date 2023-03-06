import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import TvPage from 'pages/TvPage';
import AppLayout from 'components/AppLayout';
import FavoritesPage from 'pages/FavoritesPage';
import SearchListPage from 'pages/SearchListPage';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path=':search' element={<SearchListPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='tv' element={<TvPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

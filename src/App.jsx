import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

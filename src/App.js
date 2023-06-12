import { Fragment } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Article from './components/Article';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Article />
      <ProductList />
      <Footer />
    </Fragment>
  );
}

export default App;

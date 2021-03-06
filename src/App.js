import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData} from './components/Products/data';
import Feature from './components/features';

// こんにちは！こちらはATOMから編集しました。
// こんにちは！こちらはVScodeから編集しました。



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
      <Feature />
    </Router>
  );
}

export default App;

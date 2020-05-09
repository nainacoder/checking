import React from 'react';
import './App.css';
import Header from './container/Header';
import Body from './container/Body';
import Footer from './container/Footer';
import Container from '@material-ui/core/Container';

function App() {
  return (

    <div>
    <Header />
    <Body />
    <Container fixed>
    <Footer />
    </Container>
    </div>
  );
}

export default App;

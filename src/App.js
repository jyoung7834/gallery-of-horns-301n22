import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'


import './App.css';


class App extends React.Component {
  render(){
    return(

      <>
      <Header/>
      <Main
        title="Type Something Here"
        description="Type Something Here Again"
      />

      <Footer
        title="Jacque Young"
        description="Jacque Young"
        />

      </>
    )
  }
}





export default App;

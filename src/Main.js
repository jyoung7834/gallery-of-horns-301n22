import React from 'react';
import HornedBeasts from './HornedBeasts';

import './HornedBeasts.css';

class Main extends React.Component  {
  render(){
    return(
      <>
        <HornedBeasts />

        <HornedBeasts />
      </>
    )
  }
}

export default Main;
import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json'


import './HornedBeasts.css';

class Main extends React.Component {
  render() {
    
    
    const renderedItems = (title, imageUrl, description) =>
      let itemsToRender = [];

      data.forEach(img => {
        itemsToRender.push(image_url());

      });

      return itemsToRender
    
    
      <HornedBeasts
        title={data.title}
        imageUrl={data.imageUrl}
        description={data.description}
      />
    

    
    return (
      <main>
        {itemToRender}

   

      
      </main>
    )
  }
}

export default Main;
import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imgUrl} alt={this.props.alt}/>
      <p>{this.props.alt}</p>
    

      </>
    )
  }
}

export default HornedBeasts;
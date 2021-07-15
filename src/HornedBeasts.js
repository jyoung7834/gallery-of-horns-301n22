import React from 'react';



class HornedBeasts extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      numberOnHand: 0,
      numberUsed: 0,
      showHeart: false,
    }
  }

  addOne = () => {
    this.setState({
      numberOnHand: this.state.numberOnHand + 1,
    })
  }

  usedOne = () => {
    this.setState({
      numberOnHand: this.state.numberUsed - 1,
    })
  }

  favorite = () => {
    this.setState({
      showFavorite:  true,
    })
  }


  render() {
    return (
      <article className="item">
        <h2>{this.props.title}</h2>
      
        <img 
          src={this.props.imgUrl} 
          alt={this.props.alt} 
          title={this.props.title}/>
        
        <p>{this.state.numberOnHand} Available </p>
        <p>{this.state.showFavorite ? '⭐' : '' }</p>
        <p onClick={this.favorite}>{this.props.description}</p>


        <button onClick={this.addOne}>Add One</button>
        <button onClick={this.usedOne}>Used One</button>



      </article>
    )
  }
}

export default HornedBeasts;
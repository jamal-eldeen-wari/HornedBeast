import React from 'react';
// import data from '../assests/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
class HornedBeast extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      numberOfFavorites : 0
    };
  }
  favBeast = () =>{
    this.setState({
      numberOfFavorites: this.state.numberOfFavorites +1
    });
  }
  render (){
    return (
      <div>
        <h2>
          Title: {this.props.title}

        </h2>
        {/* <img src= {this.props.image_url} alt = '' onClick ={this.favBeast}/> */}
        <Image src= {this.props.image_url} alt = '' onClick ={this.favBeast} fluid />
        <p>
          Description: {this.props.description}
        </p>
        <p>
          keyword: {this.props.keyword}
        </p>
        <p>
         Horns: {this.props.horns}
        </p>

        <span style = {{color: 'blue', fontWeight: 'bolder', textAlign: 'center'}}>
             Favorite beasts: {this.state.numberOfFavorites}
        </span>



      </div>

    );
  }
}
export default HornedBeast;

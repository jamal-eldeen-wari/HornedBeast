import React from 'react';
// import data from '../assests/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfFavorites: 0
    };
  }

  viewBeast = () =>{
    this.props.updatingShow();
    this.props.dataModeling(
      this.props.title,
      this.props.image_url,
      this.props.description,
      this.props.horn,
      this.props.keyword,
      this.state.numberOfFavorites
    );
  }
  favBeast = () => {
    this.setState({
      numberOfFavorites: this.state.numberOfFavorites + 1
    });
  }
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' , marginLeft: '490px', marginButtom: '20px'}}>
          <Card.Img variant="top" onClick={() =>{this.viewBeast();}} src={this.props.image_url}  alt = {this.props.keyword}/>
          <Card.Body>
            <Card.Title> Title: {this.props.title}</Card.Title>
            <Card.Text>
            Description: {this.props.description}
            Horns: {this.props.horns}
            </Card.Text>
            <Button variant="primary" onClick={this.favBeast}> Like a Beast:</Button>
            <span style={{ color: 'blue', fontWeight: 'bolder', textAlign: 'center' }}>
          Favorite beasts: {this.state.numberOfFavorites}
            </span>
          </Card.Body>
        </Card>



      </div>

    );
  }
}
export default HornedBeast;

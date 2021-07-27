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
  favBeast = () => {
    this.setState({
      numberOfFavorites: this.state.numberOfFavorites + 1
    });
  }
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' , marginLeft: '490px', marginButtom: '20px'}}>
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title> Title: {this.props.title}</Card.Title>
            <Card.Text>
            Description: {this.props.description}
            keyword: {this.props.keyword}
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

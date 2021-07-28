import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class SelectedBeasts extends React.Component{

  render(){
    console.log(this.props);
    return (
      <Modal 
        show={this.props.shown}
        width="700"
        height="600"
        effect="fadeInUp"
        onClickAway={this.props.updatingShow}
      >
        <Card style={{ width: '100%', height: '70%' ,textAlign: 'center'}}>
     
          <Card.Img style={{ width: '100%', height: '100%' }} variant="top" src={this.props.image_url}  onClick={this.props.updatingShow} 
            alt={this.props.keyword}
            title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Title>Favorite Beast : {this.props.favoriteBeast} </Card.Title>
     
            <Button variant="danger" onClick={this.props.updatingShow} > close</Button>
     
          </Card.Body>
        </Card>
      </Modal>
     
    );
  }
}
export default SelectedBeasts;

// {this.props.alt} For Alt

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export class BeastForm extends Component {
  handleFilter = (e) => {
    console.log('horn filter');
    console.log(e.target.value);
    e.preventDefault();
    this.props.changeFilter(parseInt(e.target.value));
  };
  render() {
    // console.log(this.props.changeFilter(1));
    return (
      <div>
        <Form>
          <Form.Select
            aria-label='Default select example'
            onChange={this.handleFilter}
            name='filter'
          >
            <option value='0'>All</option>
            <option value='1' >
              One
            </option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
            <option value='100'>Hundrad</option>
          </Form.Select>
        </Form>
      </div>
    );
  }
}

export default BeastForm;

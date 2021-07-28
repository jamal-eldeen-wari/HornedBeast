import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export class BeastForm extends Component {
  handleFilter = (e) => {
    e.preventDefault();
    this.props.changeFilter(parseInt(e.target.value));
  };
  render() {
    return (
      <div>
        <Form.Select
          aria-label='Default select example'
          onChange={this.handleFilter}
          name='filter'
        >
          <option>All</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
          <option value='100'>Hundrad</option>
        </Form.Select>
      </div>
    );
  }
}

export default BeastForm;

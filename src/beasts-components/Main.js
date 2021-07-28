import React from 'react';
import BeastForm from './BeastForm';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Default value
      hornFilter: -1,
    };
  }
  // this function is responsible for changing the filter based on user input.
  changeFilter = (changeFilter) => {
    this.setState({
      changeFilter: changeFilter,
    });
  };
  render() {
    return (
      <main>
        <BeastForm changeFilter={this.changeFilter} />

        {this.props.hornData
          .filter((element) =>
            this.state.changeFilter === -1
              ? true
              : element.horn === this.state.hornFilter
          )
          .map((beast) => {
            return (
              <HornedBeast
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}
                hornFunction={this.props.hornedBeastsFav}
                favBeast={this.props.favBeast}
                updatingShow={this.props.updatingShow}
                dataModeling={this.props.dataModeling}
              />
            );
          })}
      </main>
    );
  }
}
export default Main;

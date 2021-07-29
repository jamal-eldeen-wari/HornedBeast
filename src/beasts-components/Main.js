import React from 'react';
import BeastForm from './BeastForm';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeFilter: 0,
      //Default value of the filter
      hornFilter: -1,
    };
  }
  // this function is responsible for changing the filter based on user input.
  changeFilter = (changeFilter) => {
    console.log('coming from main');
    this.setState({
      changeFilter: changeFilter,
    });
  };
  render() {
    console.log(this.state.changeFilter);
    return (
      <main>
        <BeastForm changeFilter={this.changeFilter} />

        {this.props.hornData
          .filter((element) => {
            if (this.state.changeFilter === element.horns) {
              return element;
            } else if (this.state.changeFilter === 0) {
              return element;
            }
          })
          .map((beast) => {
            // console.log('inside map');
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

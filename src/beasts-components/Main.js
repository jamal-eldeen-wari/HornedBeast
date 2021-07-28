import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
  render(){
    return(

      <main>
        {this.props.hornData.map(beast =>
            
          <HornedBeast
            title = {beast.title}
            image_url ={beast.image_url}
            description ={beast.description}
            keyword = {beast.keyword}
            horns = {beast.horns}
            hornFunction = {this.props.hornedBeastsFav}
            favBeast = {this.props.favBeast}
            updatingShow = {this.props.updatingShow}
            dataModeling = {this.props.dataModeling}
            
          />
        )}
        {/* {console.log('from main',this.props)} */}

      </main>

    );
  }
}
export default Main;

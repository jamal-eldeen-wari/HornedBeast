import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../assests/data.json';

class Main extends React.Component{
  render(){
    return(

      <main>
        {data.map(beast =>
            
          <HornedBeast
            title = {beast.title}
            image_url ={beast.image_url}
            description ={beast.description}
            keyword = {beast.keyword}
            horns = {beast.horns}
          />
        )}

      </main>

    );
  }

}
export default Main;

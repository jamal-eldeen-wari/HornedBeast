import React from 'react';
import Header from './beasts-components/Header';
import Footer from './beasts-components/Footer';
import Main from './beasts-components/Main';
import SelectedBeasts from './beasts-components/SelectedBeasts';
import data from './assests/data.json';
import BeastForm from './beasts-components/BeastForm';
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      image_url: '',
      description: '',
      horn: '',
      keyword: '',
      favoriteBeast:0, 
      shown: false
    };
  }

  dataModeling = (title, image_url, description, horn, keyword, favoriteBeast)=>{
    this.setState({
      title : title,
      image_url : image_url,
      description: description,
      horn: horn,
      keyword: keyword,
      favoriteBeast: favoriteBeast,
    });
  }

  updatingShow = () =>{
    this.setState({
      shown: !this.state.shown

    });
  }


  // hornedBeastsFav = () =>{
  //   this.setState({
  //     favoriteBeast: this.state.favoriteBeast+1
  //   });

  // }
  render(){
    return(
      <div>
        {/* {console.log('state',this.state.favoriteBeast)} */}

        <Header />
        <SelectedBeasts
          shown={this.state.shown}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          favoriteBeast={this.state.favoriteBeast}
          updatingShow={this.updatingShow}
          // dataModeling={this.dataModeling}

          
        />
        <BeastForm 
        // Pass data.js 
        />
        <Main 
          hornData = {data}
          // hornedBeastsFav = {this.hornedBeastsFav}
          favBeast = {this.state.favoriteBeast}
          updatingShow={this.updatingShow}
          dataModeling={this.dataModeling}/>
        <Footer />
      </div>
    );

  }

}
export default App;

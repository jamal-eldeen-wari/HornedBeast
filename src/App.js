import React from 'react';
import Header from './beasts-components/Header';
import Footer from './beasts-components/Footer';
import Main from './beasts-components/Main';
import data from './assests/data.json';
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      favoriteBeast:0
    };
  }

  hornedBeastsFav = () =>{
    this.setState({
      favoriteBeast: this.state.favoriteBeast+1
    });

  }
  render(){
    return(
      <div>
        {console.log('state',this.state.favoriteBeast)}

        <Header />
        <Main 
          hornData = {data}
          hornedBeastsFav = {this.hornedBeastsFav}
          favBeast = {this.state.favoriteBeast}/>
        <Footer />
      </div>
    );

  }

}
export default App;

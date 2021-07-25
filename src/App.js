import React from 'react'
import Header from './beasts-components/Header';
import Footer from './beasts-components/Footer';
import Main from './beasts-components/Main';
class App extends React.Component{
  render(){
    return(
      <div>

        <Header />
        <Main />
        <Footer />
      </div>
    )

  }

}
export default App;

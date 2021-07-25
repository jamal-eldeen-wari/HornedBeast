import React from 'react';
class HornedBeast extends React.Component{
render (){
    return (
        <div>
            <h2>
                {this.props.title}

            </h2>
            <img src= {this.props.img} alt = ''/>
            <p>
                {this.props.description}
            </p>
            <p>
                {this.props.keyword}
            </p>
            <p>
                {this.props.horns}
            </p>


        </div>
    )
}
}
export default HornedBeast;
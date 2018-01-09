// Code CoordinatesButton Component Here
import React from 'react';
class CoordinatesButton extends React.Component
{
  handleButtonClick = (e) =>
  {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }
  render(){
    return(
      <button onClick={this.handleButtonClick}>GetMousePosition</button>
    )
  }
}
export default CoordinatesButton

import React from 'react'
import './Bus.css'
import { bus1} from './container.constants';
import Seats from './Seats';

class Bus1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show: false,
            showModal:false
        }
    }
    handleClick() {
        console.log("Button is Clicked");
       this.setState({show : true})
      }
   render()
   {
       return(
           <>
           
           <div className='Container1'>
            <h3>{this.props.travelsName} 4.3 <p> Boarding At</p> </h3>
            <div className='Dis'>
            <h3> <p>Destination</p></h3> 
            </div>
            <button className='Btn' onClick={() => this.handleClick()}>View Seats</button>
            </div>
            {this.state.show === false ? <span></span> : <Seats/>} 
           </>
       );
   }
}

export default Bus1;
import React from 'react'
import './Seat.css';
class Seats extends React.Component{
    constructor(){
        super()
        this.state={
        
        }
    }
    render()
    {
        return(
            <>
             <div className='movie-container'>
                {/* <label>Select Seat's:</label>
                <select id="Bus">
                  <option value="1000">Upper(Rs1000)</option>
                  <option value="1500">Lower (Rs1500)</option>
              
                </select> */}
              </div>
          
              <ul className="showcase">
                <li>
                  <div className="seat"></div>
                 <small>Available</small>
                </li>
                <li>
                  <div className="seat"></div>
                  <small>Selected</small>
                </li>
                <li>
                  <div className="seat occupied"></div>
                  <small>Occupied</small>
                </li>
              </ul>
          
              <div className="container">
              
                  <div className="Front"></div>
                <div className="row">
                  <div className="seat">A1</div>
                  <div className="seat">A2</div>
                  
                  <div className="seat">A3</div>
                  <div className="seat">A4</div>
                </div>
               
                <div className="row">
                  <div className="seat">B1</div>
                  <div class="seat">B2</div>
                
                  <div className="seat">B3</div>
                  <div className="seat">B4</div>
                </div>
                <div className="row">
                    <div className="seat">C1</div>
                    <div className="seat">C2</div>
                  
                    <div className="seat">C3</div>
                    <div className="seat">C4</div>
                </div>
                <div className="row">
                    <div className="seat">D1</div>
                    <div className="seat">D2</div>
                  
                    <div className="seat">D3</div>
                    <div className="seat">D4</div>
                </div>
                <div className="row">
                    <div className="seat">E1</div>
                    <div className="seat">E2</div>
                  
                    <div className="seat">E3</div>
                    <div className="seat occupied">E4</div>
                </div>
          
                <div classNames="Bottom">Lower &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;Upper</div>
              </div>
          
              <p className="text">
                You have selected <span id="count">0</span> seats for a price of $<span
                  id="total"
                  >0</span
                >
              </p>
              <span>Selected Seat</span>
              <h5 id="test"></h5>
             <button onclick="buytickets()">Buy</button>
            
            
            </>
        );
    }
}
export default Seats;
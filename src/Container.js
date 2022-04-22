import React from "react";
import {useNavigate} from 'react-router-dom'
export default class AutoCompleteText extends React.Component{
    constructor(props){
        super(props);
        this.items=[
            'chennai',
            'tirunelveli',
            'madurai',
            'tiruchy',
            'bangalore',
            'chengalpattu',
            'tiruvanamalai',
            'virudhunagar',
            'Nagercoil',
            'Tiruvanthapuram',
            'Hyderbad',
            'vellore',
            'Errode',
        ];
        this.state={
               from: [],
               text:'',
               to:[],
               texto:''

        };
    }

    onTextChanged = (e) =>{
             const value = e.target.value;
             let from =[];
             if (value.length > 0){
                const regex = new RegExp(`${value}`,'i');
                from = this.items.sort().filter(v => regex.test(v));
             }
                this.setState(() => ({ from , text:value}));
   }
    onTextChangedj = (e) =>{
        const value = e.target.value;
        let to =[];
        if (value.length > 0){
           const regex = new RegExp(`${value}`,'i');
           to = this.items.sort().filter(v => regex.test(v));
        }
           this.setState(() => ({ to , texto:value}));
}
    suggestionSelected(value){
        this.setState(() =>({
            text:value,
            from :  [],
        }))
    }

    suggestionSelected2(value){
        this.setState(() =>({
            texto:value,
            to :  [],
        }))
    }
    renderSuggestion(){
        const { from } = this.state;
        if (from.length === 0){
            return null;
        }
        return(
        <ul>
            {from.map((item) =><li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
        </ul>
        )
    }

    renderSuggestion2(){
        const { to } = this.state;
        if (to.length === 0){
            return null;
        }
        return(
        <ul>
            {to.map((item) =><li onClick={() => this.suggestionSelected2(item)}>{item}</li>)}
        </ul>
        )
    }
    
    render(){
        const { text } = this.state;
        const { texto } = this.state;
        const { historynext } = this.props
        var curr = new Date();
        curr.setDate(curr.getDate() );
        var date = curr.toISOString().substr(0,10);
       return(
        <>
        <div className='container'>
        <div className="User-Input-Container">
        <form>
        <label for="">Travel Details:</label>
   
        <div>
        <label for="">From:</label>
              <input value={text} onChange={this.onTextChanged}   type= "text"/>
             
              {this.renderSuggestion()}
           
        </div>
        <div>
            <label for="">To:</label>
            <input value={texto} onChange={this.onTextChangedj}   type= "text"/>
            {this.renderSuggestion2()}
            <label for="">Date:</label>
            {/* <input type="date" id="date"   /> */}
            <input id="dateRequired" type="date" name="dateRequired" defaultValue={date} /> 
        </div> 
            <button onClick={()=>historynext('/HelloPage')} id = 'btn1'>Submit</button>

          </form>

        </div>
      </div>
            
        </>
        )
    }
}
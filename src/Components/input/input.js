import React, { Component } from "react";
import './input.css'

class Input extends Component{

state={
    name:"",
    age:"",
}

//** 1- The First Way Here I Tried To Solve The Proplem Of Having The Inputs Values To Send Them To The Parent Component(App) To Modify It's State Values (Name,Age) So I Used Two Functions To Carry The Value Of The Input Then Send It As A Parameter To Parent Component(App)'s Function ( number(e),name(e) ) 

// getText=()=>{
// const input = document.querySelector("[type='text']");
// return input.value
// }

// getAge=()=>{
//     const input = document.querySelector("[type='number']");
//     return input.value
// }


//----------------------------------------------------------------------------------------------------------------


//** 2- Second Way Is To Use The State Of That Component And Change On It's State Object When OnChange In It's Inputs So It Is Clear To Use And There Is A Trick To Use ---> [e.target.id]=> It Refers To The Id Of The Target Which Can Be (name or age) So It Is One The State Object Values Or Keys OK ... 
//Then We Use The Function Addy() Which Occur When We Click On Add Button So It Runs The Function Also Addy() Which Is In The Parent Component (App) To Update The State Object Array To Push The New Object In The Page So When Have To Receive The Function Addy() As A Prop From The Parent Component In The Child Component(Input) To Run That Function When We Click Add And Send The (Child's State Object) As A Parameter To The Parent Component (App) To Push It To It's State Object Array Which Will Be Added To The Page Directly.. Also We Have To Update The State Of That Component Values To Use Them In The Values Of Our Inputes =>(To Make Them Empty After Clicking Add)

handleclick=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}


addy= ()=>{

this.props.addy(this.state);

this.setState({
    name:"",
    age:"",
})

}





render(){

        // const {name,number,add} = this.props;

        return(

            <div className="my-input">

                {/* <input type="text" placeholder="Enter Your Name" onChange={()=> name(this.getText())}  />
                <input type="number" placeholder="Age" onChange={()=> number(this.getAge())} />
                <button onClick={()=> add()}> Add Task</button> */}

                <input type="text" placeholder="Enter Your Name" onChange={this.handleclick} id="name"  value={this.state.name} />
                <input type="number" placeholder="Age" onChange={this.handleclick}  id="age" value={this.state.age}/>
                <button onClick={this.addy}> Add Task</button>


            </div>
        )
    }

}
export default Input;

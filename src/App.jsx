import React,{Component} from 'react';
import './App.css';

import Data  from './Components/data/data';
import Input  from './Components/input/input';

class App extends Component {

  state={
    // name:'',
    // age:null,
    info:[],
  }

// name=(e)=>{
// if(e !== null){
//   this.setState({
//     name:e
//   })
// }
// }

// number=(e)=>{
// if(e !== null){
//   this.setState({
//     age:e
//   })
// }
// }


// add=()=>{

// if(this.state.name !== "" && this.state.age !== null){

//   const arr = this.state.info
//   const myObject = {
//     name:this.state.name,
//     age:this.state.age,
//     id:Math.floor(Math.random()*1000)
//   }

//   arr.push(myObject);

//   this.setState({
//     info:arr
//   })

// }


// }


remove =(e)=>{
  const InfoArray = this.state.info
  const FilteredArr= InfoArray.filter((el)=>{
    return el.id !== e
  })
  
  this.setState({
    info:FilteredArr
  })
  
}

//--------------------------------------


addy = (item)=>{
  if(item.name !=="" && item.age !== ""){

    item.id = Math.floor(Math.random()*1000);

    const arr = this.state.info;

    arr.push(item)
    this.setState({
      info:arr
    })

    }
}



render(){

return (
    <div className="App">
          <div className='parent'>

          <Data  items={this.state.info} remove={this.remove}  />

          <Input name={this.name} number={this.number} add={this.add}  addy={this.addy} />

          </div>
    </div>
  );
}
}

export default App;

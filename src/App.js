import './App.css';
import React,{Component} from 'react';
//import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import TodoApp from './components/todo/TodoApp'

class App extends Component{

  render(){
    return(
        <div className="App">
            <TodoApp/>
        </div>
    );
  }

}

export default App;

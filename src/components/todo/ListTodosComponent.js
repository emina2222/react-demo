import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import TodoService from '../../api/TodoService'
import AuthenticationService from './AuthenticationService'

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            todo:[]
        }
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this)
        this.refreshTodos=this.refreshTodos.bind(this)
        this.updateTodoClicked=this.updateTodoClicked.bind(this)
    }

    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos(){
        let username=AuthenticationService.getLoggedInUsername();
        TodoService.retrieveAllTodos(username)
        .then(response=>{
            console.log(response.data)
            this.setState({todo:response.data})
        })
    }

    updateTodoClicked(id){
        console.log(id)
        this.props.history.push(`/todos/${id}`)
    }

    deleteTodoClicked(id){
        let username=AuthenticationService.getLoggedInUsername();
        console.log(id,username);
        TodoService.deleteTodo(username,id)
        .then(
            response=>{
                this.setState({message:'Delete successful.'})
                this.refreshTodos();
            }
        )
    }

    render(){
        return(
            <div>
                <h1>List of Todos</h1>
                {this.state.message &&<div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Target date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody> {/*Prolazak kroz listu*/}
                        {
                            this.state.todo.map(
                                todo=>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.isDone}</td>
                                        <td>{todo.date}</td>
                                        <td><button className="btn btn-warning" onClick={()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                        }   
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent
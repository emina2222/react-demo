import axios from "axios"

class TodoService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/api/users/${name}/todos`)
    }
    deleteTodo(name,id){
        return axios.delete(`http://localhost:8080/api/users/${name}/todos/${id}`)
    }
}
export default new TodoService()
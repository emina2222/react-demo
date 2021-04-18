import axios from "axios"

class HelloWorldService{
    executeService(){
        return axios.get('http://localhost:8080/api/hello-world') //vraca promise
    }

    executeBeanService(){
        return axios.get('http://localhost:8080/api/hello-world-bean') //vraca promise
    }

    executePathVarService(name){
        return axios.get(`http://localhost:8080/api/hello-world/path-variable/${name}`) //koriste se `` zbog 
                                                                                               //prosledjivanja vrednosti
    }

}

export default new HelloWorldService()
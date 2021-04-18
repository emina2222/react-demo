import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import HelloWorldService from '../../api/HelloWorldService'

{/*params.name se odnosi na path variable*/}
class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            "message":""
        }
        this.retrieveMessage=this.retrieveMessage.bind(this);
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this);
        this.handleError=this.handleError.bind(this);
    }

    render(){
        return(
            <>
            <h1>Welcome {this.props.match.params.name}</h1>
            <div>
                Manage your todos <Link to="/todos">here</Link>. {/*Link je bolji od <a href> jer ne refreshuje celu stranicu, vec samo taj deo */}
            </div>
            <div className="container">
                Click here to get a customized welcome message.
                <button onClick={this.retrieveMessage} className="btn-success">Get Message</button>
                <h3>{this.state.message}</h3>
            </div>
            </>
        )
    }

    retrieveMessage(){
        //HelloWorldService.executeService()
        //.then(response => this.handleSuccessfulResponse(response))  //kada je success
        //.catch(); //kada je failed

        //HelloWorldService.executeBeanService()
        //.then(response => this.handleSuccessfulResponse(response))  //kada je success

        HelloWorldService.executePathVarService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))  //kada je success
    }

    handleSuccessfulResponse(response){
        console.log(response.data)
        this.setState({message:response.data.message})
    }

    handleError(error){
        console.log(error)
        this.setState({message:error.response.data.message})
    }
}

export default WelcomeComponent
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'emina',
            password:'',
            loginFail:false, //da li je login fejlovao
            successMessage:false //ako je uspesan login, onda poruka
        }
        this.handlerUsernameChange=this.handlerUsernameChange.bind(this); //svaka metoda mora da se binduje za klasu kojoj pripada
        this.handlerPasswordChange=this.handlerPasswordChange.bind(this);
        this.handleChange=this.handleChange.bind(this); //ova jedna metoda zamenjuje prethodne dve

        this.loginClicked=this.loginClicked.bind(this);
    }

    loginClicked(){
        console.log(this.state) //prikazace poslednje unete vrednosti za username i password
        if(this.state.username==='emina' && this.state.password==='123'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`) //redirektuje na stranu /welcome:emina
            console.log('Successful')                                   //KORISTE SE ` ` DA BI this.state.username bilo vidljivo
            this.setState({successMessage:true})
            this.setState({loginFail:false})
        }
        else{
            console.log('Failed')
            this.setState({successMessage:false})
            this.setState({loginFail:true})
        }


    }

    handleChange(event){
        console.log(event.target.value);  
        this.setState({
            [event.target.name]:event.target.value //na ovaj nacin moze da osluskuje bilo koji element, da se ne bi hardkodovao
        })
    }

    handlerUsernameChange(event){
        console.log(event.target.value);  //prikazuje vrednost koja je promenjena (npr emina, miki123 itd)
        this.setState({
            username:event.target.value //postavlja vrednost username na novu kada dodje do promene u input polju
        }) // [event.target.name] == username (ista je stvar, jer osluskuje username)
        {/* Kada se stavi atribut 'value' u input, polje ne moze da se promeni, vrednost bude fiksna. 
                Zato smo dodali ovu metodu, da osluskuje promene u input polju*/}
    }
    handlerPasswordChange(event){
        console.log(event.target.value);  //daje vrednost koja je promenjena
        this.setState({
            password:event.target.value //postavlja vrednost username na novu kada dodje do promene u input polju
        })
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCreds loginFail={this.state.loginFail} /> Pokazace ovaj deo ako je loginFail TRUE */}
                    {this.state.loginFail && <div className="alert alert-warning">Invalid Credentials</div>} 
                    {/* kada je loginFail=false, onda vraca false! Kada je loginFail=true, vraca div sa porukom*/}
                    {/*<ShowLoginSuccessMessage successMessage={this.state.successMessage} /> Pokazace ovaj deo ako je successMessage TRUE */}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button onClick={this.loginClicked} className="btn-success">Login</button>
                </div>
            </div>
        );
    }

}
//kad je funkcija u okviru klase, onda se na pise function 
//kad je van klase, onda se pise function
function ShowInvalidCreds(props){
    if(props.loginFail){
        return <div>Invalid Credentials</div>
    }
    return null;
}
function ShowLoginSuccessMessage(props){
    if(props.successMessage){
        return <div>Successful</div>
    }
    return null;
}

export default LoginComponent
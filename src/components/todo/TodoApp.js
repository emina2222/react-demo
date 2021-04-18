import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterHeader'
import ErrorComponent from './ErrorComponent'
import LogoutComponent from './LogoutComponent'
import TodoComponent from './TodoComponent'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <>   {/*Ovaj prazan tag se zove Fragment - Router moze da ima samo 1 direktni child element*/}
                         {/*AuthenticatedRoute obezbedjuje da korisnik ne moze ukucati URL npr /todo i da pristupi stranici
                         ukoliko nije ulogovan!!!
                         Ruta koja ima path variable a pocetak je isti kao kod neke druge (npr /todos i /todos/:id) -
                         /todos/:id mora da ide IZNAD /todos!!!
                         */}
                        <HeaderComponent/>
                        <Switch> {/*Omogucava da u jednom momentu, samo jedna ruta bude u upotrebi*/}
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <AuthenticatedRoute exact path="/todos/:id" component={TodoComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <Route component={ErrorComponent}/> {/*Ovo ce biti prikazano kada ruta ne postoji*/}
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}


export default TodoApp;
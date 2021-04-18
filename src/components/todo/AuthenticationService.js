class AuthenticationService{

    registerSuccessfulLogin(username,password){
        console.log("Registered login.")
        sessionStorage.setItem('authenticatedUser',username); //key je 'authenticated'
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){ //ako nije ulogovan
            return false; 
        }
        return true;
    }

    getLoggedInUsername(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){ //ako nije ulogovan
            return ''; 
        }
        return user;
    }
}
export default new AuthenticationService()
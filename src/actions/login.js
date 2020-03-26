function login (username,name,image,email,token,id){
    return {
        type: 'LOGIN',
        username,
        name,
        image,
        email,
        token,
        id
    }
}
function logout (){
    return{
        type: 'LOGOUT'
    }
}
export {login, logout}
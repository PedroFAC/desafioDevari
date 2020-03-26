import React from 'react';
import {TextField, Button,Container} from '@material-ui/core'
import {Link,Redirect, Route} from 'react-router-dom'
import {useState,useEffect} from 'react'
import api from '../services/api'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as loginActions from '../actions/login'


const Login = (props) => {
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    const [logged, setLogged] = useState(false)
    const getAuths = async () =>{
        const response = await api.post('/authentication/',{username: username, password:senha})
        console.log(response.data)
        if(response.ok){
            props.login(username,response.data.name,response.data.image,response.data.email,response.data.token,response.data.id)
            alert(response.data.token)
            console.log(props.logged)
        }else{
            alert("Erro")
        }
    }
    const logUser =()=>{
        props.login(username)
    }
    useState(()=>console.log(props.username),[])
    return (
        <div>
            
            <Container>
            <form>
            <TextField value={username} onChange={e=>setUsername(e.target.value)} label="Login" variant="outlined" /><br/>
            <TextField value={senha} onChange={e=>setSenha(e.target.value)} type="password"  label="Senha" variant="outlined" /><br/>
            <Button onClick={getAuths}  variant="contained" color="secondary">
            Login
            </Button>

            </form>
            {props.logged &&
            <Redirect to="/minhasReceitas"/>
            }
            </Container>
        </div>
    );
};
const mapStateToProps = state=>({
    logged: state.login.logged,
    username: state.login.username,
    name: state.login.name,
    image:state.login.image,
    email:state.login.email,
    token:state.login.token,
    id: state.login.id
})
const mapDispatchToProps= dispatch=>
bindActionCreators(loginActions,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Login);
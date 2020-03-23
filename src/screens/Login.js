import React from 'react';
import {TextField, Button,Container} from '@material-ui/core'
import {Link,Redirect, Route} from 'react-router-dom'
import {useState,useEffect} from 'react'
import api from '../services/api'


const Login = () => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [logged, setLogged] = useState(false)
    const getAuths = async () =>{
        const response = await api.post('/authentication/',{username: login, password:senha})
        console.log(response.data)
        if(response.ok){
            alert('credenciais corretas, login bem sucedido')
            setLogged(true)
        }else{
            alert("Erro")
        }
    }
    return (
        <div>
            <Container>
            <form>
            <TextField value={login} onChange={e=>setLogin(e.target.value)} label="Login" variant="outlined" /><br/>
            <TextField value={senha} onChange={e=>setSenha(e.target.value)} type="password"  label="Senha" variant="outlined" /><br/>
            <Button onClick={getAuths}  variant="contained" color="secondary">
            Login
            </Button>

            </form>
            {logged &&
            <Redirect to="/receitas"/>
            }
            </Container>
        </div>
    );
};

export default Login;
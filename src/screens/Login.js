import React from 'react';
import {TextField, Button,Container,Paper, makeStyles} from '@material-ui/core'
import {Link,Redirect, useHistory} from 'react-router-dom'
import {useState,useEffect} from 'react'
import api from '../services/api'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as loginActions from '../actions/login'

const useStyles = makeStyles({
    root:{
        width:'80%',
        justifyContent:'center'

    },
    field:{
        width:'60%',
        marginTop: 20,
    },
    button:{
        marginTop:20,
        marginBottom:40
    }
})


const Login = (props) => {
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    const [logged, setLogged] = useState(false)
    const history = useHistory()
    const getAuths = async () =>{
        const response = await api.post('/authentication/',{username: username, password:senha})
        console.log(response.data)
        if(response.ok){
            props.login(username,response.data.name,response.data.image,response.data.email,response.data.token,response.data.id)
            alert(response.data.token)
            history.push('/minhasReceitas')
        }else{
            alert("Erro")
        }
    }
    const logUser =()=>{
        props.login(username)
    }
    useState(()=>console.log(props.username),[])
    const classes = useStyles();
    return (
        <div>
            
            <Container>
            <Paper className={classes.root}>
            <form>
            <TextField className={classes.field} value={username} onChange={e=>setUsername(e.target.value)} label="Login" variant="outlined" /><br/>
            <TextField className={classes.field} value={senha} onChange={e=>setSenha(e.target.value)} type="password"  label="Senha" variant="outlined" /><br/>
            <Button className={classes.button} onClick={getAuths}  variant="contained" color="secondary">
            Login
            </Button>

            </form>
            </Paper>
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
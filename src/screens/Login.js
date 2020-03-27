import React from 'react';
import {TextField, Button,Container,Paper, makeStyles} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import api from '../services/api'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as loginActions from '../actions/login'

const useStyles = makeStyles({
    root:{
        width:'80%',
        alignItems: 'center'
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
    const history = useHistory()
    const getAuths = async () =>{
        const response = await api.post('/authentication/',{username: username, password:senha})
        console.log(response.data)
        if(response.ok){
            props.login(username,response.data.name,response.data.image,response.data.email,response.data.token,response.data.id)
            history.push('/minhasReceitas')
        }else{
            alert("Erro nas credenciais")
        }
    }
    const logUser =()=>{
        props.login(username)
    }
    useState(()=>console.log(props.username),[])
    const classes = useStyles();
    return (
        <div>
            
            <Container className={classes.root}>
            <Paper >
            <form>
            <TextField className={classes.field} value={username} onChange={e=>setUsername(e.target.value)} label="Login" variant="outlined" /><br/>
            <TextField className={classes.field} value={senha} onChange={e=>setSenha(e.target.value)} type="password"  label="Senha" variant="outlined" /><br/>
            <Button className={classes.button} onClick={getAuths}  variant="contained" color="primary">
            Login
            </Button>

            </form>
            </Paper>
           </Container>
        </div>
    );
};
const mapStateToProps = state=>({
    logged: state.logged,
    username: state.username,
    name: state.name,
    image:state.image,
    email:state.email,
    token:state.token,
    id: state.id
})
const mapDispatchToProps= dispatch=>
bindActionCreators(loginActions,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Login);
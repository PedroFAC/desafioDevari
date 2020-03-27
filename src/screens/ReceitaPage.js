import React , {useState,useEffect}from 'react';
import {Paper,makeStyles,Container,Button,Typography} from '@material-ui/core'
import {useParams} from 'react-router-dom'
import api from '../services/api'
import {connect} from 'react-redux'


const useStyles = makeStyles({
    root: {
      width: '100%',
      alignContent:'center'
    },
})


const ReceitaPage = (props) => {
    const classes = useStyles()
    let {id} = useParams()
    let [data,setData]=useState({
        title:'',
        description:'',
        category:{
            name:''
        }
    })
    const getReceita = async () =>{
        api.setHeaders({Authorization: 'Token '+props.token})
          const response  = await api.get('/api/v1/recipe/'+id)
          data= response.data
          setData(data)
          console.log(data)
    }
    return (
        <div onLoad={getReceita()}>
            <Container>
                <Button onClick={getReceita}>Get</Button>
            <Paper className={classes.root} elevation ={2}>
                <h1>{data.title}</h1>
                <h3>{data.category.name}</h3>
                <Typography>
                    {data.description}
                </Typography>
            </Paper>
            </Container>
        </div>
    );
};
const mapStateToProps = state=>({
    token: state.login.token,
})
export default connect(mapStateToProps)(ReceitaPage);
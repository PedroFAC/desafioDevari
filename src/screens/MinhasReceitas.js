import React from 'react';
import {Card,CardActionArea,CardContent,Button,Typography, Grid } from '@material-ui/core'
import MyReceitaCard from '../components/MyReceitaCard'
import {useHistory} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import api from '../services/api'

const MinhasReceitas = (props) => {
  let [data,setData]=useState([])
  const history = useHistory()
  const getReceitas = async ()=>{
      api.setHeaders({Authorization: 'Token '+props.token})
      const response  = await api.get('/api/v1/recipe?user='+props.id)
      data= response.data
      setData(data)
      console.log(data)
      
  }
  const deleteReceitas = async id=>{
    api.setHeaders({Authorization: 'Token '+props.token})
    const response = await api.delete('/api/v1/recipe/'+id)
    console.log(response.data)
    getReceitas()
  }
    return (
        <div onLoad={getReceitas()}>
          <Grid
        container 
        direction="row"
        justify="center"
        alignItems="center"
        >
          {
            data.map(value=>{
            return <MyReceitaCard id={value.id} tipo={value.category.name} usuario={value.user.name} nome={value.title} image={value.category.image} delete={()=>deleteReceitas(value.id)}/>
            })
          }
          <Card >
        <CardActionArea>

        </CardActionArea>
      </Card>
      <Card >
        <CardActionArea>
          <Button onClick={()=>history.push('/addReceita')}  size="large">Adicionar Receita</Button>
        </CardActionArea>
      </Card>
      </Grid>

        </div>
    );
};

const mapStateToProps = state=>({
  token: state.login.token,
  id: state.login.id
})


export default connect(mapStateToProps)(MinhasReceitas);
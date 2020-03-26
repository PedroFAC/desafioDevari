import React from 'react';
import {Card,CardActionArea,CardContent,Button,Typography, Grid } from '@material-ui/core'
import ReceitaCard from '../components/ReceitaCard'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import api from '../services/api'

const MinhasReceitas = (props) => {
  let [data,setData]=useState([])
  const getReceitas = async ()=>{
      api.setHeaders({Authorization: 'Token '+props.token})
      const response  = await api.get('/api/v1/recipe?user='+props.id)
      data= response.data
      setData(data)
      console.log(data)
      
  }
    

    return (
        <div>
          <Grid
        container 
        direction="row"
        justify="center"
        alignItems="center"
        >
          {
            data.map(value=>{
            return <ReceitaCard tipo={value.category.name} descricao={value.description} nome={value.title} image={value.category.image}/>
            })
          }
          <Card >
        <CardActionArea>
          <Button onClick={getReceitas}  size="large">Get</Button>

        </CardActionArea>
      </Card>
      <Card >
        <CardActionArea>
          <Link to={'/addReceita'}>
          <Button  size="large">Adicionar Receita</Button>
          </Link>
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
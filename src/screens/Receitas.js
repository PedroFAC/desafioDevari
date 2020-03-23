import React ,{useState,useEffect}from 'react';
import ReceitaCard from '../components/ReceitaCard'
import {Grid,Button} from '@material-ui/core'
import api from '../services/api'

const Receitas = () => {
      let receitas = []
      async function getReceitas(){
        const response = await api.get('/api/v1/recipe/')
        console.log(response.data)
      }
        useEffect(()=>{
          getReceitas()
        },[])
      return (
        <div>
        <Grid
        container 
        direction="row"
  justify="center"
  alignItems="center"
        >
          
      </Grid>
        </div>
    );
};

export default Receitas;
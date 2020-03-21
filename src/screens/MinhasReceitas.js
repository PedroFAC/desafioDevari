import React from 'react';
import {Card,CardActionArea,CardContent,Button,Typography, Grid } from '@material-ui/core'
import ReceitaCard from '../components/ReceitaCard'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
const MinhasReceitas = () => {
    const [receitas,setReceitas]=useState( [
        {
          tipo:'Pizza',
          nome:'Calabresa',
          descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus at augue a sodales. Nullam ut sollicitudin ipsum. Ut et aliquet elit. Sed vitae pellentesque dolor. Proin risus sem, semper laoreet vestibulum vitae, tincidunt at purus. Donec fermentum ipsum sagittis quam imperdiet, quis ultrices urna viverra...',
        },
        {
          tipo:'Sanduíche',
          nome:'X-Salada',
          descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus at augue a sodales. Nullam ut sollicitudin ipsum. Ut et aliquet elit. Sed vitae pellentesque dolor. Proin risus sem, semper laoreet vestibulum vitae, tincidunt at purus. Donec fermentum ipsum sagittis quam imperdiet, quis ultrices urna viverra...',
        },
        {
          tipo:'Regional',
          nome:'Macaxeira',
          descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus at augue a sodales. Nullam ut sollicitudin ipsum. Ut et aliquet elit. Sed vitae pellentesque dolor. Proin risus sem, semper laoreet vestibulum vitae, tincidunt at purus. Donec fermentum ipsum sagittis quam imperdiet, quis ultrices urna viverra...', 
        },
      ]);
      const add = ()=>{
       let tempArray = receitas;
        tempArray.push({
          tipo:'Regional',
          nome:'Macaxeira',
          descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus at augue a sodales. Nullam ut sollicitudin ipsum. Ut et aliquet elit. Sed vitae pellentesque dolor. Proin risus sem, semper laoreet vestibulum vitae, tincidunt at purus. Donec fermentum ipsum sagittis quam imperdiet, quis ultrices urna viverra...',
        })
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
        receitas.map(
          value =>{
          return <ReceitaCard nome={value.nome} tipo = {value.tipo} descricao={value.descricao}/>
          })
      }
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

export default MinhasReceitas;
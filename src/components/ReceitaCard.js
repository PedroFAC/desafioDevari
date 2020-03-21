import React from 'react';
import {Card,CardActionArea,CardContent,Button,Typography } from '@material-ui/core'
import {makeStyles}from '@material-ui/core/styles'
import {useState,useEffect} from 'react'

  
  

const ReceitaCard = (props) => {
    const [tipo,setTipo] = useState(props.tipo)
    const [nome,setNome] = useState(props.nome)
    const [descricao, setDescricao] = useState(props.descricao)

    return (
        <Card >
        <CardContent>
          <Typography>{tipo}</Typography>
           <Typography variant ="h5" component="h2">{nome}</Typography> 
           <Typography>
                {descricao}
            </Typography>
        </CardContent>
        <CardActionArea>
          <Button size="small">Ver Receita</Button>
        </CardActionArea>
      </Card>
    );
};

export default ReceitaCard;
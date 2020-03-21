import React from 'react';
import {Card,CardActionArea,CardContent,Button,Typography,makeStyles } from '@material-ui/core'
import {useState,useEffect} from 'react'

  
const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    }})

const ReceitaCard = (props) => {
    const [tipo,setTipo] = useState(props.tipo)
    const [nome,setNome] = useState(props.nome)
    const [descricao, setDescricao] = useState(props.descricao)
    const classes = useStyles()
    return (
        <Card variant="outlined" className={classes.root} >
        <CardContent>
          <Typography>{tipo}</Typography>
           <Typography variant ="h5" component="h2">{nome}</Typography> 
           <Typography >
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
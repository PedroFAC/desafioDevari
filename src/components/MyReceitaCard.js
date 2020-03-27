import React from 'react';
import {Card,CardActionArea,CardContent,Button,Typography,makeStyles,CardMedia } from '@material-ui/core'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
  
const useStyles = makeStyles({
    root: {
      width: 400,
      height:350
    },
    media: {
      height: 140,
    },
  })

const MyReceitaCard = (props) => {
    const [tipo,setTipo] = useState(props.tipo)
    const [nome,setNome] = useState(props.nome)
    const classes = useStyles()
    const history = useHistory()
    return (
        <Card variant="outlined" className={classes.root} >
        <CardContent>
          <CardMedia className={classes.media}
          component='img'
            src={props.image}
          >
            </CardMedia>
          <Typography>{tipo}</Typography>
           <Typography variant ="h5" component="p">{nome}</Typography> 
           <Typography >
               Criado por: {props.usuario}
            </Typography>
        </CardContent>
        <CardActionArea>
          <Button onClick={()=>history.push('/receitaPage/'+props.id)} size="small">Ver Receita</Button>

         
          <Button onClick={()=>history.push('/editReceita/'+props.id)} size="small">Editar Receita</Button>

          <Button onClick={props.delete} size="small">Deletar Receita</Button>
        
        </CardActionArea>
      </Card>
    );
};

export default MyReceitaCard;
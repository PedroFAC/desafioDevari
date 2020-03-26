import React from 'react';
import {Card,CardActionArea,CardContent,Button,Typography,makeStyles,CardMedia } from '@material-ui/core'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
  
const useStyles = makeStyles({
    root: {
      width: 400,
      height:350
    },
    media: {
      height: 140,
    },
  })

const ReceitaCard = (props) => {
    const [tipo,setTipo] = useState(props.tipo)
    const [nome,setNome] = useState(props.nome)
    const [descricao, setDescricao] = useState(props.descricao)
    const classes = useStyles()
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
                {descricao}
            </Typography>
        </CardContent>
        <CardActionArea>
          <Link to={'/receitaPage'}> 
          <Button size="small">Ver Receita</Button>
          </Link>
        </CardActionArea>
      </Card>
    );
};

export default ReceitaCard;
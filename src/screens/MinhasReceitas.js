import React from 'react';
import { Grid,Fab, makeStyles } from '@material-ui/core'
import MyReceitaCard from '../components/MyReceitaCard'
import Loading from '../components/Loading'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import {connect} from 'react-redux'
import api from '../services/api'

const useStyles= makeStyles({
  fab:{
    marginLeft:'50%',
    position: "relative"
  }
})

const MinhasReceitas = (props) => {
  const classes = useStyles()
  let [data,setData]=useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const getReceitas = async ()=>{
    if(loading){

      api.setHeaders({Authorization: 'Token '+props.token})
      const response  = await api.get('/api/v1/recipe?user='+props.id)
      data= response.data
      setData(data)
      console.log(data)
      setLoading(false)
    }
  }
  const deleteReceitas = async id=>{
    api.setHeaders({Authorization: 'Token '+props.token})
    const response = await api.delete('/api/v1/recipe/'+id)
    console.log(response.data)
    getReceitas()
  }
    return (
        <div onLoad={getReceitas()}>
           <Loading active={loading}/>

          {!loading &&
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
          
          <Fab className={classes.fab} onClick={()=>history.push('/addReceita')} variant="extended">
        Adicionar Receita
      </Fab>
      </Grid>

      }
      
        </div>
    );
};

const mapStateToProps = state=>({
  token: state.token,
  id: state.id
})


export default connect(mapStateToProps)(MinhasReceitas);
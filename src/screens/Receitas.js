import React ,{useState,useEffect}from 'react';
import ReceitaCard from '../components/ReceitaCard'
import {Grid,Button} from '@material-ui/core'
import api from '../services/api'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as receitasActions from '../actions/receitas'


const Receitas = (props) => {
      let [data,setData]=useState([])
      const getReceitas = async ()=>{
          api.setHeaders({Authorization: 'Token '+props.token})
          const response  = await api.get('/api/v1/recipe/')
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
            return <ReceitaCard id={value.id} tipo={value.category.name} descricao={value.description} nome={value.title} image={value.category.image}/>
            })
          }
         <Button onClick={getReceitas}>map</Button>
      </Grid>
        </div>
    );
};
const mapStateToProps = state=>({
  token: state.login.token,
  receitas: state.receitas
})
const mapDispatchToProps= dispatch=>
bindActionCreators(receitasActions,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Receitas);
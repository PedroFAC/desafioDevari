import React ,{useState,useEffect}from 'react';
import ReceitaCard from '../components/ReceitaCard'
import Loading from '../components/Loading'
import {Grid} from '@material-ui/core'
import api from '../services/api'
import {connect} from 'react-redux'



const Receitas = (props) => {
      let [data,setData]=useState([])
      const [loading, setLoading] = useState(true)
      const getReceitas = async ()=>{
        if(loading){
          api.setHeaders({Authorization: 'Token '+props.token})
          const response  = await api.get('/api/v1/recipe/')
          data= response.data
          setData(data)
          console.log(data)
          setLoading(false)
        }
      }
      
      return (
        <div >
        <Grid 
        onLoad={getReceitas()}
        container 
        direction="row"
  justify="center"
  alignItems="center"
        >
       
          <Loading active={loading}/>
         
         {
            data.map(value=>{
            return <ReceitaCard id={value.id} tipo={value.category.name} usuario={value.user.name} nome={value.title} image={value.category.image}/>
            })
          }
      </Grid>
        </div>
    );
};
const mapStateToProps = state=>({
  token: state.token,
})

export default connect(mapStateToProps)(Receitas);
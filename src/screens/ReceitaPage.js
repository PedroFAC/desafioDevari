import React , {useState}from 'react';
import {Paper,makeStyles,Container,Button,Typography} from '@material-ui/core'
import Loading from '../components/Loading'
import {useParams} from 'react-router-dom'
import api from '../services/api'
import {connect} from 'react-redux'


const useStyles = makeStyles({
    root: {
      width: '80%',
      alignItems:'center'
    },
})


const ReceitaPage = (props) => {
    const classes = useStyles()
    let {id} = useParams()
    let [data,setData]=useState({
        title:'',
        description:'',
        category:{
            name:'',
            image:''
        },
        user:{
           name:'' 
        }
    })
    const [loading, setLoading] = useState(true)

    const getReceita = async () =>{
        if(loading){
        api.setHeaders({Authorization: 'Token '+props.token})
          const response  = await api.get('/api/v1/recipe/'+id)
          data= response.data
          setData(data)
          console.log(data)
          setLoading(false)
        }
    }
    return (
        <div onLoad={getReceita()}>
            <Container className={classes.root}>
            <Loading active={loading}/>
            {!loading &&

            <Paper  elevation ={2}>
            
            <img style={{width:'40%', height:'5%'}} src={data.category.image}/>
            <Typography variant="h2" gutterBottom>
            {data.title}
            </Typography>
            <Typography variant="h4" gutterBottom>
            {data.category.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
          Por:  {data.user.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
                    {data.description}
                </Typography>
            
            </Paper>
            }
            </Container>
        </div>
    );
};
const mapStateToProps = state=>({
    token: state.token,
})
export default connect(mapStateToProps)(ReceitaPage);
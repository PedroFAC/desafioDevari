import React from 'react';
import {TextField, Button, Container,TextareaAutosize, Select,MenuItem,makeStyles, Paper, InputLabel,FormControl} from '@material-ui/core'
import{useState} from 'react'
import {connect} from 'react-redux'
import {useParams, useHistory} from 'react-router-dom'
import api from '../services/api'
import Loading from '../components/Loading'
const useStyles = makeStyles({
    root:{
        width:'80%',
        alignItems: 'center'
    },
    field:{
        width:'60%',
        marginTop: 20,
    },
    
    button:{
        marginTop:20,
        marginBottom:40
    },
    select:{
        width:'20%',
        marginTop: 20,

    }
})

const EditReceita = (props) => {
    const history = useHistory()
    let {id} = useParams()
    const [tipo,setTipo] = useState('')
    let [categorias, setCategorias] = useState([])
    const [nome,setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [loading,setLoading] = useState(true)
    const handleChange = event => {
        setTipo(event.target.value);
      };
      const getCategories = async ()=>{
          api.setHeaders({Authorization: 'Token '+props.token})
          const response  = await api.get('/api/v1/category/')
          categorias= response.data
          setCategorias(categorias)
          console.log(props.id)
          setLoading(false)
          
      }
      const addReceita = async()=>{
        api.setHeaders({Authorization: 'Token '+props.token})
        const response = await api.put('/api/v1/recipe/'+id+'/',{title:nome, description: descricao, category:tipo, user: Number(props.id)})
        console.log(response.data)
        if(response.ok){
        setTipo('')
        setNome('')
        setDescricao('')
        history.push('/minhasReceitas')
        }
    }
    const getReceita = async()=>{
        api.setHeaders({Authorization: 'Token '+props.token})
          const response  = await api.get('/api/v1/recipe/'+id)
          console.log(response.data)
          setTipo(response.data.category.id)
          setNome(response.data.title)
          setDescricao(response.data.description)
    }
    function getAll(){
        if(loading){
        getCategories();
        getReceita();
        }
    }
    const classes = useStyles()
    return (
        <div onLoad={getAll()}>
            <Container>
                <Loading active={loading}/>
                {!loading &&
                <Paper>
                <FormControl className={classes.select}>
                <InputLabel id="label" >Categoria</InputLabel>
                <Select
                value={tipo}
                onChange={handleChange}
                >
                    {
                        categorias.map(value=>
                        <MenuItem value={value.id}>{value.name}</MenuItem>    
                        )
                    }
                    
                </Select>
                </FormControl>
                <br/>
                <TextField className={classes.field} value={nome} onChange={e=>setNome(e.target.value)} label="Nome da receita"></TextField><br/>
                <TextareaAutosize placeholder='Descrição' className={classes.field} value={descricao} onChange={e=>setDescricao(e.target.value)}></TextareaAutosize><br/>
                <Button onClick={addReceita} color="primary">Atualizar Receita</Button>
                </Paper>
                }
            </Container>
        </div>
    );
};
const mapStateToProps = state=>({
    logged: state.logged,
    username: state.username,
    name: state.name,
    image:state.image,
    email:state.email,
    token:state.token,
    id: state.id
})

export default connect(mapStateToProps)(EditReceita);
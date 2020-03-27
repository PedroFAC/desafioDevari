import React from 'react';
import {TextField, Button, Container,TextareaAutosize, Select,MenuItem,makeStyles, Paper, InputLabel,FormControl} from '@material-ui/core'
import{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import api from '../services/api'

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

const AddReceita = (props) => {
    const history = useHistory()
    const [tipo,setTipo] = useState('')
    let [categorias, setCategorias] = useState([])
    const [loading,setLoading]=useState(true)
    const [nome,setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const handleChange = event => {
        setTipo(event.target.value);
      };
      const getCategories = async ()=>{
        if(loading){

          api.setHeaders({Authorization: 'Token '+props.token})
          const response  = await api.get('/api/v1/category/')
          categorias= response.data
          setCategorias(categorias)
          setLoading(false)
          console.log(props.id)
        }
          
      }
      const addReceita = async()=>{
        api.setHeaders({Authorization: 'Token '+props.token})
        const response = await api.post('/api/v1/recipe/',{title:nome, description: descricao, category:tipo, user: Number(props.id)})
        console.log(response.data)
        if(response.ok){
        setTipo('')
        setNome('')
        setDescricao('')
        history.push('/minhasReceitas')
        }
    }
    const classes=useStyles()
    return (
        <div  onLoad={getCategories()}>
            <Container  className={classes.root}>
                <Paper>
                <FormControl className={classes.select}>
                <InputLabel id="label" >Categoria</InputLabel>

                <Select
                value={tipo}
                onChange={handleChange}
                labelId="label"
                >
                    {
                        categorias.map(value=>
                        <MenuItem value={value.id}>{value.name}</MenuItem>    
                        )
                    }
                    
                </Select>
                </FormControl><br/>
                <TextField  className={classes.field} value={nome} onChange={e=>setNome(e.target.value)} label="Nome da receita"></TextField><br/>
                <TextareaAutosize placeholder='Descrição' className={classes.field} value={descricao} onChange={e=>setDescricao(e.target.value)}></TextareaAutosize><br/>
                <Button className={classes.button} onClick={addReceita} color="primary">Adicionar Receita</Button>
                </Paper>
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

export default connect(mapStateToProps)(AddReceita);
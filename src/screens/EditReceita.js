import React from 'react';
import {TextField, Button, Container,TextareaAutosize, Select,MenuItem} from '@material-ui/core'
import{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import api from '../services/api'

const EditReceita = (props) => {
    let {id} = useParams()
    const [tipo,setTipo] = useState('')
    let [categorias, setCategorias] = useState([])
    const [nome,setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const handleChange = event => {
        setTipo(event.target.value);
      };
      const getCategories = async ()=>{
          api.setHeaders({Authorization: 'Token '+props.token})
          const response  = await api.get('/api/v1/category/')
          categorias= response.data
          setCategorias(categorias)
          console.log(props.id)

          
      }
      const addReceita = async()=>{
        api.setHeaders({Authorization: 'Token '+props.token})
        const response = await api.put('/api/v1/recipe/'+id+'/',{title:nome, description: descricao, category:tipo, user: Number(props.id)})
        console.log(response.data)
        if(response.ok){
        setTipo('')
        setNome('')
        setDescricao('')
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
    useEffect(()=>getCategories(),[])
    return (
        <div>
            <Container>
                
                <h1>{id}</h1>
                <Select
                value={tipo}
                onChange={handleChange}
                >
                    {
                        categorias.map(value=>
                        <MenuItem value={value.id}>{value.name}</MenuItem>    
                        )
                    }
                    
                </Select><br/>
                <TextField value={nome} onChange={e=>setNome(e.target.value)} label="Nome da receita"></TextField><br/>
                <TextareaAutosize value={descricao} onChange={e=>setDescricao(e.target.value)}></TextareaAutosize><br/>
                <Button onClick={addReceita}>Adicionar Receita</Button>
                <Button onClick={getReceita}>Get</Button>
            </Container>
        </div>
    );
};
const mapStateToProps = state=>({
    logged: state.login.logged,
    username: state.login.username,
    name: state.login.name,
    image:state.login.image,
    email:state.login.email,
    token:state.login.token,
    id: state.login.id
})

export default connect(mapStateToProps)(EditReceita);
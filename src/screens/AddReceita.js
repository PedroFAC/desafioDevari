import React from 'react';
import {TextField, Button, Container,TextareaAutosize, Select,MenuItem} from '@material-ui/core'
import{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import api from '../services/api'

const AddReceita = (props) => {
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
        const response = await api.post('/api/v1/recipe/',{title:nome, description: descricao, category:tipo, user: Number(props.id)})
        console.log(response.data)
        if(response.ok){
        setTipo('')
        setNome('')
        setDescricao('')
        }
    }
    useEffect(()=>getCategories(),[])
    return (
        <div>
            <Container>
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

export default connect(mapStateToProps)(AddReceita);
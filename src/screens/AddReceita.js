import React from 'react';
import {TextField, Button, Container,TextareaAutosize, Select,MenuItem} from '@material-ui/core'
import{useState,useEffect} from 'react'


const AddReceita = () => {
    const [tipo,setTipo] = useState('')
    const handleChange = event => {
        setTipo(event.target.value);
      };
    
    return (
        <div>
            <Container>
                <Select
                value={tipo}
                onChange={handleChange}
                >
                    <MenuItem value="Pizza">Pizza</MenuItem>
                    <MenuItem value="Regional">Regional </MenuItem>
                    <MenuItem value="Sanduíche">Sanduíche</MenuItem>
                </Select><br/>
                <TextField label="Nome da receita"></TextField><br/>
                <TextareaAutosize></TextareaAutosize><br/>
                <Button>Adicionar Receita</Button>
            </Container>
        </div>
    );
};

export default AddReceita;
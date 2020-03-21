import React from 'react';
import ReceitaCard from '../components/ReceitaCard'
const Receitas = () => {
    const receitas= [
        {
          tipo:'Pizza',
          nome:'Calabresa',
          descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus at augue a sodales. Nullam ut sollicitudin ipsum. Ut et aliquet elit. Sed vitae pellentesque dolor. Proin risus sem, semper laoreet vestibulum vitae, tincidunt at purus. Donec fermentum ipsum sagittis quam imperdiet, quis ultrices urna viverra...',
        },
        {
          tipo:'Sanduíche',
          nome:'X-Salada',
          descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus at augue a sodales. Nullam ut sollicitudin ipsum. Ut et aliquet elit. Sed vitae pellentesque dolor. Proin risus sem, semper laoreet vestibulum vitae, tincidunt at purus. Donec fermentum ipsum sagittis quam imperdiet, quis ultrices urna viverra...',
        },
      ]
    return (
        <div>
            <ul>
      {
        receitas.map(
          value =>{
          return <li><ReceitaCard nome={value.nome} tipo = {value.tipo} descricao={value.descricao}/></li>
          })
      }
      </ul>
        </div>
    );
};

export default Receitas;
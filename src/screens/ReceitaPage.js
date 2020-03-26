import React , {useState,useEffect}from 'react';
import {Paper,makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
    root: {
      width: '60%',
      height:'60%'
    },
})


const ReceitaPage = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root} elevation ={2}>
                <h1>TESTE</h1>
            </Paper>
            
        </div>
    );
};

export default ReceitaPage;
import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

import useStyles from './styles';
const Form = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBotttom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Tipo</InputLabel>
                    <Select>
                      <MenuItem value="Income">Ganhos</MenuItem>  
                      <MenuItem value="Expense">Despesas</MenuItem>  
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Categoria</InputLabel>
                    <Select>
                        <MenuItem value="business">Negócios</MenuItem>
                        <MenuItem value="salary">Salário</MenuItem>                        
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Quantidade" fullWidth />                      
             </Grid>
             <Grid item xs={6}>
                <TextField type="date" label="Data" fullWidth />                      
             </Grid>
             <Button className={classes.button} variant="outlined" color="primary" fullWidth>Criar</Button>
            
        </Grid>
    )
}

export default Form

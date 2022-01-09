import './App.css';
import React, { useState } from "react"
import {Input,Box, Grid,TextField,Button, Typography} from '@mui/material';
import UnstyledButtonCustom from "./Component/button"
import { color, grid } from '@mui/system';

const ariaLabel = { 'aria-label': 'description' };


export default function App() {
  const [inputList, setInputList] = useState()
  return (
    <Grid container justify="center" alignItems="center">
      <Grid xs={4} alignItems="center" style={{textAlign:"center" ,border:"1px solid black", padding:"20px",borderRadius:"16px",marginTop:"20%", marginLeft:"20%"}} >
      <Grid item>
        <Typography variant='h5' color="primary">
          ToDo List App
        </Typography>
      </Grid>
      <Grid item >
      <TodoContainer/>
      </Grid>
      </Grid>
    </Grid>
  );
}


const TodoContainer = () =>{
  return(
    <Grid container  alignItems="center" justify="center">
      <Grid item xs={10}><TextField 
      id="standard-basic" 
      label="Add ToDo List" 
      variant="standard" 
      fullWidth 
      sx={{margin:"10px"}}>
      </TextField></Grid>
      <Grid item xs={2}><Button variant="text">
        <i style={{fontSize:"25px"}} class="fas fa-plus-square"></i>
      </Button></Grid>
      
      

    </Grid>
  )
} 


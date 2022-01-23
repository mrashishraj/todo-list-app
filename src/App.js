import './App.css';
import React, { useState } from "react"
import {Input,Box, Grid,TextField,Button, Typography} from '@mui/material';
import UnstyledButtonCustom from "./Component/button"
import { color, grid } from '@mui/system';
import listItem from './Component/listItem';

const ariaLabel = { 'aria-label': 'description' };


export default function App() {
  const [inputList, setInputList] = useState("Buy Apple")
  const [itemData, setitemData] = useState([])

  const handleOnChange = (event)=>{
    setInputList(event.target.value)
  }

  const handleSubmit = (event) =>{
    setitemData((preItem)=>{return[...preItem,inputList]})
    setInputList('')
  }
  return (
    <Grid container justify="center" alignItems="center">
      <Grid xs={4} alignItems="center" style={{textAlign:"center" ,border:"1px solid black", padding:"20px",borderRadius:"16px",marginTop:"20%", marginLeft:"40%"}} >
        <Grid item>
          <Typography variant='h5' color="primary">
            ToDo List App
          </Typography>
        </Grid>
        <Grid item xs={10}>
        <TextField 
          id="standard-basic" 
          label="Add ToDo List" 
          variant="standard" 
          fullWidth 
          sx={{margin:"10px"}}
          onChange={handleOnChange}
           />
      </Grid>
      <Grid item xs={2}>
        <Button variant="text" onClick={handleSubmit}>
          <i style={{fontSize:"25px"}} class="fas fa-plus-square"></i>
        </Button>
      </Grid>
      {/* <Grid item>
        <listItem />
      </Grid> */}
      </Grid>
    </Grid>
  );
}



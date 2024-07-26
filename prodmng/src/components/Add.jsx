import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'


const Add = () => {
        const [ counter, setCounter ]=useState(0);
        const [form,setForm]=useState({
          "title":'',
          "price":'',
          "category":'',
          "image":''
        })
        let showData=()=>{
          console.log(form);
        }
        // let valueAdd=()=>{
        //   setCounter(counter+1);
        // }
    
        function valueCap(e){
          //console.log(e)
          setForm({...form,[e.target.name]:e.target.value})
        }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          defaultValue="Product Name"
          name='title'
          value={form.title}
          onChange={valueCap}
        />
         <TextField
          required
          id="outlined-required"
          label="Image"
          defaultValue="Image"
          name='price'
          value={form.price}
          onChange={valueCap}
        />
         <TextField
          required
          id="outlined-required"
          label="Price"
          defaultValue="Price"
          name='category'
          value={form.category}
          onChange={valueCap}
        />
         <TextField
          required
          id="outlined-required"
          label="Category"
          defaultValue="Category"
          name='image'
          value={form.image}
          onChange={valueCap}
        />
        </div>
        <Button variant="contained" onClick={showData}>Submit</Button>
        </Box>
  )
}

export default Add
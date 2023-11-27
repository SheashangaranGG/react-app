import { Button, Paper } from '@mui/material'
import React from 'react'

const Forgot = () => {
  return (
    <div>
        <Paper variant='elevation' >
        <label>
            Enter email:
      <input type='email' />
      <br></br>
      <br></br>
      <Button variant='outlined' >enter</Button>
        </label>
        </Paper>
    </div>
  )
}

export default Forgot;

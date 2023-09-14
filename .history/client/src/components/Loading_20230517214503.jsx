import React from 'react'

import { CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <div sx={{position:"fixed",top:0,bottom:0,alignText:"center"}}>Loading
    <CircularProgress />
    
  )
}

export default Loading
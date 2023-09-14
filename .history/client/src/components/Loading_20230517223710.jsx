import React from 'react'

import { CircularProgress,Box } from '@mui/material'
import { useSelector } from 'react-redux'
const Loading = () => {
    const isLoading = useSelector((state)=>state.loading)
  return (
    <Box sx={{position: "absolute", top: 20, left: 0, right: 0, bottom: 0}}>
    {isLoading &&<CircularProgress />}
    </Box>
  )
}

export default Loading
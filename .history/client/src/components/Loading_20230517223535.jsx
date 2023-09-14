import React from 'react'

import { CircularProgress,Box } from '@mui/material'
import { useSelector } from 'react-redux'
const Loading = () => {
    const isLoading = useSelector((state))
  return (
    <Box sx={{position: "absolute", top: 20, left: 0, right: 0, bottom: 0}}>
    <CircularProgress />
    </Box>
  )
}

export default Loading
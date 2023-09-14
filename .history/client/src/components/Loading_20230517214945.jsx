import React from 'react'

import { CircularProgress,Box } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{position:"fixed"}}>
    <CircularProgress />
    </Box>
  )
}

export default Loading
import React from 'react'

import { CircularProgress,Box } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{position: "absolute", top: 10, left: 0, right: 0, bottom: 0}}>
    <CircularProgress />
    </Box>
  )
}

export default Loading
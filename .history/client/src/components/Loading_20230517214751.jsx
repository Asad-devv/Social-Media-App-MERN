import React from 'react'

import { CircularProgress,Box } from '@mui/material'

const Loading = () => {
  return (
    <div sx={{position:"sticky"}}>
    <CircularProgress />
    </div>
  )
}

export default Loading
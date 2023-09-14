import React from 'react'

import { CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <div sx={{position:"fixed"}}>
    <CircularProgress />
    </div>
  )
}

export default Loading
import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Section({children}) {
  return (
    <Box w={'80%'} m='auto' h='100%'>
        {children}
    </Box>
    )
}

    

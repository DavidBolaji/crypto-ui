import { Box } from '@chakra-ui/react'
import React from 'react'

const Container = ({ children }) => {
    return (
        <Box
            pt={'20px'}
        >
            {children}
        </Box>
    )
}

export default Container;
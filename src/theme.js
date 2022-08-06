// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'
import { m } from 'framer-motion'

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', 
        textTransform:'uppercase',
        borderRadius:'0',
        letterSpacing:'1px'
        // Normally, it is "semibold"
      },
     
      // 2. We can add a new button size or extend existing
      sizes: {
        lg: {
          
          fontSize: 'lg',
             py:'0.5rem',
             px: '2.2rem',
        },
        sm:{
            fontSize:'sm',
            py:'0.5rem', 
            px:'1.2rem'
        }
      },
      // 3. We can add a new visual variant
      variants: {

        'out-lined': {
         color:'#111',
          bg: 'transparent',
          border: '1px solid black',
          _hover:{
            bg:"#343232"
          }
          
        },
       
        // 5. We can add responsive variants
        solid: {
            color:'#fff',
            fontSize: 'md',
            bg:'#d87649',
            _hover:{
            bg:'#343232'
            }
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'solid', // default is solid
// default is gray
      },
    },
  },
})

export default theme
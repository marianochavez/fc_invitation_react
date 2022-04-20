import { extendTheme } from '@chakra-ui/react'
import '@fontsource/montserrat'
import '@fontsource/roboto'
import '@fontsource/square-peg'

const theme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Square Peg'
  },
  styles: {
    body: {
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.05em'
    }
  }
})

export default theme

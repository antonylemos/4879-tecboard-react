import { createTheme } from '@mui/material/styles'

const commonTypography = {
  fontFamily: 'Orbitron, Arial, sans-serif',
  h1: {
    fontSize: '48px',
    lineHeight: '60px',
    fontWeight: 500,
  },
}

const buttonOverrides = {
  root: {
    backgroundColor: '#17D9B1',
    color: '#212121',
    fontFamily: 'Work Sans, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    padding: '8px 16px',
    borderRadius: '8px',
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: '#12c4a0',
    },
  },
}

const outlinedInputOverrides = {
  root: {
    height: '36px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#33353F',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#17D9B1',
    },
  },
  input: {
    height: '36px',
    padding: '0 14px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: '#fff',
    '&::placeholder': {
      color: '#33353F',
      opacity: 1,
      fontSize: '16px',
    },
  },
}

const selectOverrides = {
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#33353F',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#17D9B1',
      borderWidth: '2px',
    },
  },
  select: {
    '&[aria-expanded="false"]': {
      color: '#fff',
      fontSize: '16px',
    },
  },
}

export const darkTheme = createTheme({
  typography: commonTypography,
  components: {
    MuiButton: { styleOverrides: buttonOverrides },
    MuiTypography: {
      styleOverrides: {
        root: { color: '#fff' },
      },
    },
    MuiOutlinedInput: { styleOverrides: outlinedInputOverrides },
    MuiSelect: { styleOverrides: selectOverrides },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-focused': { color: '#fff' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          border: 'none',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    background: { default: '#06151A', paper: '#212121' },
    text: { primary: '#fff', secondary: '#33353F' },
    primary: { main: '#17D9B1' },
  },
})

export const lightTheme = createTheme({
  typography: commonTypography,
  components: {
    MuiButton: { styleOverrides: buttonOverrides },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: 'none',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    background: { default: '#f0f4f8', paper: '#ffffff' },
    text: { primary: '#212121', secondary: '#666' },
    primary: { main: '#17D9B1' },
  },
})

export default darkTheme

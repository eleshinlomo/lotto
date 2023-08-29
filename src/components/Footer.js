import React from 'react'
import { Grid, Typography, Button, Box,createTheme, ThemeProvider, Container } from '@mui/material'
import {Link} from 'react-router-dom'


const Footer = () => {

  function Copyright() {
    return (
      <>
      <Box sx={{textAlign: 'center'}}>

      <Box sx={{}}>
      <Typography>Built with love by </Typography>
      <Typography variant="body2" component='a' color="text.secondary" align="center" sx={{mr:2}}>
          
        
          <a href='https://myafros.com'> My Afros</a> 
       
        </Typography>
        </Box>
        <Box sx={{}}>
       
        <Typography>
        {'Copyright © '} {new Date().getFullYear()}{' '}
        Bigwalestyle.
        </Typography>
      
        
        </Box>
        </Box>
        </>
      
    );
  }


  const footers = [
    {
      title: 'My Afros',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy', 'Terms of use'],
    },
  ];

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });
  return (
    
    <div>
    <ThemeProvider theme={theme}>
       
     {/* Footer */}
     <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}

        </ThemeProvider>
    </div>
  )
}

export default Footer
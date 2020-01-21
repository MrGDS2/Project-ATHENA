import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import '../Home/home.css';

const homePage = () => (


  <Container maxWidth="sm">
  <Typography component="div" 
    style={{
       backgroundColor: '#FFBBBB', 
       height: '50vh',
       marginTop: '25%' 
       }} >
  <h1 className="home">Athena</h1>
  </Typography>
</Container>

)



export default homePage;
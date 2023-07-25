import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const circularImages = [
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg",
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg",
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg"
];

const rectangularImages = [
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg",
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg",
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg"
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black color
    },
  },
});

export default function Album() {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    // Implement logic to change the language here
    console.log(selectedLanguage);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ width: "50px", height: "auto" }} component="img" src="https://www.tracthai.com/_next/static/media/logonew.10e8c496.png?fbclid=IwAR1mKOL36ADiap6Y1zfBrUtf1bosYhyI-zyz_v8Tm2LXzyUcR4MDOEDY-qA" />
          <Typography variant="h6" color="inherit" noWrap>
          </Typography>

          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Articles</Button>
          <Button color="inherit">Contact Us</Button>

          {/* Language Selector */}
          <select onChange={handleLanguageChange} style={{ marginLeft: 'auto', color: '#000000' }}>
            <option value="TH">TH</option>
            <option value="EN">EN</option>
          </select>
        </Toolbar>
      </AppBar>

      <main>
        <Container maxWidth={false} sx={{ bgcolor: '#ff0000', color: 'white' }}>
          <Typography component="h1" variant="h1" align="center" gutterBottom>
            TRAC
          </Typography>
          <Typography variant="h4" align="center" paragraph>
            THE RECOVERY ADVISOR COMPANY LIMITED
          </Typography>
          <Box sx={{ pt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              {/* Add any additional content here */}
            </Grid>
          </Box>
        </Container>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Render circular images */}
          <Typography component="h3" variant="h3" align="center" paragraph>
            SOLUTION
          </Typography>
          <Grid container spacing={4}>
            {circularImages.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: '50%', height: 150, width: 150, paddingTop: '1%' }}
                    image={image}
                    alt={`Circular Image ${index + 1}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      Details.................................
                      ............................................
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Solution2 Section */}
          <Typography component="h3" variant="h3" align="center" paragraph>
            BLOG
          </Typography>
          {/* Render rectangular images */}
          <Grid container spacing={4}>
            {rectangularImages.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{ pt: '1%', borderRadius: '10%'}}
                    image={image}
                    alt={`Rectangular Image ${index + 1}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      Details.................................
                      ...............................................
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button variant="contained" color="success">READ MORE</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: '#000000', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="#ffffff" component="p">
          Copyright 2023 The Recover Advisor Company Limited
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

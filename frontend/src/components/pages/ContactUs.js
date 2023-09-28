import React from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import person1 from './person1.jpg'
import person4 from './person4.jpg'
import person3 from './person3.jpg'
import CallIcon from '@mui/icons-material/Call';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
           <CardMedia sx={{ height: 200 }}
            image={person1}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dr. K. K. Sangle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Head and Chief Hostel Rector
            </Typography>
          </CardContent>
          <CardActions>
            <a href ="mailto:dean_ap@vjti.ac.in">
            <Button size="small">Mail</Button>
            </a>
            {/* <a href="#">
            <Button size="small">Contact</Button>
            </a> */}
            <div>
              <CallIcon/>+91 1234567890
            </div>
           
          </CardActions>
        </Card>

        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
           <CardMedia
            sx={{ height: 200 }}
            image={person4}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ms. Prachi 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hostel Rector
            </Typography>
          </CardContent>
          <CardActions>
            <a href ="mailto:araina_b21@it.vjti.ac.in">
            <Button size="small">Mail</Button>
            </a>
            {/* <a href="#">
            <Button size="small">Contact</Button>
            </a> */}
             <div>
              <CallIcon/>+91 1234567890
            </div>
           
          </CardActions>
        </Card>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
           <CardMedia
            sx={{ height: 200 }}
            image={person3}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ms. Twinkle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hostel Rector
            </Typography>
          </CardContent>
          <CardActions>
            <a href ="devayanichandane@gmail.com">
            <Button size="small">Mail</Button>
            </a>
            {/* <a href="#">
            <Button size="small">Contact</Button>
            </a> */}
            <div>
             <CallIcon/><span>+91 1234567890</span>
            </div>
           
          </CardActions>
        </Card>
      </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function ContactUs() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
import React, { useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from  './styles';
import { getPosts } from './actions/posts.js';
import memory_bank from './images/memory_bank.png'

const App = () => {
    const [currentId, setcurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

  return (
    <Container maxidth = 'lg'>
        <AppBar className= {classes.appBar} position='static' color='inherit'>
            <Typography className = {classes.heading} variant = "h2" align = 'center'>Memory Bank</Typography>
            <img className={classes.image} src={memory_bank} alt="memories" height="60"/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent = "space-between" alignItems = "stretch" spacing={3}>
                    <Grid item xs = {12} sm={7}>
                        <Posts setCurrentId = {setcurrentId} />
                    </Grid>
                    <Grid item xs = {12} sm={4}>
                        <Form currentId = {currentId} setCurrentId = {setcurrentId} />
                    </Grid>
                </Grid>
            </Container>

        </Grow>
    </Container>
  );
}

export default App;

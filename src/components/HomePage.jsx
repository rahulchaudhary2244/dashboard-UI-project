import { Grid, Typography, Box, Stack, Paper } from '@mui/material';
import React from 'react';
import HexagonIcon from '@mui/icons-material/Hexagon';
import { experimentalStyled as styled } from '@mui/material/styles';
import axios from 'axios';

const getApplicationLogs = async () => {
    const response = await axios.get(
        'https://api.coindesk.com/v1/bpi/currentprice.json'
    );
    console.log(response.data);
};

const getApplicationData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push(
            <Grid item xs={6} sm={4} key={i}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="subtitle2">ESB</Typography>
                    <HexagonIcon
                        sx={{ color: 'red' }}
                        onClick={() => {
                            getApplicationLogs();
                        }}
                    />
                </Stack>
            </Grid>
        );
    }
    return data;
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HomePage = () => {
    return (
        <>
            <Box className="inner-container">
                <Typography variant="subtitle2">
                    Application Services
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {getApplicationData()}
                </Grid>
            </Box>
        </>
    );
};

export default HomePage;

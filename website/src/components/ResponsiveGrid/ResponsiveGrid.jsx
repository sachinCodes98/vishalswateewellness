import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ImgMediaCard, { Card } from '../MediaCard/ImgMediaCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({data}) {

  return (
    <Box sx={{ flexGrow: 1, pt:10 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data && data.map((el, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <ImgMediaCard elem={el}></ImgMediaCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
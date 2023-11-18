import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const MyCard = styled(Card)({
  backgroundColor: '#e0e0e0', // Light background color
  color: '#222', // Dark font color
  width: '100px',
  minWidth: '270px',
  margin: '0rem',
  marginTop: '0.5rem',
  marginBottom: '0rem',
  transform: 'scale(0.9)',
  marginLeft: '1rem',
  height: 'auto',
  borderRadius: '10px',
  transition: 'background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease',

  '&:hover': {
    backgroundColor: '#4CAF50', // Green hover color
    cursor: 'pointer',
    transform: 'scale(1.02)',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    color: '#ffffff', // Light font color on hover
    '& h2': {
      fontWeight: 'bold',
    },
  },

  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',

  '& h2': {
    transition: 'color 0.2s ease, font-weight 0.2s ease',
    color: '#222', // Dark font color
    fontSize: '1.5rem',
    fontWeight: '300',
    margin: '0',
  },
});

const Heading = styled('h3')({
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 530,
  fontSize: '1.2rem',
  marginBottom: '0.1rem',
});

const ContentText = styled(Typography)({
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: '1rem',
  fontWeight: 300,
});

export default function BasicCard(props) {
  const { id, title } = props;

  return (
    <MyCard>
      <CardContent>
        <Heading>{id}</Heading>
        <ContentText variant="body2">{title}</ContentText>
      </CardContent>
    </MyCard>
  );
}

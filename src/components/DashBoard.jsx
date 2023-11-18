import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Card from './Card';
import { useState } from 'react';
// import { PriorityHigh, PriorityMedium, PriorityLow, PriorityNoPriority, Person } from '@mui/icons-material';


const ParBox = styled(Box)({
  display: 'flex',
  justifyContent: 'left',
  width: '100%',
  flexWrap: 'wrap',
});

const IndBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Open Sans, Arial, sans-serif',
});

const Heading = styled('h2')({
  textAlign: 'left',
  color: '#222222',
  fontSize: '1.2rem',
  paddingBottom: '0rem',
  paddingTop: '2.5rem',
  paddingLeft: '2rem',
  margin: '0', // Reset default margin
  display: 'flex', // Add display: 'flex'
  alignItems: 'center', // Align items to center
});

const IconWrapper = styled('span')({
  marginRight: '0.5rem',
});

const Dashboard = (props) => {
  const { finalData } = props;

  const iconMap = {
    // High: <AccountBalance />,
    // Low: <Assignment />,
    // Add more icons as needed
  };

  return (
    <div>
      <ParBox>
        {finalData?.map((ele, ind) => (
          <IndBox key={ind}>
            <Heading>
              <IconWrapper>{iconMap[ele.title]}</IconWrapper>
              {ele.title}
            </Heading>
            {ele.value?.map((childEle, ind) => (
              <Card key={ind} title={childEle.title} id={childEle.id} />
            ))}
          </IndBox>
        ))}
      </ParBox>
    </div>
  );
};

export default Dashboard;

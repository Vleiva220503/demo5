import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Sidebar, DashboardContent } from '../components/layout';

const HomePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Dashboard');

  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>
          <Sidebar selectedOption={selectedOption} onSelectOption={setSelectedOption} />
        </Grid>
        <Grid item xs={9}>
          <DashboardContent
            totalContracts={40}
            activeContracts={30}
            expiringContracts={5}
            expiredContracts={5}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
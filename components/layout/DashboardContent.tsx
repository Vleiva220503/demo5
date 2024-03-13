import React from "react";
import { Box, CardContent, Typography, IconButton, Grid } from "@mui/material";
import OwlIcon from "@mui/icons-material/Nightlight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CheckIcon from '@mui/icons-material/Check';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomCard from "./CustomCard";
import AssignmentIcon from '@mui/icons-material/Assignment';

interface DashboardContentProps {
  totalContracts: number;
  activeContracts: number;
  expiringContracts: number;
  expiredContracts: number;
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  totalContracts,
  activeContracts,
  expiringContracts,
  expiredContracts,
}) => {
  const cardData = [
    {
      title: "Total de Contratos",
      icon: <AssignmentIcon fontSize="small" />,
      number: totalContracts,
      onClick: () => console.log("Mostrar más"),
    },
    {
      title: "Contratos Activos",
      icon: <CheckIcon fontSize="small" style={{ color: 'green' }} />,
      number: activeContracts,
      onClick: () => console.log("Mostrar más"),
    },
    {
      title: "Contratos por Vencer",
      icon: <ScheduleIcon fontSize="small" />,
      number: expiringContracts,
      onClick: () => console.log("Mostrar más"),
    },
    {
      title: "Contratos Vencidos",
      icon: <NotificationsIcon fontSize="small" style={{color: 'red'}} />,
      number: expiredContracts,
      onClick: () => console.log("Mostrar más"),
    },
  ];

  return (
    <Box>
      {/* Dashboard */}
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "-22vw",
          marginRight: "-11vw",
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Dashboard
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <OwlIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Grid>

      {/* Cards */}
      <Grid container spacing={4}>
        {cardData.map((data, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CustomCard
              icon={data.icon}
              number={data.number}
              onClick={data.onClick}
              title={data.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardContent;

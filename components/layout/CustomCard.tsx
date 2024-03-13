import React from "react";
import { CardContent, Typography, IconButton, Box, Card } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CustomCardProps {
  title: string;
  icon: React.ReactNode;
  number: number;
  onClick: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  icon,
  number,
  onClick,
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {icon}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginLeft: "8px",
                }}
              >
                {number}
              </Typography>
            </Box>
            <IconButton onClick={onClick} sx={{ padding: "0" }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

import { Box, Typography } from "@mui/material";
import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <Box>
      <Typography variant="h1">{props.title}</Typography>
    </Box>
  );
};

export default Title;

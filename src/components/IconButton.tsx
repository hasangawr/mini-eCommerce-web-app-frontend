import { Button, Icon } from "@mui/material";
import React from "react";

interface IconProp {
  image: string;
}

const IconButton: React.FC<IconProp> = (props) => {
  return (
    <Button>
      <Icon>
        <img
          src={props.image}
          style={{ display: "flex", height: "inherit", width: "inherit" }}
        />
      </Icon>
    </Button>
  );
};

export default IconButton;

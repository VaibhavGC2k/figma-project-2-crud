import React from 'react'
import { Button } from "@mui/material";
import CustomTypo from "./CustomTypo";

export default function CustomButton({
  onClick,
  children,
  ...rest
}) {
  return (
    <>
      <Button
        onClick={onClick}
        sx={{
        
          borderRadius: "4px",
          height: "44px",
          maxWidth: "415px",
          maxHeight: "44px",
          color: "#FFFFFF",
          textTransform: "capitalize",
          '&:hover': { backgroundColor: '#FEAF00' },
          '&:active': { backgroundColor: '#FEAF00' },
          ...rest
        }}
      >
        {children}
      </Button>
    </>
  )
}

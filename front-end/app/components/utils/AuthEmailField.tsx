import React, { FC, useRef } from "react";
import TextField from "@mui/material/TextField";

interface AuthEmailFieldProps {
  label?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const AuthEmailField: FC<AuthEmailFieldProps> = ({ label = "Email address*", inputRef }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      style={{ width: "320px" }}
      inputRef={inputRef}
      sx={{
        // Change the border color and thickness
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#c2c8d0", // Default border color
            borderWidth: "1px", // Thinner border
            height: "57px",
            borderRadius: "6px",
          },
          "&:hover fieldset": {
            borderColor: "darkgreen", // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#10a37f", // Border color when focused
            borderWidth: "1px", // Keep the focused border thinner
          },
        },
        // Change the input text color
        "& .MuiInputBase-input": {
          color: "#10a37f", // Input text color
        },
        // Change the label color and transform only when NOT focused
        "& .MuiInputLabel-root": {
          color: "#7D7D7D", // Default label color
          transform: "translateX(22px) translateY(14px)", // Move label
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#10a37f", // Focused label color
          fontSize: "18px",
          backgroundColor: "white",
          width: "136px",
          transform: "translate(11px, -9px) scale(0.75)", // Default MUI focused state
        },
        "& .MuiInputLabel-shrink": {
          transform: "translate(14px, -6px) scale(0.75)", // Ensure proper focus shrink behavior
        },
      }}
    />
  );
};

export default AuthEmailField;

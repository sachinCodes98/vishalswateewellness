import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const theme1 = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "white",
          },
          "&:hover": {
            "& .MuiInputBase-input": {
              color: "white",
            },
          },
          "&.Mui-focused": {
            "& .MuiInputBase-input": {
              color: "white",
            },
          },
        },
      },
    },
  },
});

const ContactForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <ThemeProvider theme={theme1}>
        <TextField
          id="standard-basic"
          label="Full Name"
          variant="standard"
          InputProps={{ style: { color: "white" } }}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          InputProps={{ style: { color: "white" } }}
        />
        <TextField
          id="standard-basic"
          label="Phone"
          variant="standard"
          InputProps={{ style: { color: "white" } }}
        />
        <TextField
          id="standard-multiline-static"
          label="Type your message here"
          multiline
          rows={4}
          variant="standard"
        />{" "}
        <Button color="primary" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </ThemeProvider>
    </Box>
  );
};

export default ContactForm;

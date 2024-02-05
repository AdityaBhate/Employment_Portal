import { TextField, Grid, Paper, Chip, Button } from "@mui/material";
import React from "react";

function ClientRegister() {
  return (
   <>
    <div className="flex items-center justify-center h-full">
       <div className="shadow-md py-6 px-4 w-[85%]">
      <span className="text-white font-semibold text-xl p-2 bg-black rounded">
        Client Registration Form
      </span>
      <div className="my-4">
        <Chip label="Personal Details" />
      </div>
      <Grid className="m-2 mx-4" container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
          className="w-[90%]"
            id="client-name"
            required
            label="Client Name"
            placeholder="Enter your Full Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            className="w-[90%]"
            id="father-name"
            required
            label="Father's Name"
            placeholder="Enter your Father's Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            className="w-[90%]"
            id="company-name"
            label="Company Name"
            placeholder="Enter your Company Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            className="w-[90%]"
            id="labour-category"
            required
            label="Labour Category"
            placeholder="Mention Labour Category"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            className="w-[90%]"
            required
            
            label="Mobile Number"
            placeholder="Enter your Mobile Number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            className="w-[90%]"
            required
            type="email"
            label="Email Id"
            placeholder="Enter your email address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          className="w-[90%]"
            required
            multiline
            rows={3}
            label="Residential Address"
            placeholder="Enter your complete address"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <div className="flex justify-center my-3">
        <Button className="bg-green-400 text-black" variant="contained" color="success">Submit</Button>
      </div>
    </div>
    </div>
   </>
  );
}

export default ClientRegister;

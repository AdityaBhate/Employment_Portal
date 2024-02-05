import { TextField, Grid, Paper, Chip, Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function LabourRegister() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="shadow-md py-6 px-4 w-[85%]">
          <span className="text-white font-semibold text-xl p-2 bg-black rounded">
            Labour Registration Form
          </span>
          <div className="my-4">
            <Chip label="Personal Details" />
          </div>
          <Grid className="m-2 mx-4" container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Labour Name"
                placeholder="Enter Full Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                id="father-name"
                required
                label="Father's Name"
                placeholder="Enter Father's Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl className="w-[90%]">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={gender}
                  label="Gender"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Date of Birth"
                placeholder="DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                label="Caste"
                placeholder="Enter your caste"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Mobile Number"
                placeholder="Enter your mobile number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Aadhar Number"
                placeholder="Enter your aadhar number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="District Name"
                placeholder="Enter your District Name"
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
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                label="Education"
                placeholder="Enter your education"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Labour Work Efficiency"
                placeholder="Work Efficiency"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="State Name(where labour is working)"
                placeholder="Maharashtra"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <div className="my-4">
            <Chip label="Labour Bank Details" />
          </div>
          <Grid className="m-2 mx-4" container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Bank Name"
                placeholder="State Bank of India"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Branch Name(Bank)"
                placeholder="Enter Branch Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Account Name(Labour)"
                placeholder="Enter account name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="IFSC Code"
                placeholder="Enter IFSC Code"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="w-[90%]"
                required
                label="Account Number"
                placeholder="Enter Account Number"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <div className="flex justify-center my-3">
            <Button
              className="bg-green-400 text-black"
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabourRegister;

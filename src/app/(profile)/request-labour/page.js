//! Request labour page
"use client";

import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import labourCategory from "../../../utils/labour-category";
import indianStates from "../../../utils/states";

function RequestLabourPage() {
  return (
    <>
      <div className="items-center h-full">
        <div className="shadow-md mx-4 md:mx-28 items-center p-2 rounded">
          <div className="mx-4 md:mx-44">
            <div className="flex flex-col md:flex-row justify-between m-4">
              <h3 className="text-black font-semibold text-xl mb-2 md:mb-0">
                Request Labours
              </h3>
              <Image
                src="/emp-logo.png"
                alt="logo"
                width={70}
                height={70}
                className="rounded-xl"
              />
            </div>
            <p className="m-4">Request Labour for your work</p>
            <div className="bg-gray-200 rounded">
              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-4 m-2">
                  <TextField
                    className="w-full md:w-[90%]"
                    required
                    //   value={clientName}
                    //   onChange={(e) => setClientName(e.target.value)}
                    label="Number of Labours"
                    type="number"
                    placeholder="Enter number of labours"
                    variant="outlined"
                  />
                  <TextField
                    className="w-full md:w-[90%]"
                    required
                    //   value={clientName}
                    //   onChange={(e) => setClientName(e.target.value)}
                    label="Mobile Number"
                    placeholder="Enter mobile number"
                    type="number"
                    variant="outlined"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 m-2">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Type of Labours
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //   value={age}
                      label="Type of Labours"
                      //   onChange={handleChange}
                    >
                      {labourCategory.map((category, i) => {
                        return (
                          <MenuItem key={i} value={category}>
                            {category}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //   value={age}
                      label="State"
                      //   onChange={handleChange}
                    >
                      {indianStates.map((state, i) => {
                        return (
                          <MenuItem key={i} value={state}>
                            {state}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col md:flex-row gap-4 m-2">
                  <TextField
                    className="w-full md:w-[90%]"
                    required
                    //   value={clientName}
                    //   onChange={(e) => setClientName(e.target.value)}
                    label="Address"
					multiline
					maxRows={4}
                    placeholder="Enter your Address"
                    variant="outlined"
                  />
                  <TextField
                    className="w-full md:w-[90%]"
                    required
                    //   value={clientName}
                    //   onChange={(e) => setClientName(e.target.value)}
                    label="When you want"
					type="date"
					multiline
					maxRows={4}
                    placeholder="Enter Date"
                    variant="outlined"
                  />
                </div>
              </div>
            </div>
            <div className="text-center m-4">
              <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-3xl font-semibold">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestLabourPage;

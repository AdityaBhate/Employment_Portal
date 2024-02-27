//! Labour profile page
//! Print button here!
//! if broker, show broker page button
"use client";
import React, { useState } from "react";

function LabourPage() {
  const [profileDetails, setProfileDetails] = useState({
    personalDetails: {
      name: "Vinod",
      fatherName: "Manoj",
      gender: "male",
      DOB: "30/02/2024",
      caste: "Hindu",
      mobile: "9876543210",
      aadharNumber: "1234567899",
      labourType: "Carpenter",
      Address: "Room Xyz, Xyz Apt, Xyz locality",
      state: "Maharashtra",
    },
    bankDetails: {
      bankName: "State Bank of India",
      branchName: "Pune",
      accountName: "Vinod Kumar",
      accountNumber: "123456789",
      ifscCode: "SBIN0002356",
    },
  });
  return (
    <>
      <div className="items-center h-full">
        <div className="shadow-md mx-4 md:mx-28 items-center p-2 rounded">
          <div className="mx-4 md:mx-44">
            <div className="flex flex-col md:flex-row justify-between m-4">
              <h3 className="text-black font-semibold text-xl mb-2 md:mb-0">
                Profile:
              </h3>
              <Image
                src="/emp-logo.png"
                alt="logo"
                width={70}
                height={70}
                className="rounded-xl"
              />
            </div>
            <p className="m-4">Personal Details</p>
            <div className="bg-gray-200 rounded">
              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-4 m-2">
                  <TextField
                    className="w-full md:w-[90%]"
                    required
                    value={profileDetails?.personalDetails?.name}
                    onChange={(e) => {
                      setProfileDetails({
                        ...profileDetails.personalDetails,
                        name: e.target.value,
                      });
                    }}
                    label="Name"
                    placeholder="Enter Name"
                    variant="outlined"
                  />
                  <TextField
                    className="w-full md:w-[90%]"
                    required
                    value={profileDetails?.personalDetails?.fatherName}
                    onChange={(e) => {
                      setProfileDetails({
                        ...profileDetails.personalDetails,
                        fatherName: e.target.value,
                      });
                    }}
                    label="Father Name"
                    placeholder="Enter father's name"
                    variant="outlined"
                  />
                </div>
              </div>
            </div>
            <p className="m-4">Bank Details</p>
            <div className="bg-gray-200 rounded my-4">
              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-4 m-2">
                  
                  {/* DETAILS HERE  */}
                </div>
              </div>
            </div>
            <div className="text-center m-4">
              <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-3xl font-semibold">
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabourPage;

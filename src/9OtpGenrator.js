import React, { useState } from "react";

function OTPGenerator() {
  const [otp, setOtp] = useState("");

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtp(otp.toString());
  };

  return (
    <main>
      <h3 className="accordion-heading"> OTP Generater</h3>
      <button onClick={generateOTP}>Generate OTP</button>
      <p>{otp}</p>
    </main>
  );
}

export default OTPGenerator;

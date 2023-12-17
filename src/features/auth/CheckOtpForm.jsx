import { useState } from "react";
import OTPInput from "react-otp-input";
const CheckOtpForm = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="h-[calc(100vh_-_11.25rem)] pt-16">
      <form className="flex flex-col w-fit mx-auto space-y-11">
        <p className="font-bold text-secondary-0 flex justify-end text-xl">
          Enter otp code
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="text-secondary-0">-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-secondary-0))",
            borderRadius: "0.5rem",
            backgroundColor: "transparent",
            color: "rgb(var(--color-secondary-0))",
            outline: "none",
          }}
        />
        <button className="bg-success p-2 rounded-md text-secondary-0">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CheckOtpForm;

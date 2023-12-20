import { useState } from "react";
import OTPInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOtpForm = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phone: phoneNumber, otp_code: otp });
      // toast.success(msg)
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.request?.response);
    }
  };

  return (
    <div className="h-[calc(100vh_-_11.25rem)] pt-16">
      <form
        onSubmit={checkOtpHandler}
        className="flex flex-col w-fit mx-auto space-y-11"
      >
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
        <button className="btn btn--primary">Confirm</button>
      </form>
    </div>
  );
};

export default CheckOtpForm;

import { useState } from "react";
import { SendOtpForm } from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp, registerUser } from "../../services/authService";
import { toast } from "react-hot-toast";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("09115847699");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const { isPending: isSendingOtp, mutateAsync: mutateAsyncRegister } =
    useMutation({
      mutationFn: registerUser,
    });

  const { mutateAsync: mutateAsyncGetOtp, data: otpResponse } = useMutation({
    mutationFn: getOtp,
  });

  const getOtpHandler = async () => {
    try {
      const { data } = await mutateAsyncGetOtp({
        phone: phoneNumber,
      });
      console.log(data.code);
      toast.success(data.detail);
    } catch (error) {
      console.log(error);
    }
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsyncRegister({
        first_name: firstName,
        last_name: lastName,
        phone: phoneNumber,
        password: password,
      });
      getOtpHandler();
      console.log(res);
      setStep(2);
    } catch (error) {
      console.log(error);
      toast.error(error?.request?.response);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onSubmit={sendOtpHandler}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            password={password}
            setPassword={setPassword}
            isSendingOtp={isSendingOtp}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            onReSendOtp={getOtpHandler}
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            otpResponse={otpResponse}
          />
        );

      default:
        return null;
    }
  };
  return <div>{renderStep()}</div>;
};

export default AuthContainer;

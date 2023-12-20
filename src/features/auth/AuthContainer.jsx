import { useState } from "react";
import { SendOtpForm } from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return <CheckOtpForm phoneNumber={phoneNumber} />;

      default:
        return null;
    }
  };
  return <div>{renderStep()}</div>;
};

export default AuthContainer;

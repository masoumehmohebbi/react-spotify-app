import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FiEdit3 } from "react-icons/fi";
import Loading from "../../ui/Loading";

const RESEND_TIME = 90;

const CheckOtpForm = ({ phoneNumber, onBack, onReSendOtp, otpResponse }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [time, setTime] = useState(RESEND_TIME);

  const { isPending, mutateAsync } = useMutation({
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

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const resendOtpHandler = () => {
    onReSendOtp();
    setTime(90);
  };

  return (
    <div className="h-[calc(100vh_-_11.25rem)] pt-7 w-fit mx-auto ">
      <div className="flex flex-col ltr:items-end pb-16 gap-y-6 text-secondary-0">
        <button>
          <HiArrowRight className="w-6 h-6 ltr:rotate-180" onClick={onBack} />
        </button>

        {otpResponse && (
          <p className="text-secondary-0 flex gap-x-2 items-center justify-center">
            <button onClick={onBack}>
              <FiEdit3 />
            </button>
            <span>{otpResponse?.data?.detail}</span>
          </p>
        )}

        {time > 0 ? (
          <div className="flex ltr:items-end gap-x-1 text-secondary-50">
            seconds to resend the code
            <span>{time}</span>
          </div>
        ) : (
          <button onClick={resendOtpHandler} className="text-secondary-50">
            Resend the otp code
          </button>
        )}
      </div>
      <form onSubmit={checkOtpHandler} className="flex flex-col space-y-11">
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

        {isPending ? (
          <Loading height="56px" />
        ) : (
          <button type="submit" className="btn btn--primary">
            Confirm
          </button>
        )}
      </form>
    </div>
  );
};

export default CheckOtpForm;

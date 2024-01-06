import { useState } from "react";
import { SendOtpForm } from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp, registerUser } from "../../services/authService";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const AuthContainer = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1);

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
        phone: getValues("phoneNumber"),
      });
      toast.success(data.detail);

      toast(data.code, {
        duration: 9000,
        position: "top-center",
        style: {
          position: "sticky",
          top: "0",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendOtpHandler = async (data) => {
    try {
      await mutateAsyncRegister({
        first_name: data.firstName,
        last_name: data.lastName,
        requested_phone: data.phoneNumber,
        password: data.password,
      });
      getOtpHandler();
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
            onSubmit={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
            register={register}
            phoneNumber={getValues("phoneNumber")}
            firstName={getValues("firstName")}
            lastName={getValues("lastName")}
            password={getValues("password")}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            onBack={() => setStep((s) => s - 1)}
            onReSendOtp={getOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            otpResponse={otpResponse}
            password={getValues("password")}
          />
        );

      default:
        return null;
    }
  };
  return <div>{renderStep()}</div>;
};

export default AuthContainer;

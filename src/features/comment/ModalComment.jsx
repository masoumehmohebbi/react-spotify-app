import { AiOutlineClose } from "react-icons/ai";
import { useOpenCommentModal } from "./OpenCommentModalContext";

export const ModalComment = () => {
  const { isOpen, setIsOpen } = useOpenCommentModal();

  if (!isOpen) return null;
  return (
    <div>
      <div className="w-full h-screen fixed top-0 z-50 opacity-70 bg-primary-900 modal-open"></div>
      <div className="flex items-center justify-center w-full h-screen absolute top-0 z-50 ">
        <div className="z-50 w-11/12 lg:w-1/2  bg-primary-700 fixed rounded ">
          <div className="w-full flex-col flex justify-between p-4 text-secondary-50 border-b border-b-secondary-200">
            <div className="flex justify-between w-full">
              <h4 className="text-xl font-bold">زبانی را انتخاب کنید</h4>
              <AiOutlineClose
                className="cursor-pointer p-2 rounded-full bg-primary-800 text-secondary-0 text-4xl "
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

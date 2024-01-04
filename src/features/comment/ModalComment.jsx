import { AiOutlineClose } from "react-icons/ai";
import { useOpenCommentModal } from "./OpenCommentModalContext";
import { sendComments } from "../../services/commentService";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import { useState } from "react";

export const ModalComment = () => {
  const { isOpen, setIsOpen } = useOpenCommentModal();
  const [userComment, setUserComment] = useState("");
  console.log(userComment);
  const { isPending, mutateAsync } = useMutation({
    mutationFn: sendComments,
  });
  const sendCommentHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({
        comment: userComment,
      });
      setUserComment("");
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;
  return (
    <div>
      <div className="w-full h-screen fixed top-0 z-50 opacity-70 bg-primary-900 modal-open"></div>
      <div className="flex items-center justify-center w-full h-screen absolute top-0 z-50 ">
        <div className="z-50 w-11/12 lg:w-1/2  bg-primary-700 fixed rounded ">
          <div className="w-full flex-col flex justify-between p-4 text-secondary-50 border-b border-b-secondary-200">
            <div className="flex justify-between w-full ">
              <h4 className="text-xl font-bold">دیدگاه شما</h4>
              <AiOutlineClose
                className="cursor-pointer p-2 rounded-full bg-primary-800 text-secondary-0 text-4xl "
                onClick={() => setIsOpen(false)}
              />
            </div>
            <span>نظر خودتان را در مورد آهنگ ها بنویسید</span>
          </div>
          <form
            onSubmit={sendCommentHandler}
            className="flex justify-center gap-y-6 items-center flex-col pb-7 px-5"
          >
            <textarea
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              name="text"
              id="text"
              dir="rtl"
              className="input__field text-secondary-0 !w-3/4 mt-2 min-h-[150px] leading-8 text-right"
            ></textarea>

            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-1/2">
                ثبت دیدگاه
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
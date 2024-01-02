import CommentSwiper from "./CommentSwiper";

const CommentsContainer = () => {
  return (
    <div className="pb-11">
      <hr className="border-primary-700 bg-opacity-10 border-spacing-y-11 mt-16" />
      <div className="flex justify-between items-center py-7 px-5">
        <h1 className="title">نظر کاربران</h1>
        <button className="btn--secondary">ثبت نظر</button>
      </div>
      {/* <Commens />; */}
      <CommentSwiper />
    </div>
  );
};

export default CommentsContainer;

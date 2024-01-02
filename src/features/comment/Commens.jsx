import useComments from "./useComments";

const Commens = () => {
  const { data } = useComments();
  const allComments = data?.data?.results;
  return (
    <>
      {allComments?.map((comment) => (
        <div key={comment.id} className="bg-red-100">
          {comment.comment}
        </div>
      ))}
    </>
  );
};

export default Commens;

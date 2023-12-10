import { ThreeDots } from "react-loader-spinner";
const Loading = ({ width = "75", height = "40", pageHeight = "auto" }) => {
  return (
    <div className={`w-full flex items-center justify-center h-${pageHeight}`}>
      <ThreeDots
        width={width}
        height={height}
        radius={9}
        color="rgb(var(--color-secondary-0))"
        visible={true}
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default Loading;

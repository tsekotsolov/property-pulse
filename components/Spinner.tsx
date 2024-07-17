"use client";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }: { loading: boolean }) => {
  return (
    <div className="h-dvh content-center">
      <ClipLoader
        color="#3b82f6"
        loading={loading}
        size={150}
        aria-label="Loading spinner"
        cssOverride={{
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default Spinner;

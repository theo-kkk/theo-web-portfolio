"use client";

import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <ThreeDots color="#000" width={50} height={50} />
    </div>
  );
}

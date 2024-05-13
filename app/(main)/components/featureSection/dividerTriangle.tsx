import React from "react";

function DividerTriangle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1280 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1434_3285)">
        <path d="M1280 170L0 0L0 170L640 170L1280 170Z" fill="#3F3D56" />
      </g>
      <defs>
        <clipPath id="clip0_1434_3285">
          <rect width="1280" height="170" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DividerTriangle;

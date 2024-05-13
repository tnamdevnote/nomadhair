function DividerWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1280 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1433_3273)">
        <path
          opacity="0.25"
          d="M1280 120L1280 73.71C1229.02 51.51 1169.5 41.54 1111.47 45.71C1036.42 51.08 966.048 79.02 890.88 83.21C812.117 87.57 733.504 66.3299 658.133 47.9499C584.245 29.9499 510.613 23.0699 434.773 34.8699C396.213 40.8699 360.267 52.7099 323.36 64.2099C224.544 94.9999 92.7999 134.29 -6.21701e-05 67.5299L-6.67572e-05 120L1280 120Z"
          fill="white"
        />
        <path
          opacity="0.5"
          d="M1280 120L1280 104.19C1266.13 83.08 1250.52 63.14 1229.13 47.95C1173.96 8.72999 1104 8.99998 1040.45 28.42C1007.22 38.57 976.352 54.49 944.8 68.22C901.152 87.22 854.421 114.22 805.248 117.89C766.571 120.74 729.621 108.47 700.075 86.33C666.187 60.9399 633.6 24.3299 589.536 13.3299C546.4 2.53994 502.763 20.0199 462.464 37.6099C422.165 55.1999 382.293 76.6099 337.749 80.6599C274.037 86.5099 216.917 57.7799 157.589 41.8199C125.376 33.1599 94.656 35.6499 64.6933 49.3199C40.768 60.2099 13.4933 76.2499 -6.48829e-05 98.5599L-6.67572e-05 120L1280 120Z"
          fill="white"
        />
        <g filter="url(#filter0_d_1433_3273)">
          <path
            d="M1280 120L1280 114.37C1120.07 61 944.971 48.68 772.448 77.43C726.581 85.07 682.603 97.5499 636.331 103.89C573.397 112.52 516.352 91.6499 459.733 68.4899C396.875 42.7799 334.933 24.7599 265.387 29.9999C173.088 36.9999 81.4293 75.7099 -6.63035e-05 114.81L-6.67572e-05 120L1280 120Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1433_3273"
          x="-4"
          y="29.0911"
          width="1288"
          height="98.9089"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1433_3273"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1433_3273"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1433_3273">
          <rect
            width="1280"
            height="120"
            fill="white"
            transform="translate(1280 120) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DividerWave;

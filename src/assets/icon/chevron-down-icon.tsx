import * as React from 'react';

const ChevronDownIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="-1 0 12 12"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1.707.293A1 1 0 0 0 .293 1.707l4 4a1 1 0 0 0 1.414 0l4-4A1 1 0 0 0 8.293.293L5 3.586zm0 6A1 1 0 0 0 .293 7.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L5 9.586z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default React.memo(ChevronDownIcon);

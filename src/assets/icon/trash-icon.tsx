import * as React from 'react';

const TrashIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="-2 0 24 24"
  >
    <path
      fill="#2d394a"
      fillRule="evenodd"
      d="M5 3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1H1a1 1 0 0 1-1-1 3 3 0 0 1 3-3zM2 9h16a1 1 0 0 1 1 1v11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V10a1 1 0 0 1 1-1m3 4.143v5.714C5 19.488 5.448 20 6 20s1-.512 1-1.143v-5.714C7 12.512 6.552 12 6 12s-1 .512-1 1.143m4 0v5.714C9 19.488 9.448 20 10 20s1-.512 1-1.143v-5.714c0-.631-.448-1.143-1-1.143s-1 .512-1 1.143m4 0v5.714c0 .631.448 1.143 1 1.143s1-.512 1-1.143v-5.714c0-.631-.448-1.143-1-1.143s-1 .512-1 1.143M8 2a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default React.memo(TrashIcon);

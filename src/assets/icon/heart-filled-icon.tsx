import * as React from 'react';

const HeartFilledIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#c70000"
      d="M2 9.137C2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137"
    ></path>
  </svg>
);

export default React.memo(HeartFilledIcon);

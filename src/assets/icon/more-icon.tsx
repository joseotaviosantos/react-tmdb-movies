import * as React from 'react';

const MoreIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="#fff"
    viewBox="0 0 24 24"
  >
    <g>
      <g>
        <g>
          <path d="M8 12a2 2 0 1 1-2-2 2 2 0 0 1 2 2m10-2a2 2 0 1 0 2 2 2 2 0 0 0-2-2m-6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2"></path>
        </g>
      </g>
    </g>
  </svg>
);

export default React.memo(MoreIcon);

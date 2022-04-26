import React from 'react';

function UploadIcon() {
  return (
    <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
      <path
        d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M80,128a80,80,0,1,1,144,48"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <polyline
        points="118.1 161.9 152 128 185.9 161.9"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <line
        x1="152"
        y1="208"
        x2="152"
        y2="128"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </svg>
  );
}

export default UploadIcon;

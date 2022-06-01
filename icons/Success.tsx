import React from 'react'

export const SuccessIcon = (props: object) => {
  return (
    <svg
      className="svg-icon"
      style={{
        width: '1.2rem',
        height: '1.2rem',
        verticalAlign: 'middle',
        fill: 'currentColor',
        overflow: 'hidden',
      }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm0 947.2C271.36 947.2 76.8 752.64 76.8 512S271.36 76.8 512 76.8 947.2 271.36 947.2 512 752.64 947.2 512 947.2zm266.24-578.56c0 10.24-5.12 20.48-10.24 25.6L481.28 680.96c-5.12 5.12-15.36 10.24-25.6 10.24s-20.48-5.12-25.6-10.24L266.24 517.12c-15.36-5.12-20.48-15.36-20.48-25.6 0-20.48 15.36-40.96 40.96-40.96 10.24 5.12 20.48 10.24 25.6 15.36l138.24 138.24 261.12-261.12c5.12-5.12 15.36-10.24 25.6-10.24 20.48-5.12 40.96 15.36 40.96 35.84z"
        fill="#11b166"
      />
    </svg>
  )
}

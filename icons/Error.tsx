import React from 'react'
export const ErrorIcon = (props: object) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '1.4rem',
        height: '1.78rem',
        verticalAlign: 'middle',
        fill: 'currentColor',
        overflow: 'hidden',
      }}
      {...props}
    >
      <path
        d="M11 16h2v2h-2zM13.516 10h-3L11 15h2z"
        style={{
          fill: '#d23',
          fillOpacity: 1,
        }}
      />
      <path
        d="M12.017 5.974 19.536 19H4.496l7.521-13.026m0-2.474c-.544 0-1.088.357-1.5 1.071L2.532 18.402C1.707 19.831 2.382 21 4.032 21H20c1.65 0 2.325-1.169 1.5-2.599L13.517 4.572c-.413-.715-.956-1.072-1.5-1.072z"
        style={{
          fill: '#d23',
          fillOpacity: 1,
        }}
      />
    </svg>
  )
}

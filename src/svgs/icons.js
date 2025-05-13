import * as React from "react"
export const SearchIcon = ({height, width, color, ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M13.898 12.441a6.77 6.77 0 1 0-1.456 1.456v.001c.03.042.065.082.102.12l4.011 4.01a1.042 1.042 0 1 0 1.473-1.473l-4.01-4.01a1.063 1.063 0 0 0-.12-.104Zm.269-4.004a5.73 5.73 0 1 1-11.459 0 5.73 5.73 0 0 1 11.459 0Z"
    />
  </svg>
)


export const NotificationIcon = ({height, width, color, hasFillOpacity = false, ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillOpacity={hasFillOpacity ? 0.8 : 1}
      d="m17.19 13.332-.19-.231c-.86-1.04-1.38-1.667-1.38-4.61 0-1.523-.365-2.773-1.083-3.71-.53-.693-1.246-1.218-2.19-1.607a.117.117 0 0 1-.031-.026C11.976 2.011 11.047 1.25 10 1.25c-1.048 0-1.977.761-2.316 1.897a.122.122 0 0 1-.032.025C5.45 4.08 4.38 5.818 4.38 8.49c0 2.944-.52 3.571-1.38 4.61l-.19.231a1.373 1.373 0 0 0-.182 1.47c.24.508.754.823 1.34.823h12.067c.583 0 1.093-.315 1.335-.82a1.373 1.373 0 0 0-.18-1.472ZM10 18.75a3.128 3.128 0 0 0 2.751-1.646.157.157 0 0 0-.138-.229H7.387a.156.156 0 0 0-.139.23A3.128 3.128 0 0 0 10 18.75Z"
    />
  </svg>
)
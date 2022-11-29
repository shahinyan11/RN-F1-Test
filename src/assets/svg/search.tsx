import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Sizes } from "../../constants/ratio";

function SearchSVG(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 502.173 502.173"
      xmlSpace="preserve"
      fill={'blue'}
      width={Sizes(50)}
      height={Sizes(100)}
      enableBackground="new 0 0 502.173 502.173"
      {...props}
    >
      <Path d="M494.336 443.646L316.402 265.713c20.399-31.421 30.023-68.955 27.189-106.632-3.084-40.985-20.808-79.581-49.907-108.681C261.167 17.884 217.984 0 172.023 0l-.668.001C125.149.176 81.837 18.409 49.398 51.342c-66.308 67.316-65.691 176.257 1.375 242.85 29.112 28.907 67.655 46.482 108.528 49.489 37.579 2.762 75.008-6.867 106.343-27.21l177.933 177.932c5.18 5.18 11.984 7.77 18.788 7.77s13.608-2.59 18.789-7.769l13.182-13.182c10.359-10.36 10.359-27.216 0-37.576zm-14.143 23.433l-13.182 13.182a6.578 6.578 0 01-9.292 0L273.914 296.456a9.982 9.982 0 00-7.074-2.929 9.968 9.968 0 00-5.858 1.898c-60.538 43.788-143.018 37.3-196.118-15.425C5.592 221.146 5.046 124.867 63.646 65.377c28.67-29.107 66.949-45.222 107.784-45.376l.591-.001c40.617 0 78.785 15.807 107.52 44.542 53.108 53.108 59.759 135.751 15.814 196.509a10 10 0 001.032 12.932l183.806 183.805a6.576 6.576 0 010 9.291z" />
      <Path d="M259.633 84.449c-48.317-48.316-126.935-48.316-175.253 0-23.406 23.406-36.296 54.526-36.296 87.627 0 33.102 12.89 64.221 36.296 87.627S138.906 296 172.007 296c33.102 0 64.222-12.891 87.627-36.297 48.317-48.317 48.317-126.936-.001-175.254zm-14.141 161.112C225.863 265.189 199.766 276 172.007 276c-27.758 0-53.856-10.811-73.484-30.44-19.628-19.628-30.438-45.726-30.438-73.484s10.809-53.855 30.438-73.484c20.262-20.263 46.868-30.39 73.484-30.39 26.61 0 53.227 10.133 73.484 30.39 40.52 40.52 40.52 106.45.001 146.969z" />
      <Path d="M111.017 153.935c1.569-5.296-1.452-10.861-6.747-12.43-5.294-1.569-10.86 1.451-12.429 6.746a83.612 83.612 0 0021.04 82.952c1.952 1.952 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.928c3.905-3.906 3.905-10.238 0-14.143a63.626 63.626 0 01-16.006-63.126zM141.469 94.214c-10.748 4.211-20.367 10.514-28.588 18.735-3.905 3.906-3.905 10.238 0 14.143 1.952 1.952 4.512 2.929 7.071 2.929s5.118-.977 7.07-2.929c6.26-6.26 13.575-11.057 21.741-14.255 5.143-2.015 7.678-7.816 5.664-12.959-2.014-5.143-7.816-7.676-12.958-5.664z" />
    </Svg>
  )
}

export default SearchSVG

import React from 'react'

const Footer = () => {
  return (
    <div className='flex  w-full  p-2 justify-center shadow-md'>
      <div className="flex self-center justify-between justify-start">
        <a href="https://github.com/paulfruitful/">
      <svg data-testid="geist-icon" height="23" stroke-linejoin="round" className='text-gray-700' viewBox="0 0 16 16" width="23" ><g clip-path="url(#clip0_872_3147)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"></path>
        </g>
        <defs>
  <clipPath id="clip0_872_3147">
  <rect width="30" height="30" fill="white"></rect>
  </clipPath>
  </defs></svg>
  </a>
  <a href="https://www.linkedin.com/in/paulfruitful/">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 48 48"
      width="23px"
      height="23px"
      fill="#000000"
    >
      <path
        fill="#0288D1"
        d="M42,4H6C4.897,4,4,4.897,4,6v36c0,1.103,0.897,2,2,2h36c1.103,0,2-0.897,2-2V6C44,4.897,43.103,4,42,4z"
      />
      <path
        fill="#FFF"
        d="M12 19H17V36H12zM14.5 11C13.12 11 12 12.12 12 13.5S13.12 16 14.5 16 17 14.88 17 13.5 15.88 11 14.5 11zM19 19H24V21.318C24.818 20.101 26.452 19 28.82 19 33.206 19 35 21.771 35 26.207V36H30V27.2C30 25.201 29.217 24 27.563 24 25.908 24 25 25.173 25 27.2V36H19z"
      />
    </svg>
  </a>
</div>
      <span className="text-gray-100  flex p-3 justify-self-center self-center text-md">Copyright <a className=' text-md  ml-1' href="https://paulfruitful.netlify.app">Paul Fruitful @2025</a></span>
    </div>
  )
}

export default Footer
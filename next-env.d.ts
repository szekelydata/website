/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

// NOTE: This file should not be edited
// see https://nextjs.org/docs/pages/building-your-application/configuring/typescript for more information.

import { css } from 'styled-components'

const sizes = {
  largeTablet: 1000,
  smallTablet: 767,
  phone: 479
}

// Creates a css wrapper to set media queries in styled components
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
     @media screen and (max-width: ${sizes[label]}px) {
        ${css(...args)};
     }
  `
  return acc
}, {})

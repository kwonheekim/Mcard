import styled from '@emotion/styled'

interface SpacingProps {
  size: number
  direction?: 'vertical' | 'horizontal'
}

const Spacring = styled.div<SpacingProps>`
  ${({ size, direction = 'vertical' }) =>
    direction === 'vertical'
      ? `
        height: ${size}px;
    `
      : `
        width: ${size}px;
    
    `}
`

export default Spacring

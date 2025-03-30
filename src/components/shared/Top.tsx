import { css } from '@emotion/react'
import Flex from './Flex'
import Text from './Text'
import { FC } from 'react'

interface TopProps {
  title: string
  subtitle: string
}

const Top: FC<TopProps> = ({ title, subtitle }) => {
  return (
    <Flex direction="column" css={containerStyles}>
      <Text bold={true} typography="t4">
        {title}
      </Text>
      <Text typography="t7">{subtitle}</Text>
    </Flex>
  )
}

const containerStyles = css`
  padding: 24px;
`

export default Top

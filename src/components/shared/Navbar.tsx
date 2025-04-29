import { Link, useLocation } from 'react-router-dom'
import Flex from './Flex'
import Button from './Button'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signup'].includes(location.pathname) === false

  return (
    <Flex justify="space-between" css={navbarContainerStyles} align="center">
      <Link to="/">홈</Link>
      {showSignButton ? (
        <Link to="/signup">
          <Button>로그인/회원가입</Button>
        </Link>
      ) : null}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`

export default Navbar

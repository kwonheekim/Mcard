import { css } from '@emotion/react'
import FixedBottonButton from '../shared/FixedBottonButton'
import Flex from '../shared/Flex'
import TextField from '../shared/TextFieldLabel'
import Spacring from '../shared/Spacring'

function From() {
  return (
    <Flex direction="column" css={formContainerStyleds}>
      <TextField label="이메일" placeholder="olaf@gmail.com" />
      <Spacring size={16} />
      <TextField label="패스워드" type="password" />
      <Spacring size={16} />
      <TextField label="패스워드 재확인" type="password" />
      <Spacring size={16} />
      <TextField label="이름" placeholder="올라프" />

      <FixedBottonButton label="회원가입" disabled={true} onClick={() => {}} />
    </Flex>
  )
}

const formContainerStyleds = css`
  padding: 24px;
`

export default From

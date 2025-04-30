/* eslint-disable no-undef */
import { css } from '@emotion/react'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import Spacring from '../shared/Spacring'
import TextField from '../shared/TextFieldLabel'
import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Text from '../shared/Text'
import { colors } from '@/styles/colorPalette'
import validator from 'validator'
import { FormValues } from '@/models/signin'

function Form({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const handleFormValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    },
    [],
  )
  const errors = useMemo(() => validate(formValues), [formValues])

  const validataDisable = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyleds}>
      <TextField
        label="이메일"
        name="email"
        placeholder="olaf@gmail.com"
        onChange={handleFormValues}
        value={formValues.email}
      />
      <Spacring size={16} />
      <TextField
        label="패스워드"
        name="password"
        type="password"
        onChange={handleFormValues}
        value={formValues.password}
      />
      <Spacring size={16} />

      <Button
        size="medium"
        disabled={validataDisable === false}
        onClick={() => {
          onSubmit(formValues)
        }}
      >
        로그인
      </Button>
      <Spacring size={12} />
      <Link to="/signup" css={linkStyleds}>
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

function validate(formValues: FormValues) {
  let errors: Partial<FormValues> = {}

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식을 확인해주세요.'
  }

  if (formValues.password.length < 8) {
    errors.password = '비밀번호를 8글자 이상 입력해주세요'
  }

  return errors
}

const formContainerStyleds = css`
  padding: 24px;
`

const linkStyleds = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blue};
  }
`

export default Form

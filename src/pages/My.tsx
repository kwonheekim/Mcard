import { useCallback } from 'react'
import { signOut } from 'firebase/auth'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'

import { auth } from '@remote/firebase'
import useUser from '@/hooks/useUser'
import MyImage from '@/components/my/MyImage'
import Spacring from '@/components/shared/Spacring'
// import MyImage from '@components/my/MyImage'

function MyPage() {
  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  return (
    <Flex direction="column" align="center">
      <Spacring size={40} />
      <MyImage size={80} mode="upload" />

      <Spacring size={20} />
      <Text bold={true}>{user?.displayName}</Text>

      <Spacring size={20} />

      <Button onClick={handleLogout}>로그아웃</Button>
    </Flex>
  )
}

export default MyPage

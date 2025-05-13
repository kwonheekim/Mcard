/* eslint-disable no-undef */
import Apply from '@/components/apply'
import useApplyCardMutation from '@/components/apply/hooks/useApplyCardMutation'
import usePollApplyStatus from '@/components/apply/hooks/usePollApplyStatus'
import useUser from '@/hooks/useUser'
import { APPLY_STATUS } from '@/models/apply'
import { updateApplyCard } from '@/remote/apply'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAppliedCard from '@/components/apply/hooks/useAppliedCard'
import { useAlertContext } from '@/contexts/AlertContext'
import FullPageLoader from '@/components/shared/FullPageLoader'

function ApplyPage() {
  const navigate = useNavigate()
  const [readyToPoll, setReadyToPoll] = useState(false)
  const user = useUser()
  const { id } = useParams() as { id: string }
  const { open } = useAlertContext()

  const { data } = useAppliedCard({
    userId: user?.uid as string,
    cardId: id,
    options: {
      onSuccess: (applied) => {
        if (applied == null) return

        if (applied.status === APPLY_STATUS.COMPLETE) {
          open({
            title: '이미 발급이 완료된 카드입니다.',
            onButtonClick: () => {
              window.history.back()
            },
          })

          return
        }

        setReadyToPoll(true)
      },
      onError: () => {},
      suspense: true,
    },
  })

  usePollApplyStatus({
    onSuccess: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.COMPLETE,
        },
      })
      navigate('/apply/done?success=true')
    },
    onError: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.REJECT,
        },
      })
      navigate('/apply/done?success=false')
    },
    enabled: readyToPoll,
  })

  const { mutate, isLoading: 카드를신청중인가 } = useApplyCardMutation({
    onSuccess: () => {
      setReadyToPoll(true)
    },
    onError: () => {
      console.log('카드 신청 실패')
    },
  })

  if (data !== null && data?.status === APPLY_STATUS.COMPLETE) {
    return null
  }

  if (readyToPoll || 카드를신청중인가) {
    return <FullPageLoader message="카드를 신청중입니다." />
  }

  return <Apply onSubmit={mutate} />
}

export default ApplyPage

import AdBanners from '@/components/home/AdBanners'
import CardList from '@/components/home/CardList'
import Button from '@/components/shared/Button'
import ListRow from '@/components/shared/ListRow'
import Top from '@/components/shared/Top'
import { Suspense } from 'react'

const HomePage = () => {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subtitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요."
      />
      <Button>안녕하세요</Button>
      <AdBanners />
      <Button>안녕하세요</Button>
      <Suspense
        fallback={[...new Array(10)].map((_, idx) => (
          <ListRow.Skeleton key={idx} />
        ))}
      >
        <CardList />
      </Suspense>
    </div>
  )
}

export default HomePage

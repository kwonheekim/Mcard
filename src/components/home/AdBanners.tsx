import { useQuery } from 'react-query'
import { getAdBanners } from '@/remote/adBanner'
import Flex from '../shared/Flex'
import Text from '../shared/Text'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function AdBanners() {
  const { data } = useQuery(['adBanners'], () => getAdBanners())
  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Link to={banner.link} css={bannerContainerStyles}>
                <Flex direction="column" css={bannerContainerStyles}>
                  <Text bold>{banner.title}</Text>
                  <Text typography="t7">{banner.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`

const bannerContainerStyles = css`
  padding: 8px;
  /* background-color: ${colors.gray}; */
  border-radius: 4px;
`

export default AdBanners

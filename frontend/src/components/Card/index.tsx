import * as S from './styles'
export * from './mock'
import React from 'react'

export type CardProps = {
  title: string
  count: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Card = ({
  title,
  count,
  onClick
}: CardProps) => {
  return (
    <S.Wrapper>
      <S.Animate>
        <S.Motion>
          <S.Card onClick={onClick}>
            <S.DivCard>
              <S.Header>
                <S.TitleCard>{title}</S.TitleCard>
              </S.Header>
              <S.Content>
                <S.Count>
                  <S.IconDollar /> {count}
                </S.Count>
              </S.Content>
            </S.DivCard>
          </S.Card>
        </S.Motion>
      </S.Animate>
    </S.Wrapper>
  )
}

export default Card

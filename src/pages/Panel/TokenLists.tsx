import React from 'react'
import { useActiveWeb3React } from 'hooks'
import styled from 'styled-components'
import { TokenList } from './TokenList'
import { useTranslation } from 'react-i18next'
import { useAppState } from 'state/application/hooks'

const ListWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.2rem;
  }
`

export function TokenLists(props: any) {
  const { tokenLists, pending, setPending } = props
  const { t } = useTranslation()
  const activeWeb3React = useActiveWeb3React()
  const { storage } = useAppState()

  return (
    <section>
      {tokenLists?.length ? (
        <>
          {tokenLists.map((list: any, index: number) => (
            <ListWrapper key={index}>
              <TokenList
                activeWeb3React={activeWeb3React}
                list={list}
                pending={pending}
                setPending={setPending}
                storage={storage}
                isNewList={!list.timestamp}
              />
            </ListWrapper>
          ))}
        </>
      ) : (
        <p>{t('noTokenLists')}</p>
      )}
    </section>
  )
}

import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Route, useRouteMatch } from 'react-router-dom'
import { Heading, Button, Text, Flex, Box, Card, CardBody, BaseLayout} from '@dexmex/uikit'
import styled from 'styled-components'
import Hero from './components/Hero'
import Container from '../../components/Layout/Container'
import TabButtons from './components/TabButtons'
import StakeCard from './components/StakeCard'

const StakingCardWrapper = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  padding-bottom: 40px;
  padding-top: 40px;
`

const StakingCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.background};
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  width: 100%;
`
const Description = styled(Text)`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  text-align: right;
`

const StakingCardHeader = styled(Flex)`
  & > div {
    flex: 1;
  }
`

const StakingInfoCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const StakingInfoCardBody = styled(CardBody)`
  text-align: center;
`
  
const Name = styled(Heading).attrs({ as: 'h3', size: 'lg' })`
  margin-bottom: 4px;
  text-align: right;
`
const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: justify;
  margin-bottom: 32px;
  & > div {
    grid-column: span 6;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const Staking: React.FC = () => {

  const { path } = useRouteMatch()
  const { account } = useWeb3React()

  return (
    <>
      <Hero />
      <Container>
        <Cards>
          <StakingInfoCard>
            <StakingInfoCardBody>
              <Heading color="contrast" size="lg">
                DEXM Staked
              </Heading>
              <CardMidContent> 0 </CardMidContent>
            </StakingInfoCardBody>
          </StakingInfoCard>
          <StakingInfoCard>
            <StakingInfoCardBody>
              <Heading color="contrast" size="lg">
                Rewards Received
              </Heading>
              <CardMidContent> 0 </CardMidContent>
            </StakingInfoCardBody>
          </StakingInfoCard>
        </Cards>
        <TabButtons />

        <Route exact path={`${path}`}>
          <StakeCard isStake />
        </Route>
        <Route path={`${path}/history`}>
          <StakeCard  />
        </Route>
      </Container>
  </>
  )
}

export default Staking
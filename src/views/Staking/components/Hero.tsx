import React, { useState } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Heading, Text, Button, Flex, Card, CardBody, AutoRenewIcon} from '@dexmex/uikit'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'



const spinnerIcon = <AutoRenewIcon spin color="currentColor" />

const StyledCard = styled(Card)`
  width: 100%;
  flex: 1;
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 240px;
  }
`

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDisabled};
  padding-top: 40px;
  margin-bottom: 32px;
  padding-bottom: 32px;
`

const ClaimButton = styled(Button)`
  margin-right: 0px;
  margin-left: auto;
  display: block;
`

const Hero = () => {
  const [isConfirming, setIsConfirming] = useState(false)

  const [isConfirmingExit, setIsConfirmingExit] = useState(false)

  const { account } = useWeb3React()


  const handleClaim = async () => {
      console.log('1111')
  }

  const handleClaimExit = async () => {
      console.log('1111')
  }

  return (
    <StyledHero>
      <Container>
        <Flex justifyContent="space-between" flexDirection={['column', null, 'row']}>
          <Flex flexDirection="column" mr={['8px', 0]}>
            <Title>Polygon Staking</Title>
            <Blurb>Stake DEXM and Earn Rewards</Blurb>
          </Flex>
          <Flex
            height="fit-content"
            justifyContent="center"
            alignItems="center"
            mt={['24px', null, '0']}
            flexDirection={['column', null, 'row']}
          >
            <StyledCard>
              <CardBody>
                <Flex flexDirection="column">
                  <Flex alignItems="center" mb="12px">
                    <Heading color="contrast" size="lg">
                      Claimable Matic
                    </Heading>
                  </Flex>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between">
                  <Flex flexDirection="column" mr="12px">
                    <Heading>0 Matic</Heading>
                  </Flex>
                  <Button
                    disabled={isConfirming}
                    isLoading={isConfirming}
                    endIcon={isConfirming ? spinnerIcon : undefined}
                    onClick={handleClaim}
                  >
                    Claim
                  </Button>
                </Flex>
              </CardBody>
            </StyledCard>
          </Flex>
        </Flex>
      </Container>
    </StyledHero>
  )
}

export default Hero
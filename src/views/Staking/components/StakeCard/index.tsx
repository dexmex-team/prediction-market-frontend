import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import styled, { DefaultTheme } from 'styled-components'
import { Heading, Button, Text, Flex, Box, Card, CardBody, BalanceInput} from '@dexmex/uikit'
import UnlockButton from '../UnlockButton.tsx'


interface StakeProps {
    isStake?: boolean
}

const StyledCard = styled(Card)`
  width: 100%;
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 240px;
  }
`
const Name = styled(Heading).attrs({ as: 'h3', size: 'lg' })`
  margin-bottom: 4px;
  text-align: right;
  margin-bottom:15px;
`

const StakeCard: React.FC<StakeProps> = ({isStake}) => {

    const [value, setValue] = useState('')
    const { account } = useWeb3React()
    const [isTxPending, setIsTxPending] = useState(false)


    const showFieldWarning = false

    const handleInputChange = (input: string) => {
        console.log('')
    }

    return (
        <>
            <StyledCard>
                <CardBody>

                
                <Name>{ isStake ? "Stake DEXM" : "Unstake DEXM"}</Name>
                
                <BalanceInput
                    value={value}
                    onUserInput={handleInputChange}
                    isWarning={showFieldWarning}
                    inputProps={{ disabled: false }}
                />
                
                <Box style={{textAlign:'right', marginTop:15}}>
                <Button
            scale="xs"
            variant="tertiary"
            onClick={() => {console.log('')}}
            disabled={false}
          >
            Use Max
          </Button>
          </Box>
                
                <Box style={{marginTop: 15 }}>
                {!account ? (
                    <UnlockButton width="100%" />
                ): (
                    <>
                    </>    
                )}
                </Box>
                </CardBody>
            </StyledCard>
        </>
    )
}

export default StakeCard
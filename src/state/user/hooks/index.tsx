import { ChainId, Pair, Token } from '@pancakeswap/sdk'
import flatMap from 'lodash/flatMap'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { AppDispatch, AppState } from '../../index'
import {
  toggleTheme as toggleThemeAction,

  updateGasPrice,
} from '../actions'
import { deserializeToken, GAS_PRICE_GWEI, serializeToken } from './helpers'



export function useThemeManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>()
  const isDark = useSelector<AppState, AppState['user']['isDark']>((state) => state.user.isDark)

  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction())
  }, [dispatch])

  return [isDark, toggleTheme]
}


export function useGasPrice(): string {
  const chainId = process.env.REACT_APP_CHAIN_ID
  const userGas = useSelector<AppState, AppState['user']['gasPrice']>((state) => state.user.gasPrice)
  return chainId === ChainId.MAINNET.toString() ? userGas : GAS_PRICE_GWEI.testnet
}

export function useGasPriceManager(): [string, (userGasPrice: string) => void] {
  const dispatch = useDispatch<AppDispatch>()
  const userGasPrice = useGasPrice()

  const setGasPrice = useCallback(
    (gasPrice: string) => {
      dispatch(updateGasPrice({ gasPrice }))
    },
    [dispatch],
  )

  return [userGasPrice, setGasPrice]
}


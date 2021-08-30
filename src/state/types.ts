import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>

export interface BigNumberToJson {
  type: 'BigNumber'
  hex: string
}

export type TranslatableText =
  | string
  | {
      key: string
      data?: {
        [key: string]: string | number
      }
    }

export type SerializedBigNumber = string



// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}




// Predictions

export enum BetPosition {
  BULL = 'Bull',
  BEAR = 'Bear',
  HOUSE = 'House',
}

export enum PredictionStatus {
  INITIAL = 'initial',
  LIVE = 'live',
  PAUSED = 'paused',
  ERROR = 'error',
}

export interface Round {
  id: string
  epoch: number
  failed?: boolean
  startBlock: number
  startAt: number
  startHash: string
  lockAt: number
  lockBlock: number
  lockPrice: number
  lockHash: string
  lockRoundId: string
  closeRoundId: string
  closeHash: string
  closeAt: number
  closePrice: number
  closeBlock: number
  totalBets: number
  totalAmount: number
  bullBets: number
  bearBets: number
  bearAmount: number
  bullAmount: number
  position: BetPosition
  bets?: Bet[]
}

export interface Market {
  paused: boolean
  epoch: number
}

export interface Bet {
  id?: string
  hash?: string
  amount: number
  position: BetPosition
  claimed: boolean
  claimedAt: number
  claimedHash: string
  claimedMATIC: number
  claimedNetMATIC: number
  createdAt: number
  updatedAt: number
  block: number
  user?: PredictionUser
  round?: Round
}

export interface PredictionUser {
  id: string
  createdAt: number
  updatedAt: number
  block: number
  totalBets: number
  totalBetsBull: number
  totalBetsBear: number
  totalMATIC: number
  totalMATICBull: number
  totalMATICBear: number
  totalBetsClaimed: number
  totalMATICClaimed: number
  winRate: number
  averageMATIC: number
  netMATIC: number
}

export interface HistoryData {
  [key: string]: Bet[]
}

export enum HistoryFilter {
  ALL = 'all',
  COLLECTED = 'collected',
  UNCOLLECTED = 'uncollected',
}

export interface LedgerData {
  [key: string]: {
    [key: string]: ReduxNodeLedger
  }
}

export interface RoundData {
  [key: string]: ReduxNodeRound
}

export interface ReduxNodeLedger {
  position: BetPosition
  amount: BigNumberToJson
  claimed: boolean
}

export interface NodeLedger {
  position: BetPosition
  amount: ethers.BigNumber
  claimed: boolean
}

export interface ReduxNodeRound {
  epoch: number
  startTimestamp: number | null
  lockTimestamp: number | null
  closeTimestamp: number | null
  lockPrice: BigNumberToJson | null
  closePrice: BigNumberToJson | null
  totalAmount: BigNumberToJson
  bullAmount: BigNumberToJson
  bearAmount: BigNumberToJson
  rewardBaseCalAmount: BigNumberToJson
  rewardAmount: BigNumberToJson
  oracleCalled: boolean
  lockOracleId: string
  closeOracleId: string
}

export interface NodeRound {
  epoch: number
  startTimestamp: number | null
  lockTimestamp: number | null
  closeTimestamp: number | null
  lockPrice: ethers.BigNumber | null
  closePrice: ethers.BigNumber | null
  totalAmount: ethers.BigNumber
  bullAmount: ethers.BigNumber
  bearAmount: ethers.BigNumber
  rewardBaseCalAmount: ethers.BigNumber
  rewardAmount: ethers.BigNumber
  oracleCalled: boolean
  closeOracleId: string
  lockOracleId: string
}

export interface PredictionsState {
  status: PredictionStatus
  isLoading: boolean
  isHistoryPaneOpen: boolean
  isChartPaneOpen: boolean
  isFetchingHistory: boolean
  historyFilter: HistoryFilter
  currentEpoch: number
  intervalSeconds: number
  minBetAmount: string
  bufferSeconds: number
  lastOraclePrice: string
  history: HistoryData
  rounds?: RoundData
  ledgers?: LedgerData
  claimableStatuses: {
    [key: string]: boolean
  }
}

// Global state

export interface State {
  block: BlockState
  predictions: PredictionsState
}
import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DexMex',
  description:
    'The first decentralized exchange based on uniswap to offer peer to peer leverage trading.',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
   
    case '/':
      return {
        title: `${t('Prediction')} | ${t('DexMex')}`,
      }
    default:
      return null
  }
}

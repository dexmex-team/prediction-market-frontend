import { MenuEntry } from '@dexmex/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Staking V1'),
    icon: 'GroupsIcon',
    href: 'https://dexmexswap.com/staking',
  },
  {
    label: t('Staking V2'),
    icon: 'GroupsIcon',
    href: '/staking',
  },
  {
    label: t('Prediction V1'),
    icon: 'PredictionsIcon',
    href: 'https://dexmexswap.com/staking',
  },
]

export default config

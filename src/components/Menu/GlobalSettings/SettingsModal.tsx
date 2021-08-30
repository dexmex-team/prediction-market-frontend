import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, PancakeToggle, Toggle, Flex, Modal, InjectedModalProps } from '@dexmex/uikit'
import { useTranslation } from 'contexts/Localization'
import GasSettings from './GasSettings'

const SettingsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
 
  const { t } = useTranslation()

  return (
    <Modal
      title={t('Settings')}
      headerBackground="gradients.cardHeader"
      onDismiss={onDismiss}
      style={{ maxWidth: '420px', overflowY: 'auto' }}
    >
      <Flex flexDirection="column">
        <Flex pb="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {t('Global')}
          </Text>
          <GasSettings />
        </Flex>
      </Flex>
    </Modal>
  )
}

export default SettingsModal

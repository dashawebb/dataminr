import React from 'react'
import styles from './Demo.module.less'
import { TogglePanel } from '../../components/TogglePanel'

export const Demo: React.FC = () => (
    <div className={styles.demo}>
        <TogglePanel />
    </div>
)

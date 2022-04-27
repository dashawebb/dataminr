import React from 'react'
import styles from './Demo.module.less'
import { TogglePanel } from '../../components/TogglePanel'
import { ALERTS_SCHEMA, CASE_MANAGEMENT_SCHEMA, SETTINGS_SCHEMA } from '../../schema'

export const Demo: React.FC = () => {
    const handleToggle = (id: number, checked: boolean) => {
        console.log(`flag ${id} is ${checked}`)
    }
    const handleSelectChange = (option: string, id: number) => {
        console.log(`flag ${id} has option: ${option}`)
    }

    return (
        <div className={styles.demo}>
            <TogglePanel
                schema={CASE_MANAGEMENT_SCHEMA}
                onToggle={handleToggle}
                onSelectChange={handleSelectChange}
            />
            <TogglePanel
                schema={SETTINGS_SCHEMA}
                onToggle={handleToggle}
                onSelectChange={handleSelectChange}
            />
            <TogglePanel
                schema={ALERTS_SCHEMA}
                onToggle={handleToggle}
                onSelectChange={handleSelectChange}
            />
        </div>
    )
}

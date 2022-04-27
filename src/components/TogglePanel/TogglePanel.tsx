import React from 'react'
import styles from './TogglePanel.module.less'
import { ITogglePanelTypes } from './TogglePanel.types'
import { ToggleItem } from '../ToggleItem'

export const TogglePanel: React.FC<ITogglePanelTypes> = (props) => {
    const { schema, onToggle, onSelectChange } = props

    return (
        <div className={styles.root}>
            {schema.map((item, index) => (
                <ToggleItem key={index} schemaItem={item} onToggle={onToggle} onSelectChange={onSelectChange} />
            ))}
        </div>
    )
}

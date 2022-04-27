import React, {ChangeEvent, Fragment, useEffect, useState} from 'react'
import { ReactComponent as ExpandIcon } from '../../assets/icons/collapsed.svg'
import { ReactComponent as CollapseIcon } from '../../assets/icons/expanded.svg'
import { Toggle } from '../Toggle'
import { ITogglePanelTypes } from './ToggleItem.types'
import styles from './ToggleItem.module.less'

// TODO dynamically set this value
const MAX_NOTIFICATIONS = 50

export const ToggleItem: React.FC<ITogglePanelTypes> = (props) => {
    const { schemaItem, onToggle, onSelectChange, isEnabled = true } = props

    const [expanded, setExpanded] = useState<boolean>(false)
    const [enableChildren, setEnableChildren] = useState<boolean>(true)
    const icon = expanded ? <CollapseIcon /> : <ExpandIcon />

    const hasChildren = Boolean(schemaItem.children)

    const handleSetExpanded = () => {
        setExpanded(!expanded)
    }

    const handleChildren = (id: number, checked: boolean) => {
        setEnableChildren(checked)
        if (schemaItem.children && !checked) {
            schemaItem.children.forEach((child) => (
                onToggle(child.id, checked)
            ))
            setExpanded(false)
        }
    }

    const handleToggle = (id: number) => (checked: boolean) => {
        onToggle(id, checked)
        handleChildren(id, checked)
    }

    const handleSelect = () => (event: ChangeEvent<HTMLSelectElement>) => {
        onSelectChange && onSelectChange(event.target.value, schemaItem.id)
    }

    return (
        <>
            <div className={styles.root}>
                <span className={styles.title}>{schemaItem.title}</span>
                <span className={styles.controls}>
                    {schemaItem.count && (
                        <select className={styles.select} onChange={handleSelect()} defaultValue={schemaItem.count}>
                            {[...Array(MAX_NOTIFICATIONS).keys()].map((el) => (
                                <option value={el} key={el}>
                                    {el}
                                </option>
                            ))}
                        </select>
                    )}
                    <Toggle
                        on={schemaItem.on}
                        inactive={!isEnabled}
                        onToggle={handleToggle(schemaItem.id)}
                    />
                    {hasChildren && (
                        <span className={styles.icon} onClick={handleSetExpanded}>
                            {icon}
                        </span>
                    )}
                </span>
            </div>
            {schemaItem.children && expanded && (
                <div className={styles.children}>
                    {schemaItem.children.map((item) => (
                        <ToggleItem
                            key={item.id}
                            schemaItem={item}
                            onToggle={onToggle}
                            isEnabled={enableChildren}
                            onSelectChange={onSelectChange}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

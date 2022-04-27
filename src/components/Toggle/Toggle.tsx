import React, { useState } from 'react'
import cx from 'classnames'
import styles from './Toggle.module.less'
import { IToggleTypes } from './Toggle.types'

export const Toggle: React.FC<IToggleTypes> = (props) => {
    const { on, onToggle, inactive } = props

    const [checked, setChecked] = useState(on)

    const handleChange = () => {
        if (!inactive) {
            const value = !checked
            onToggle(value)
            setChecked(value)
        }
    }

    return (
        <label className={styles.root}>
            <input
                type="checkbox"
                readOnly={inactive}
                checked={inactive ? false: checked}
                className={styles.input}
                onChange={handleChange}
            />
            <div className={cx(styles.switch, checked && !inactive && styles.checked)}>
                <div className={styles.switchSlider} />
            </div>
        </label>
    )
}

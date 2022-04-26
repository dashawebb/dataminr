import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './Toggle.module.less'

export const Toggle = (props: any) => {
    const {
        children,
        classes,
        className,
        disabled,
        label,
        readOnly,
        testIds,
        size,
        ...otherInputProps
    } = props

    const [checked, setChecked] = useState(true)

    const handleChange = () => setChecked(!checked)

    useEffect(() => {
        console.log(checked)
    }, [checked])

    return (
        <label className={styles.root}>
            <input
                type="checkbox"
                defaultChecked={checked}
                className={styles.input}
                onChange={handleChange}
            />
            <div className={cx(styles.switch, checked && styles.checked)}>
                <div className={styles.switchSlider} />
            </div>
        </label>
    )
}

import React from 'react';
import type { ReactElement } from 'react'
import type { UIDropdownPropsI } from '@/app/shared/types';
import styles from './styles.module.scss';

const UiDropdown = (props: UIDropdownPropsI): ReactElement => {
    const {
        dropdownHeader,
        dropdownContent,
        type,
    } = props;

    return (
        <div className={styles.dropdown_hover}>
            {dropdownHeader}
            <div className={styles.dropdown_hover__wrapper}>
                <div className={styles.dropdown_hover__content}>
                    {dropdownContent}
                </div>
            </div>
        </div>
    );
};

export default UiDropdown;
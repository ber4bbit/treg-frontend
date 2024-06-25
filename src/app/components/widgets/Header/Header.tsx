import type { ReactElement } from 'react';
import React from 'react';
import styles from './styles.module.scss';

const Header = (): ReactElement => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    
                </div>
            </div>
        </header>
    )
};

export default Header;
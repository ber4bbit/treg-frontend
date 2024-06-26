import type { ReactElement } from 'react';
import React from 'react';
import styles from './styles.module.scss';
import HeaderNavigation from "@/app/components/widgets/Header/HeaderNavigation/HeaderNavigation";

const Header = (): ReactElement => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <HeaderNavigation />
                </div>
            </div>
        </header>
    )
};

export default Header;
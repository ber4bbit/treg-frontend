import type { ReactElement } from "react";
import React from "react";
import styles from "./styles.module.scss";
import HeaderNavigation from "@/app/components/widgets/Header/HeaderNavigation/HeaderNavigation";
import Image from "next/image";
import UILink from "@/app/components/shared/ui/UILink/UILink";

const Header = (): ReactElement => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <UILink link="/" linkType="internal" className={styles.header__link}>
                        <Image
                            src="/images/shared/logo.svg" alt="Here must be company logo"
                            width={46}
                            height={46}
                        />
                        <span className="text-xxl">Treg</span>
                    </UILink>
                    <HeaderNavigation />
                </div>
            </div>
        </header>
    );
};

export default Header;

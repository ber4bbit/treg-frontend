import type {ReactElement} from "react";
import React from "react";
import styles from "./styles.module.scss";
import HeaderNavigationItem
    from "@/app/components/widgets/Header/HeaderNavigation/HeaderNavigationItem/HeaderNavigationItem";
import {navigationLinks} from "@/app/components/widgets/Header/data";
import Image from "next/image";
import UILink from "@/app/components/shared/ui/UILink/UILink";

const navigationLinksToRender: ReactElement[] = navigationLinks.map(
    (item, key) => (
        <HeaderNavigationItem
            link={item.link}
            linkText={item.linkText}
            key={key}
            className={styles.navigation__item}
        />
    ))

const HeaderNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
                {navigationLinksToRender}
            </ul>
        </nav>
    );
};

export default HeaderNavigation;
import type { ReactElement } from "react";
import React from "react";
import styles from "./styles.module.scss";
import UILink from "@/app/components/shared/ui/UILink/UILink";
import { UILinkVariantsEnum } from "@/app/shared/types";

interface HeaderNavigationItemPropsInterface {
    link: string,
    linkText: string,
    className?: any
}

const HeaderNavigationItem = (props: HeaderNavigationItemPropsInterface): ReactElement => {
    const { link, linkText, className } = props;

    return (
        <li className={styles.item}>
            <UILink
                link={link}
                className={className && className}
                variant={UILinkVariantsEnum.Bubble}
            >{linkText}</UILink>
        </li>
    );
};

export default HeaderNavigationItem;
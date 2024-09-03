import type { ReactElement } from "react";
import { UILinkVariantsEnum } from "@/app/components/shared/ui/UILink/UILink.types";
import React from "react";
import UILink from "@/app/components/shared/ui/UILink/UILink";
import styles from "./styles.module.scss";

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
                linkType={'internal'}
                className={className && className}
                variant={UILinkVariantsEnum.Bubble}
            >{linkText}</UILink>
        </li>
    );
};

export default HeaderNavigationItem;

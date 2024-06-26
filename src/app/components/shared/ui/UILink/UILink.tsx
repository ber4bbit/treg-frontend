import React, {ReactElement} from 'react';
import styles from './styles.module.scss';
import { UILinkVariantsEnum } from "@/app/shared/types";

interface UILinkPropsInterface {
    link: string,
    children: ReactElement | string,
    variant?: UILinkVariantsEnum,
    // TODO: Fix any
    className?: any
}

const UiLink = (props: UILinkPropsInterface) => {
    const {link, children, className, variant} = props;

    return (
        <a
            href={link}
            className={variant ? className + ' ' + styles[variant] : className}
        >
            {children}
        </a>
    );
};

export default UiLink;
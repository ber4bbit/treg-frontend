import React from 'react';
import styles from './styles.module.scss';
import type { ReactElement } from 'react';
import type { UILinkPropsInterface } from "@/app/shared/types";

const UiLink = (props: UILinkPropsInterface): ReactElement => {
    const { link, children, className, variant } = props;

    return (
        className && !variant ?
            <a
                href={link}
                className={className + ' text-sm'}
            >
                {children}
            </a>
            : !className && variant ?
                <a
                    href={link}
                    className={styles[variant] + ' text-sm'}
                >
                    {children}
                </a>
                : className && variant ?
                    <a
                        href={link}
                        className={className + ' ' + styles[variant] + ' text-sm'}
                    >
                        {children}
                    </a>
                    :
                    <a
                        href={link}
                        className={'text-sm'}
                    >{children}</a>
    );
};

export default UiLink;
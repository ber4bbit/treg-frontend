import type { ReactElement } from 'react';
import type { UILinkPropsI } from "@/app/shared/types";
import React from 'react';
import Link from "next/link";
import styles from './styles.module.scss';

const UiLink = (props: UILinkPropsI): ReactElement => {
    const {
        link,
        children,
        className,
        variant,
        linkType
    } = props;

    switch (linkType) {
        case 'external':
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
            )
        case 'internal':
            return (
                className && !variant ?
                    <Link
                        href={link}
                        className={className + ' text-sm'}
                    >
                        {children}
                    </Link>
                    : !className && variant ?
                        <Link
                            href={link}
                            className={styles[variant] + ' text-sm'}
                        >
                            {children}
                        </Link>
                        : className && variant ?
                            <Link
                                href={link}
                                className={className + ' ' + styles[variant] + ' text-sm'}
                            >
                                {children}
                            </Link>
                            :
                            <Link
                                href={link}
                                className={'text-sm'}
                            >{children}</Link>
            )
    }
};

export default UiLink;
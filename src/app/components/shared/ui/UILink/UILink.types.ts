import { ReactElement } from "react";

export enum UILinkVariantsEnum {
    Bubble = 'bubble',
    BubbleBlue = 'bubble_blue',
    BubbleGhost = 'bubble_ghost',
    BubbleGhostDashed = 'bubble_ghost-dashed',
    Simple = 'simple',
    SimpleGray = 'simple_gray',
}

export interface UILinkPropsI {
    link: string,
    linkType: 'external' | 'internal',
    children: ReactElement | string,
    variant?: UILinkVariantsEnum,
    // TODO: Fix any
    className?: any
}

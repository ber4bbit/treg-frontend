import type { ReactElement } from "react"

export interface UIDropdownPropsI {
    dropdownHeader: ReactElement | string,
    dropdownContent: ReactElement | string,
    type: 'active_on_hover' | 'active_on_click'
}

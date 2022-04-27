import { ISchemaItem } from '../../schema'

export interface ITogglePanelTypes {
    schemaItem: ISchemaItem
    onToggle: (id: number, checked: boolean) => void
    onSelectChange?: (option: string, id: number) => void
    isEnabled?: boolean
}

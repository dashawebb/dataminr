import { ISchemaType } from '../../schema'

export interface ITogglePanelTypes {
    schema: ISchemaType
    onToggle: (id: number, checked: boolean) => void
    onSelectChange: (option: string, id: number) => void
}

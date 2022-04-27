export interface ISchemaItem {
    title: string
    id: number
    on: boolean
    count?: number
    children?: ISchemaItem[]
}

export type ISchemaType = ISchemaItem[]

export const SETTINGS_SCHEMA: ISchemaType = [
    {
        title: 'Settings',
        id: 1,
        on: true,
    },
    {
        title: 'Users',
        id: 2,
        on: true,
        children: [
            {
                title: 'Users Add',
                id: 3,
                on: true,
            },
            {
                title: 'Users Delete',
                id: 4,
                on: false,
            },
            {
                title: 'Users Edit',
                id: 5,
                on: true,
            },
            {
                title: 'Max Users',
                id: 6,
                on: true,
                count: 10,
            },
        ],
    },
]

export const ALERTS_SCHEMA: ISchemaType = [
    {
        title: 'Alert Manager',
        id: 7,
        on: true,
    },
    {
        title: 'Alert Rules',
        id: 8,
        on: true,
        count: 10,
    },
]

export const CASE_MANAGEMENT_SCHEMA: ISchemaType = [
    {
        title: 'Case Management',
        id: 9,
        on: true,
    },
]

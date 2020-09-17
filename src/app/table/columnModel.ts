export class TableColumns {
    columnDef: string;
    headerTitle: string;
    cell: (element: any) => string;
    sortable: boolean;
}
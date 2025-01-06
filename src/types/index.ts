import { GridColDef } from "@mui/x-data-grid";

export type DonkeyTable = {
    name: string;
    endpoint: string;
    columns: GridColDef[];
}

export type TableRow = { [key: string]: null | string | number | Date };
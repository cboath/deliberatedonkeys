import { Paper, TableContainer } from "@mui/material"
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid" 
import { TableRow } from "../types"

interface SharedTableProps {
    rows: TableRow[]
    columns: GridColDef[]
}

export const SharedTable = ({ rows, columns }: SharedTableProps) => {
    return (
        <TableContainer component={Paper}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    }
                }}
                pageSizeOptions={[5, 10, 25, 50]}
            />
        </TableContainer>
    )
}
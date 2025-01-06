import { Paper, TableContainer } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid" 
import { useTableData } from "../hooks/useTableData"
import { DonkeyTable } from "../types" 

interface DataDisplayProps {
    activeTable: DonkeyTable | undefined
}

export const DataDisplay = ({ activeTable }: DataDisplayProps) => {
    const { data } = useTableData(activeTable?.endpoint)

    if (!activeTable)
        return (
            <h1>You gots ta pick a table mon.</h1>
        )

    return (
        <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
            <DataGrid
                rows={data}
                columns={activeTable.columns}
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
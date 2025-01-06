import { useState } from 'react'
import TableViewIcon from "@mui/icons-material/TableView"
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { DonkeyTable } from "./types";
import logo from "./assets/funkydonkey.webp"
import { DataDisplay } from "./pages/DataDisplay"
import tables from "./tables";

const drawerWidth = 300


const DonkeyDangle = () => {
  const [activeTableKey, setActiveTableKey] = useState<string | undefined>()

  const activeTable = activeTableKey
    ? (tables[activeTableKey] as DonkeyTable)
    : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        flexGrow: 1,
        width: 'calc(100vw-${drawerWidth}px'
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Donkey Punchers
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center"}}>
          <img src={logo} style={{ height: "3rm" }} />
        </Toolbar>
        <List>
          {Object.entries(tables)
            .sort((a, b) => a[1].name.localeCompare(b[1].name))
            .map(([key, table]) => (
              <ListItemButton
                selected={key == activeTableKey}
                key={key}
                onClick={() => setActiveTableKey(key)}
                >
                  <ListItemIcon>
                    <TableViewIcon />
                  </ListItemIcon>
                  <ListItemText primary={table.name} />
                </ListItemButton>
            ))
          }
        </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            display: "relative",
            overflowX: "hidden",
            flexGrow: 1,
            maxWidth: `calc(100vw-${drawerWidth}px`
          }}
          >
            <Toolbar />
            <DataDisplay activeTable={activeTable} />
          </Box>
    
      <h1>DONKEY TIME</h1>

    </Box >
  )
}

export default DonkeyDangle

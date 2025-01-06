import { createTheme } from "@mui/material/styles";

const palette = {
    primary: {
        main: "red",
        light: "white",
        dark: "black",
        contrastText: "blue"
    }
}

const typography = {
    fontFamily: "sans-serif",
    body1: {
        fontSize: "1rem",
        fontWeight: 500
    }
}

const theme = createTheme({
    palette,
    typography
})

export default theme
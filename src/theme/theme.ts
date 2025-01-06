import { createTheme } from "@mui/material/styles";

const palette = {
    primary: {
        main: "#5A3652",
        light: "#AD9BA9",
        dark: "#2D1B29",
        contrastText: "#FFFFFF"
    },
    secondary: {
        main: "#339FF2",
        light: "#99CFF9",
        dark: "#1A5079",
        contrastText: "#FFFFFF"
    },
    backround: {
        paper: "#F1F1FB",
        default: "#eeeeee"
    }
}

const typography = {
    fontFamily: "Lato, 'DM Sans', sans-serif",
    body1: {
        fontSize: "1rem",
        fontWeight: 500
    },
    body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5
    },
    button: {
        fontWeight: 500,
        fontFamily: "Lato, 'DM Sans', sans-serif",
    },
    subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 500,
        fontFamily: "Lato, 'DM Sans', sans-serif",
    },
    subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 500,
        fontFamily: "Lato, 'DM Sans', sans-serif",
        lineHeight: 1.5
    },
    h1: {
        fontSize: "3.5rem",
        fontWeight: 700,
        fontFamily: "Lato, 'DM Sans', sans-serif",
        lineHeight: 1.5
    },
    h2: {
        fontSize: "2.5rem",
        fontWeight: 700,
        fontFamily: "Lato, 'DM Sans', sans-serif",
        lineHeight: 1.5
    },
    h3: {
        fontSize: "2rem",
        fontWeight: 700,
        fontFamily: "Lato, 'DM Sans', sans-serif",
        lineHeight: 1.5
    },
    h4: {
        fontSize: "1.75rem",
        fontWeight: 700,
        fontFamily: "Lato, 'DM Sans', sans-serif",
        lineHeight: 1.5
    },
    h5: {
        fontSize: "1.5rem",
        fontWeight: 700,
        fontFamily: "Lato, 'DM Sans', sans-serif",
        lineHeight: 1.5
    }
}

const theme = createTheme({
    palette,
    typography
})

export default theme
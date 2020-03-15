export default {
  palette: {
    primary: {
      light: "#ffac33",
      main: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff"
    },
    secondary: {
      light: "#c71515",
      main: "#fbc02d",
      dark: "#ffac33",
      contrastText: "#fff"
    },
    error: {
      main: "#d32f2f"
    },
    warning: {
      main: "#ffac33"
    }
  },
  spreadThis: {
    themeExtend: {
      main: "#ff9800"
    },
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: "center"
    },
    image: {
      margin: "1px 1px 1px auto"
    },
    pageTitle: {
      margin: "1px auto 1px auto",
      fontFamily: "Cinzel, serif",
      fontWeight: "bolder"
    },
    textField: {
      margin: "1px auto 10px auto"
    },
    button: {
      marginTop: "1px",
      position: "relative"
    },
    customError: {
      color: "#c54949",
      fontSize: "0.8rem",
      marginTop: 10
    },
    progress: {
      position: "absolute"
    },
    invisibleSeparator: {
      border: "none",
      margin: 4
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20
    },
    card: {
      display: "flex",
      marginBottom: 20
    },
    cardContent: {
      width: "100%",
      flexDirection: "column",
      padding: 25
    },
    cover: {
      minWidth: 200,
      objectFit: "cover"
    },
    handle: {
      width: 60,
      height: 18,
      backgroundColor: "#ddaf12"
    },
    date: {
      height: 14,
      width: 100,
      backgroundColor: "rgba(0,0,0,0.3)",
      marginBottom: 10,
      marginTop: 5
    },
    fullLine: {
      height: 15,
      width: "90%",
      marginBottom: 10,
      backgroundColor: "rgba(0,0,0,0.6)"
    },
    halfLine: {
      height: 15,
      width: "50%",
      marginBottom: 10,
      backgroundColor: "rgba(0,0,0,0.6)"
    },
    paper: {
      padding: 20
    },
    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative"
      },
      "& .profile-image": {
        objectFit: "cover",
        maxHeight: "50%",
        maxWidth: "50%",
        borderRadius: "50%"
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle"
        },
        "& a": {
          color: "#000000"
        }
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0"
      }
    }
  }
};

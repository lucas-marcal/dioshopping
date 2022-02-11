import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import Routes from "./routes";
import { Container } from "@material-ui/core/";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Header from "./components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
    palette: {
        background: {
            default: "#FCFCFC",
        },
        primary: orange,
    },
    typography: {
      button: {
        textDecoration: "none",
      }
    }
});

const App = () => {
    const localCart = JSON.parse(localStorage.getItem("dioshopping: cart"));

    if (localCart !== null) {
        store.dispatch({ type: "CHANGE_CART", localCart });
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <Container maxWidth="lg">
                    <Router>
                        <Header />
                        <Routes />
                    </Router>
                </Container>
            </Provider>
        </ThemeProvider>
    );
};

export default App;

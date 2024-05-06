// import { useState } from 'react'
import './App.css'
import {
    createTheme,
    Stack,
    ThemeProvider
} from "@mui/material";
import {AdditionalChanges} from "./sections/AdditionalChanges.tsx";
import {TranslationsAcrossTime} from "./sections/TranslationsAcrossTime.tsx";
import {Sources} from "./sections/Sources.tsx";
import {Statistics} from "./sections/Statistics.tsx";

const theme = createTheme({
    palette: {
        background: {
            default: "#242424",
            paper: "#343434"
        },
        text: {
            primary: "#ffffffde",
            secondary: "#b0bec5"
        },
        primary: {
            main: "#546e7a",
        },
        secondary: {
            main: "#4db6ac"
        },
    }
})

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={1}>
                <Stack>
                    <h1>
                        El Mundo del Quijote
                    </h1>
                    <p>
                        El ingenioso hidalgo don Quijote de la mancha fue publicado en 1605 por Miguel de Cervantes.
                        Considerado una de las novelas españolas más importantes de todo el mundo, el quijote se ha circulado por todas partes.
                    </p>
                </Stack>
                <TranslationsAcrossTime/>
                <AdditionalChanges/>
                <Stack>
                    <h2>Mapa completo</h2>
                    <img src={"./assets/maps/2020plusYellow.png"} alt={"Mapa de las traducciones del Quijote"}
                         className={"map"}/>
                </Stack>
                <Statistics/>
                <Sources/>
            </Stack>
        </ThemeProvider>
    )
}

export default App

/*
                        <li>eslovaco: https://www.martinus.sk/1136535-domyselny-rytier-don-quijote-de-la-mancha/kniha</li>
                        <li>macedonio: (PDF) https://journals.ukim.mk/index.php/jcp/article/download/1468/1345/</li>
                        <li>persa: https://shopipersia.com/product/the-ingenious-gentleman-don-quixote/</li>
                        <li>albanés: https://www.shtepiaelibrit.com/store/en/the-classics/7087-don-kishoti-i-mances-migel-de-servantes-saavedra-9789994330225.html</li>
                        <li>tailandés: https://www.youtube.com/watch?v=QYhx67CcE5g</li>
 */
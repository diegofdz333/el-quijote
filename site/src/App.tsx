// import { useState } from 'react'
import './App.css'
import {Slider, Stack} from "@mui/material";
import {getParsedData} from "./assets/Data.ts";
import {getYears} from "./Year.ts";
import {MapImage} from "./components/MapImage.tsx";
import {useState} from "react";
import {InfoCard} from "./components/InfoCard.tsx";

function App() {

    const [currentYear, setCurrentYear] = useState<number>(2000)

    const handleSlider = (_event: Event, value: number | number[]) => {
        setCurrentYear(value as number);
    }

    const dataYears = getParsedData()

    const yearNums: number[] = getYears(dataYears)

    return (
        <>
            <h1>
                El Mundo del Quijote
            </h1>
            <p>
                El ingenioso hidalgo don quijote de la mancha fue publicado en 1605 por Miguel de Cervantes.
                Desde su primera imprenta, el quijote se ha circulado por todo el mundo.
            </p>
            <Slider min={1605} max={2016} defaultValue={1605} onChange={handleSlider}/>
            <Stack>
                <Stack direction="row">
                    <MapImage years={yearNums} current={currentYear}/>
                    <Stack>
                        <b>Año: {currentYear}</b>
                        <hr style={{width: "80%"}}/>
                        <InfoCard years={dataYears} current={currentYear}/>
                    </Stack>
                </Stack>
                <Stack>
                    <h2>Correcciones y lenguajes adicionales</h2>
                    <p>
                        El mapa de arriba utilizo la colección de libros del quijote de la biblioteca nacional de españa.
                        Esta biblioteca tiene mas de 2700 ediciones del quijote en 66 lenguajes. Aun así esta colección no es completa.
                        Unos sitios web indican que el quijote esta traducido a mas de 140 lenguajes pero nunca pude encontrar una
                        fuente buena para este numero, ni una lista de lenguajes.
                    </p>
                    <p>
                        Por esta razón yo me puse hacer mi propia investigación a muchos de los lenguajes mayores que no tienen traducción.
                        La lista de lenguajes que encontre no es completa, pero indica unos de los lenguajes que la biblioteca nacional no tiene.
                    </p>
                    <Stack direction={"row"}>
                        <Stack>
                            <h3>correcciones</h3>
                            <ul>
                                <li>Taiwan se debería haber colorado con chino/mandarín.</li>
                                <li>Eslovaquia accidentalmente se coloro en lugar de eslovenia en 1935 y adelante.</li>
                            </ul>
                        </Stack>
                        <Stack>
                            <h3>lenguajes adicionales (no en la BNE)</h3>
                            <ul>
                                <li>eslovaco</li>
                                <li>macedonio</li>
                                <li>persa</li>
                                <li>albanés</li>
                                <li>tailandés</li>
                            </ul>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack>
                    <h2>Mapa completo</h2>
                    <img src={"./assets/maps/2020plusYellow.png"} alt={"Mapa de las traducciones del Quijote"}
                         className={"map"}/>
                </Stack>
            </Stack>

        </>
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
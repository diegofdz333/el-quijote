// import { useState } from 'react'
import './App.css'
import {Slider} from "@mui/material";
import {getParsedData} from "./assets/Data.ts";
import {getYears} from "./Year.ts";
import {MapImage} from "./MapImage.tsx";
import {useState} from "react";

function App() {

    const [currentYear, setCurrentYear] = useState<number>(2000)

    const handleSlider = (_event: Event, value: number | number[]) => {
        setCurrentYear(value as number);
    }

    let dataYears= getParsedData()

    let yearNums: number[] = getYears(dataYears)

    return (
        <>
            <h1>
                El Mundo de El Quijote
            </h1>
            <p>
                El ingenioso hidalgo don quijote de la mancha fue publicado en 1605 por Miguel de Cervantes.
                Desde su primera imprenta, el quijote se ha circulado por todo el mundo.
            </p>
            <Slider min={1605} max={2016} defaultValue={1605} onChange={handleSlider}/>
            <MapImage years={yearNums} current={currentYear}/>
        </>
    )
}

export default App

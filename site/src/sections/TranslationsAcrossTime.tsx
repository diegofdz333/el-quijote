import {getYears} from "../Year.ts";
import {
    Box,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Slider,
    Stack
} from "@mui/material";
import {MapImage} from "../components/MapImage.tsx";
import {InfoCard} from "../components/InfoCard.tsx";
import {useEffect, useState} from "react";
import {getParsedData} from "../assets/Data.ts";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

enum SliderState {
    Pause,
    Play
}

function SliderButton({sliderState}: {sliderState: SliderState}) {
    if (sliderState == SliderState.Play) {
        return (<PauseIcon/>)
    }
    return (<PlayArrowIcon/>)
}

function TranslationsAcrossTime() {
    const [currentYear, setCurrentYear] = useState<number>(1605)
    const [sliderState, setSliderState] = useState<SliderState>(SliderState.Pause)
    const [sliderSpeed, setSliderSpeed] = useState<number>(4)

    const dataYears = getParsedData()

    const yearNums: number[] = getYears(dataYears)

    const handleSlider = (_event: Event, value: number | number[]) => {
        setCurrentYear(value as number);
        setSliderState(SliderState.Pause);
    }

    const handleSpeedSelect = (event: SelectChangeEvent) => {
        setSliderSpeed(Number.parseInt(event.target.value))
    }

    const sliderButtonOnClick = () => {
        if (sliderState == SliderState.Pause)
            setSliderState(SliderState.Play)
        else
            setSliderState(SliderState.Pause)
    }

    useEffect(() => {
        const timer = setTimeout(
            () => {
                if (sliderState == SliderState.Play && currentYear < 2016)
                    setCurrentYear(currentYear + 1)
                if (currentYear == 2016)
                    setSliderState(SliderState.Pause)
            },
            1000 / sliderSpeed)
        return () => clearTimeout(timer)
    }, [currentYear, sliderState])

    return (
        <Stack spacing={2}>
            <h2>Traducciones a través del tiempo</h2>
            <p>
                Desde su impresa, el Quijote ha sido lo suficientemente popular para empezar a tener traducciones a
                diferentes lenguajes. Usa los controles abajo para ver cuándo los lenguajes de diferentes países
                obtuvieron su primera imprenta del Quijote. Los mapas usan las primeras traducciones de la
                colección de la Biblioteca Nacional Española.
            </p>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <IconButton onClick={sliderButtonOnClick} color={"primary"}>
                    <SliderButton sliderState={sliderState}/>
                </IconButton>
                <Box minWidth={100}>
                    <FormControl fullWidth>
                        <InputLabel>Velocidad</InputLabel>
                        <Select
                            value={sliderSpeed.toString()}
                            onChange={handleSpeedSelect}
                        >
                            <MenuItem value={1} sx={{borderColor: "primary.main"}}>x1</MenuItem>
                            <MenuItem value={2}>x2</MenuItem>
                            <MenuItem value={4}>x4</MenuItem>
                            <MenuItem value={8}>x8</MenuItem>
                            <MenuItem value={16}>x16</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Slider min={1605} max={2016} onChange={handleSlider} value={currentYear}/>
            </Stack>
            <Stack direction="row" justifyContent={"space-between"}>
                <MapImage years={yearNums} current={currentYear}/>
                <Stack width={"30%"}>
                    <b>Año: {currentYear}</b>
                    <hr style={{width: "80%"}}/>
                    <InfoCard years={dataYears} current={currentYear}/>
                </Stack>
            </Stack>
            <p>
                * Muchas veces es difícil saber cuáles países colorear para los lenguajes. Muchos países hablan más que
                solo un idioma, y en muchos no hay ninguna lengua hablada por una mayoría. Intente solo colorear lugares
                si la mayoría de la población habla el idioma y los dialectos son "mutuamente inteligibles".
            </p>
        </Stack>
    )
}

export {TranslationsAcrossTime}
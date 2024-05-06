import {Box, Divider, Stack} from "@mui/material";
import {listStyle} from "../styles.ts";

function Statistics() {
    return (
        <Stack>
            <h2>Estadísticas</h2>
            <Box sx={listStyle}>
                <Stack>
                    <Box><p>Numero de lenguajes:</p></Box>
                    <Divider sx={{bgcolor: "white"}}/>
                    <Box sx={{bgcolor: "#78909c"}}><p>Mínimo 70</p></Box>
                </Stack>
            </Box>
        </Stack>
    )
}

export {Statistics}
import {Divider, List, ListItem, ListItemText, Stack} from "@mui/material";
import {listStyle} from "../styles.ts";

function AdditionalChanges() {
    return (
        <Stack>
            <h2>Correcciones y lenguajes adicionales</h2>
            <p>
                El mapa de arriba utilizó la colección de libros del quijote de la biblioteca nacional de España.
                Esta biblioteca tiene más de 2700 ediciones del quijote en 66 lenguajes. Aun así, esta colección
                no es completa.
                Unos sitios web indican que el quijote está traducido a más de 140 lenguajes, pero nunca pude encontrar
                una fuente buena para este número, ni una lista de lenguajes.
            </p>
            <p>
                Por esta razón yo me puse a hacer mi propia investigación a muchos de los lenguajes mayores
                que no tienen traducción. La lista de lenguajes que encontré no es completa, pero indica unos de los
                lenguajes que la biblioteca nacional no tiene.
            </p>
            <Stack direction={"row"} spacing={4} justifyContent={"space-around"}>
                <Stack>
                    <h3>Correcciones</h3>
                    <List sx={listStyle}>
                        <ListItem>
                            <ListItemText>Taiwán se debería haber colorado con chino/mandarín.</ListItemText>
                        </ListItem>
                        <Divider component={"li"} sx={{bgcolor: "white"}}/>
                        <ListItem>
                            <ListItemText>Eslovaquia accidentalmente se colorió en lugar de Eslovenia en 1935 y adelante.</ListItemText>
                        </ListItem>
                    </List>
                </Stack>
                <Stack>
                    <h3>Lenguajes adicionales (no en la BNE)</h3>
                    <List sx={listStyle}>
                        <ListItem><ListItemText>Eslovaco</ListItemText></ListItem>
                        <Divider sx={{bgcolor: "white"}}/>
                        <ListItem><ListItemText>Macedonio</ListItemText></ListItem>
                        <Divider sx={{bgcolor: "white"}}/>
                        <ListItem><ListItemText>Persa</ListItemText></ListItem>
                        <Divider sx={{bgcolor: "white"}}/>
                        <ListItem><ListItemText>Albanés</ListItemText></ListItem>
                        <Divider sx={{bgcolor: "white"}}/>
                        <ListItem><ListItemText>Tailandés</ListItemText></ListItem>
                    </List>
                </Stack>
            </Stack>
        </Stack>
    )
}

export {AdditionalChanges}
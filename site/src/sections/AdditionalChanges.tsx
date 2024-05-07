import {Divider, List, ListItem, ListItemText, Stack} from "@mui/material";
import {listStyle} from "../styles.ts";

function AdditionalChanges() {
    return (
        <Stack alignItems={"center"}>
            <h2>Cambios a los mapas</h2>
            <p>
                El mapa de arriba utilizó la colección de libros del quijote de la biblioteca nacional de España.
                Esta biblioteca tiene más de 2700 ediciones del quijote en 65 lenguajes. Aun así, esta colección
                no es completa.
                Unos sitios web indican que el quijote está traducido a más de 140 lenguajes, pero nunca pude encontrar
                una fuente buena para este número, ni una lista de lenguajes.
            </p>
            <p>
                Por esta razón yo me puse a hacer mi propia investigación a muchos de los lenguajes mayores
                que no tienen traducción. La lista de lenguajes que encontré no es completa, pero indica unos de los
                lenguajes que la biblioteca nacional no tiene.
            </p>
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
    )
}

export {AdditionalChanges}
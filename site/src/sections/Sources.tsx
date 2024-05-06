import {Stack} from "@mui/material";

const link1 = "https://datos.bne.es/obra/XX3383563.html?version=XX3383563spa"
const link2 = "https://www.shtepiaelibrit.com/store/en/the-classics/7087-don-kishoti-i-mances-migel-de-servantes-saavedra-9789994330225.html"
const link3 = "https://www.martinus.sk/1136535-domyselny-rytier-don-quijote-de-la-mancha/kniha"
const link4 = "https://journals.ukim.mk/index.php/jcp/article/download/1468/1345/"
const link5 = "https://shopipersia.com/product/the-ingenious-gentleman-don-quixote/"
const link6 = "https://www.youtube.com/watch?v=QYhx67CcE5g"

function Sources() {
    return (
        <Stack>
            <h2>Bibliografía</h2>
            <p style={{textAlign: "left"}}>
                La gran parte de este sitio usa información de la Biblioteca Nacional Española: <a href={link1} target={"_blank"}>{link1}</a>
            </p>
            <h3>Evidencia de lenguajes adicionales</h3>
            <div style={{textAlign: "left"}}>
                <p>Albanés - (tienda) <a href={link2} target={"_blank"}>{link2}</a></p>
                <p>Eslovaco - (tienda) <a href={link3} target={"_blank"}>{link3}</a></p>
                <p>Macedonio - (Articulo/PDF) <a href={link4} target={"_blank"}>{link4}</a></p>
                <p>Persa - (tienda) <a href={link5} target={"_blank"}>{link5}</a></p>
                <p>Tailandés - (video ensañando libro) <a href={link6} target={"_blank"}>{link6}</a></p>
            </div>
        </Stack>
    )
}

export {Sources}
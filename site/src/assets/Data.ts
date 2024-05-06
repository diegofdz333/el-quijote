import {Year} from "../Year.ts";

let dataString = "" +
    "Español,1605\n" +
    "Inglés,1612\n" +
    "Francés,1614\n" +
    "Italiano,1622\n" +
    "Neerlandés,1657\n" +
    "Alemán,1669\n" +
    "Danés,1776\n" +
    "Polaco,1786\n" +
    "Portugués,1794\n" +
    "Sueco,1802\n" +
    "Ruso,1815\n" +
    "Húngario,1850\n" +
    "Griego,1864\n" +
    "Checo,1866\n" +
    "Catalán,1873\n" +
    "Provenzal,1874\n" +
    "Búlgaro,1882\n" +
    "Serbio,1882\n" +
    "Japonés,1896\n" +
    "Estonio,1900\n" +
    "Árabe,1900\n" +
    "Esperanto,1905\n" +
    "Finés,1905\n" +
    "Vasco,1905\n" +
    "Yiddish,1910\n" +
    "Noruego,1916\n" +
    "Irlandes,1921\n" +
    "Letonio,1921\n" +
    "Hebreo,1923\n" +
    "Lituano,1924\n" +
    "Ucraniano,1924\n" +
    "Croata,1931\n" +
    "Rumano,1933\n" +
    "Turco,1933\n" +
    "Esloveno,1935\n" +
    "Islandés,1935\n" +
    "Tagalo,1940\n" +
    "Afrikaans,1942\n" +
    "Malayo,1949\n" +
    "Armenio,1950\n" +
    "Galés,1954\n" +
    "Chino,1963\n" +
    "Coreano,1975\n" +
    "Gallego,1977\n" +
    "Vietnamita,1983\n" +
    "Moldavo,1987\n" +
    "Bretón,1990\n" +
    "Georgiano,1994\n" +
    "Latín,1998\n" +
    "Cingalés,1999\n" +
    "Asturiano,2005\n" +
    "Malayalam,2005\n" +
    "Hindi,2006\n" +
    "Bengalí,2007\n" +
    "Mogol,2009\n" +
    "Acerí,2011\n" +
    "Azerí,2011\n" +
    "Quechua,2011\n" +
    "Tamil,2012\n" +
    "Uigur,2013\n" +
    "Ladino,2015\n" +
    "Valenciano,2015\n" +
    "Guraní,2016\n" +
    "Montañés,2016\n" +
    "Murciano,2016"

function getParsedData() {
    let dataYears: Year[] = []
    let dataSplit: string[] = dataString.split("\n")

    for (let i = 0; i < dataSplit.length; i++) {
        let dataLine: string = dataSplit[i]
        let langYear: string[] = dataLine.split(",")
        let lang = langYear[0]
        let year = langYear[1]

        if (dataYears.length > 0 && dataYears[dataYears.length - 1].year == Number(year)) {
            dataYears[dataYears.length - 1].languages.push(lang)
        } else {
            dataYears.push({year: Number(year), languages: [lang]})
        }
    }

    return dataYears
}

export { getParsedData }
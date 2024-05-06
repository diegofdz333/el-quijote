interface mapImageProps {
    years: number[];
    current: number;
}

function getMapYear(years: number[], current: number) {
    let lastMin: number | null = null

    years.sort((a, b) => {
        return a - b
    })

    for (let i = 0; i < years.length && years[i] <= current; i++) {
        lastMin = years[i]
    }

    return lastMin != null ? lastMin : years[0]
}

function MapImage({years, current}: mapImageProps) {

    const mapYear = getMapYear(years, current)

    return (
        <>
            <img src={"./assets/maps/"+mapYear+".png"} alt={"Mapa del Quijote en "+mapYear} className={"map"}/>
        </>
    )
}

export { MapImage }
function getMapYear(years: number[], current: number) {
    let lastMin: number | null = null
    years.forEach(year => {
        if (year >= current && (lastMin == null || year < lastMin))
            lastMin = year
    })
    return lastMin
}

function MapImage({years, current}: {years: number[]; current: number}) {

    let mapYear = getMapYear(years, current)

    return (
        <>
            <img src={"./assets/maps/"+mapYear+".png"} alt={"Mapa del Quijote en "+mapYear} className={"map"}/>
        </>
    )
}

export { MapImage }
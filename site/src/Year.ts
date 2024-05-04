interface Year {
    year: number;
    languages: string[];
}

function getYears(years: Year[]): number[] {
    let yearNums: number[] = []
    years.forEach((year) => {
        yearNums.push(year.year)
    })
    return yearNums
}

export { getYears }
export type {Year}
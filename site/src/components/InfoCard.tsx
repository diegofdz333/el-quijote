import {Box, Stack} from "@mui/material";
import {Year} from "../Year.ts";
import {TranslationInfo} from "./TranslationInfo.tsx";

interface InfoCardProps {
    current: number;
    years: Year[];
}

interface YearLang {
    year: number;
    language: string;
}

function getLastNTranslations(current: number, years: Year[], n: number) {
    let lastMinIndex: number | null = null
    let translations: YearLang[] = []

    years.sort((a, b) => {
        return a.year - b.year
    })

    for (let i = 0; i < years.length && years[i].year <= current; i++) {
        lastMinIndex = i
    }

    console.log(lastMinIndex)

    let nFound = Math.min(lastMinIndex != null ? lastMinIndex + 1: 1, n)

    if (lastMinIndex != null) {
        for (let i = 0; i < nFound; i++) {
            let year = years[lastMinIndex + i - nFound + 1]

            year.languages.forEach(language => {
                translations.push({year: year.year, language: language})
            })
        }
    }

    translations.reverse()
    while (translations.length > 5) {
        translations.pop()
    }
    translations.reverse()

    return translations
}

function InfoCard({current, years}: InfoCardProps) {

    let translations = getLastNTranslations(current, years, 5)

    return (
        <Box sx={{
            width: 500
        }}>
            <Stack spacing={4}>
                {translations.map((year, i) =>
                    <TranslationInfo year={year.year} language={year.language} key={i}/>
                )}
            </Stack>
        </Box>
    )
}

export { InfoCard }
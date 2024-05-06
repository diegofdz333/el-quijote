interface TranslationInfoProps {
    year: number;
    language: string;
}

function TranslationInfo({year, language}: TranslationInfoProps) {
    if (language == "Español") {
        return (
            <p>
                <i>El ingenioso hidalgo don quijote de la mancha</i> fue escrito por Miguel de Cervantes en {year}.
            </p>
        )
    }
    return (
        <p>
            El Quijote fue traducido al {language} en {year}.
        </p>
    )
}

export { TranslationInfo }

import React from 'react'

export const ThemeContext = React.createContext({ theme: {} })


interface Props {
    theme: {

    }
}
export const ThemeProvider: React.FC<Props> = (Props) => {
    return (
        <ThemeContext.Provider value={{ theme: Props.theme }}>
            {Props.children}
        </ThemeContext.Provider>
    )
}
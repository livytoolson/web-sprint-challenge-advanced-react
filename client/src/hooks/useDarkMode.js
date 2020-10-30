import { useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light')

    const toggleMode = () => {
        setTheme(!theme);
    }

    return [theme, toggleMode]
}
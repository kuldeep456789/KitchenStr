import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
    );

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    return [theme, toggleTheme];
};

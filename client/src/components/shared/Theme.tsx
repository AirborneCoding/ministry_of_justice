"use client";

import React, { useState, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
    light: 'winter',
    dark: 'night',
};

const getThemeFromLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
        const theme = localStorage.getItem('theme') || themes.dark;
        return theme;
    }
    return themes.dark;
};

const setDocumentTheme = (theme: any) => {
    document.documentElement.setAttribute('data-theme', theme);
};

const Theme = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());

    useEffect(() => {
        setDocumentTheme(theme);
    }, [theme]);

    const handleTheme = () => {
        const newTheme = theme === themes.dark ? themes.light : themes.dark;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const isDarkTheme = theme === themes.dark;

    return (
        <label className='swap swap-rotate'>
            <input
                type='checkbox'
                onChange={handleTheme}
                checked={isDarkTheme}
            />
            {/* sun icon*/}
            <BsSunFill className='swap-on text-yellow-500' size={22} />
            {/* moon icon*/}
            <BsMoonFill className='swap-off text-gray-500' size={22} />
        </label>
    );
};

export default Theme;
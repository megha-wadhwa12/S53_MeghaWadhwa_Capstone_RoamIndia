import React, { useContext } from 'react';
import { AppContext } from '../Context/ParentContext';

const ThemeComponent: React.FC = () => {
    const appContext = useContext(AppContext);
    const { theme, setTheme } = appContext || { theme: 'light', setTheme: () => { } };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'black' : 'light');
    };

    return (
        <>
            <li onClick={toggleTheme}>
                {theme == 'light' ? <div className="block px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dark Theme</div> : <div className="block px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Light Theme</div>

                }
            </li>
        </>
    );
};

export default ThemeComponent;

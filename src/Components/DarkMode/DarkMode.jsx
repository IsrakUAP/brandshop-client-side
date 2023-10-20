import { useEffect, useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const lightThemeImage = "https://cdn0.iconfinder.com/data/icons/small-nature/50/3_Sep-11-512.png";
    const darkThemeImage = "https://static-00.iconduck.com/assets.00/moon-icon-512x512-fm9crgpt.png";

    return (
        <div className="w-1/2 mx-auto">
            <button onClick={handleTheme} className="btn flex mx-auto" style={{
                backgroundImage: `url(${theme === "light" ? lightThemeImage : darkThemeImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                width: '50px',
                height: '50px'
            }}>
            </button>
        </div>
    );
};

export default DarkMode;
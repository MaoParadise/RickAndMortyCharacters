import { useState } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
        if(!theme){
            document.body.classList.add('darkBody');
            document.getElementById('modeButton').classList.remove('darkButton');
            document.getElementById('modeButton').classList.add('lightButton');
        }else{
            document.body.classList.remove('darkBody');
            document.getElementById('modeButton').classList.add('darkButton');
            document.getElementById('modeButton').classList.remove('lightButton');
        }
    }

    return{
        theme, 
        handleTheme
    }
}

export { useTheme };

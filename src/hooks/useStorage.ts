import React from 'react';

const useStorage = (key: string, data: any) => {
    const isFirstRenderRef = React.useRef(true);

    React.useEffect(() => {
        console.log('use storage');

        // if (!isFirstRenderRef.current) {
        console.log('use set');

        window.localStorage.setItem(key, JSON.stringify(data));
        // }
        isFirstRenderRef.current = false;
    }, [data]);
};

export default useStorage;

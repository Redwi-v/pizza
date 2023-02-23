import React from 'react';

const useStorage = (key: string, data: any) => {
    const isFirstRenderRef = React.useRef(true);

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(data));
        isFirstRenderRef.current = false;
    }, [data]);
};

export default useStorage;

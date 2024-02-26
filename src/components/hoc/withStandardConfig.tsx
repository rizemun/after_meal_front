import {ComponentType, createContext} from 'react';

export const ConfigContext = createContext({
    price: {
        1: 70,
        2: 110,
        3: 70
    }
})

export function withStandardConfig<P extends object>(
    WrappedComponent: ComponentType<P>
) {
    return function ComponentWithChartData(props: P) {
        const contextValue = {
            price: {
                1: 70,
                2: 110,
                3: 70
            }
        }

        return (
            <ConfigContext.Provider value={contextValue}>
                <WrappedComponent {...props} />
            </ConfigContext.Provider>
        );
    };
}

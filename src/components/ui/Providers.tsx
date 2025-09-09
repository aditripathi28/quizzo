import React from 'react'

interface Props {
    
}

const Providers = ({children}: Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Providers

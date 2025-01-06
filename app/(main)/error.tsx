"use client"

import React, { useEffect } from 'react'

const Error = ({ error, reset, }: {
    error: Error & { digest?: string }; reset: () => void;
}
) => {

    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main>
            error
            <button onClick={
                // Attempt to recover by trying to re-render the invoices route
                () => reset()
            }>RESET</button>
        </main>
    )
}

export default Error
'use client' // Error components must be Client Components

import {useEffect} from "react";

export default function Error({error}: {error: Error & { digest?: string} }) {

    useEffect(() => {
        console.error(error);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <h2 className="text-center">The item you were looking for hasn't been scraped yet.</h2>
        </div>
    )
}
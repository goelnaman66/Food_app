import React, { useState } from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
    console.log(err);
    const [error, setError] = useState(err.data);

    return (
        <>
            <h1>Oops!!</h1>
            <h2>Something went wrong!</h2>
            <h3>{error}</h3>
        </>
    )
}

export default Error

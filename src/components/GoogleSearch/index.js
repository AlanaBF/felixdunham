import React from 'react'

function GoogleSearch() {
    return (
        <div>
            <h3>Google Search</h3>
            <form className="googleSearch" method="GET" action="https://www.google.com/search">
                <input className="googleTextEnter" name="q" type="text" />
                <input className="googleSubmit" type="submit" />
            </form>
        </div>
    )
}

export default GoogleSearch

import { useState, useEffect } from "react";


export function useLocalStorage(link, key) {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || [])
    function getData() {
        fetch(link)
        .then(response => response.json())
        .then(json => {
            setValue(json)
            localStorage.setItem(key, JSON.stringify(json))
        })
    }
    useEffect(() => {
        if (!localStorage.getItem(key)) {
            getData()
        }
    }, [])
    return value
}
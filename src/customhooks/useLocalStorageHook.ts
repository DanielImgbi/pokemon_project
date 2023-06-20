import {useState, useEffect} from 'react';

type ValueSetter<T> = (value: T | ((prevValue: T) => T)) => void;

export default function useLocalStorageHook<T>(key: string, initialValue: T): [T, ValueSetter<T>] {
    const [value, setValue] = useState<T>( () => {
        const savedValue = localStorage.getItem(key)
        return savedValue ? JSON.parse(savedValue) : initialValue;    
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue];
}




export function useLocalStorage(key, initialValue) {
    let value = initialValue
    let setValue = (valOrCb)=>{
        if (typeof valOrCb !== 'function') {
            value = valOrCb
        }
        else {
            value = valOrCb(value)
        }
        localStorage.setItem(key, JSON.stringify(value))
        return value
    }
    if (!localStorage.getItem(key))
        setValue(value)
    return [value, setValue]
}
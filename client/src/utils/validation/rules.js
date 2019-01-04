export const required = (name, value) => {
    if (!value) {
        return name + ' field is required'
    } else {
        return null
    }
}

export const email = (name, value) => {
    const regEx = /\S+@\S+\.\S+/
    if (!regEx.test(value)) {
        return name + ' must be valid'
    } else {
        return null
    }
}

export const maxLength = (max) => {
    return (name, value) => {
        if (value.length > max) {
            return name + ' field max lenth is ' + max
        } else {
            return null
        }
    }
}
export const createValidators = (field, name, ...validations) => {
    return (state) => {
        for (let v of validations) {
            let errorMessage = v(name, state[field]);
            if (errorMessage) {
                return { [field]: errorMessage };
            }
        }
        return null;
    }
}


export const runValidators = (state, validators) => {
    return validators.reduce((memo, validator) => {
        return Object.assign(memo, validator(state))
    }, {})
}
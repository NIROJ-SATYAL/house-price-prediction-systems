function validator(schema) {
    return function(name, value, handler) {
       
        const error = handler.errors;
        console.log(error)
        let res = schema(name, value);

        if (res)
            error[name] = res
        else
            delete error[name]

        return handler.setErrors({...error })
    }
}

export default validator;
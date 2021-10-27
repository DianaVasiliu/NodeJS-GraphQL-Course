const findUser = (username, password) => {
    if (username === 'admin' && password === '123456789') {
        return username
    } else {
        return null
    }
}

export default findUser

const usersData = []

export const api = {
    signUp(email, password) {
        if (!usersData.find(item => item.email === email)) {
            usersData.push({email, password})
            return {status: 'success', user: {email}}
        } else return {
            status: 'fail',
            message: 'Пользователь с таким адресом уже зарегестрирован. Используйте другой адрес.'
        }
    },
    signIn(email, password) {
        if (usersData.find(item => item.email === email && item.password === password)) {
            return {status: 'success', user: {email}}
        } else return {
            status: 'fail',
            message: 'Неправильные логин или пароль'
        }
    },
    changePassword(email, oldPassword, newPassword) {
        console.log(email)
        console.log(usersData)
        const user = usersData.find(item => item.email === email)
        console.log(user)
        if (!user) return {status: 'fail', message: 'Пользователя с таким адресом не существует'}
        if (user.password !== oldPassword) return {status: 'fail', message: 'Старый пароль указан неверно'}
        const userIndex = usersData.indexOf(user)
        usersData[userIndex].password = newPassword
        return {status: 'success'}
    }
}

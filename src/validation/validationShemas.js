import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
    password: Yup.string()
        .required('Введите пароль')
        .min(4, 'Длина пароля минимум 4 символа')
        .max(10, 'Длина пароля максимум 10 символов')
        .matches(/[A-Z]+[@#\$&]*/, 'В пароле должна быть хотя бы одна заглавная буква'),
    email: Yup.string()
        .required('Введите почту')
        .email('Неверный формат почты')
})

export const signUpSchema = Yup.object().shape({
    passwordConfirm: Yup.string()
        .required('Подтвердите пароль'),
    password: Yup.string()
        .required('Введите пароль')
        .min(4, 'Длина пароля минимум 4 символа')
        .max(10, 'Длина пароля максимум 10 символов')
        .matches(/[A-Z]+[@#\$&]*/, 'В пароле должна быть хотя бы одна заглавная буква'),
    email: Yup.string()
        .required('Укажите почту')
        .email('Неверный формат почты')
})

export const changePasswordSchema = Yup.object().shape({
    newPasswordConfirm: Yup.string()
        .required('Подтвердите новый пароль'),
    newPassword: Yup.string()
        .required('Введите новый пароль')
        .min(4, 'Длина пароля минимум 4 символа')
        .max(10, 'Длина пароля максимум 10 символов')
        .matches(/[A-Z]+[@#\$&]*/, 'В пароле должна быть хотя бы одна заглавная буква'),
    oldPassword: Yup.string()
        .required('Введите текущий пароль')
})


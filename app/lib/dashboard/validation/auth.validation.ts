import { z } from "zod";
import { passwordValid, userEmailValid, userNameValid } from "./validation";

export const RegValidSchema = z.object({
    userEmail: userEmailValid,
    userPassword: passwordValid("Пожалуйста, заполните пароль."),
    confirmUserPassword: passwordValid("Пожалуйста, заполните пароль повторно."),
    userName: userNameValid,
}).superRefine(({ confirmUserPassword, userPassword }, ctx) => {
    if (confirmUserPassword !== userPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Пароли не совпадают",
            path: ['confirmUserPassword']
        });
    }
});

export const LogValidSchema = z.object({
    userEmail: userEmailValid,
    userPassword: passwordValid("Пожалуйста, заполните пароль."),
})

export const UpdateValidSchema = z.object({
    userEmail: userEmailValid,
    userName: userNameValid,
})
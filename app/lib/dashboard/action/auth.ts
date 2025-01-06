'use server'

import connectToDatabase from "../../mongodb"
import User from "../_models/user.mode";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { State } from "@/app/(dashboard)/_ts/definitions";
import { signIn } from "@/auth";
import { RegValidSchema, UpdateValidSchema } from "../validation/auth.validation";

// --- SAVE NEW ADMIN --- //
export const registUser = async (prevState: State, formData: FormData) => {
    const validatedFields = RegValidSchema.safeParse({
        userEmail: formData.get('userEmail'),
        userPassword: formData.get('userPassword'),
        confirmUserPassword: formData.get('confirmUserPassword'),
        userName: formData.get('userName'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
            success: false
        };
    }

    const { userEmail, userPassword, userName } = validatedFields.data;

    const newPass = await bcrypt.hash(userPassword, 10);

    try {
        await connectToDatabase()
        await User.create({ userEmail, userPassword: newPass, userName })
    } catch (error) {
        return { message: 'Something went wrong', success: false }
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}

// --- UPDATE ADMIN --- //
export async function updateUser(userId: string, prevState: State, formData: FormData): Promise<State> {
    const validatedFields = UpdateValidSchema.safeParse({
        userEmail: formData.get('userEmail'),
        userName: formData.get('userName'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Something went wrong",
            success: false
        };
    }
    const { userEmail, userName } = validatedFields.data;

    try {
        await connectToDatabase()
        await User.updateOne({ _id: userId }, { $set: { userEmail, userName } })
    } catch (error) {
        return { message: 'Something went wrong', success: false }
    }

    revalidatePath('/dashboard/users');
    // redirect('/dashboard/users');
    return { errors: {}, message: 'Success', success: true }
}

// --- DELETE ADMIN --- //
export async function deleteUser(userId: string) {
    console.log(userId)
    try {
        await connectToDatabase()
        await User.deleteOne({ _id: userId })
        revalidatePath('/dashboard/users');
        return { message: 'Пользователь удален', success: true }
    } catch (error) {
        return { message: 'Something went wrong', success: false }
    }
}

// --- LOGIN ADMIN --- //
export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}
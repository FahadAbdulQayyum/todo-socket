import { z } from 'zod';

    export const FormDataSchema = z.object({
        email: z
            .string()
            .email('Invalid email format') // Ensure it's a valid email
            .nonempty('Email is required'), // Ensure it's not empty
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters long') // Minimum password length
            .nonempty('Password is required'),
});

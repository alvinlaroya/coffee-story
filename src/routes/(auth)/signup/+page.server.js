import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const load = ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/home')
    }
}

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();

        try {
            const data = {
                "username": formData.get('username'),
                "email": formData.get('email'),
                "emailVisibility": true,
                "password": formData.get('password'),
                "passwordConfirm": formData.get('passwordConfirm'),
                "name": `${formData.get('fname')} ${formData.get('lname')}`,
                "fname": formData.get('fname'),
                "lname": formData.get('lname'),
                "phone": formData.get('phone')
            };

            const record = await locals.pb.collection('users').create(data);

            console.log("USER", record)

            return {
                user: record
            }
        } catch (error) {
            console.log("Create account error", error.response.data);
            return {
                validation: error.response.data
            }
            /* throw error(error); */
        }
    },
};
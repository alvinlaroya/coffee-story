import { redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const load = ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/home')
    }
}

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();

        let authenticated = false;

        try {
            const authData = await locals.pb.collection('users').authWithPassword(
                formData.get('username'),
                formData.get('password'),
            );

            authenticated = locals.pb.authStore.isValid

            // after the above you can also access the auth data from the authStore
            /* console.log(locals.pb.authStore.isValid);
            console.log(locals.pb.authStore.token);
            console.log(locals.pb.authStore.model.id); */

            /* // "logout" the last authenticated account
            locals.pb.authStore.clear(); */
        } catch (err) {
            console.log("Create account error", err.response.data);
        }

        if (authenticated) {
            throw redirect(307, '/home')
        } else {
            throw redirect(301, '/')
        }
    }
};
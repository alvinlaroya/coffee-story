import { redirect } from '@sveltejs/kit';

export const actions = {
    signout: async ({ locals }) => {
        locals.pb?.authStore.clear();

        // Set the user to undefined
        locals.user = undefined;

        // Redirect to the home page
        throw redirect(303, '/');
    }
};
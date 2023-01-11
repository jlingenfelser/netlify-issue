import { currentUser, pb } from '$lib/pocketbase';
import { redirect, type Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	// before
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
		} catch (_) {
			pb.authStore.clear();
		}
	}

	event.locals.pb = pb;
	event.locals.user = JSON.parse(JSON.stringify(pb.authStore.model));
	currentUser.set(event.locals.user);
	const response = await resolve(event);

	
	if (event.url.pathname.startsWith("/protected")) {
		if (!event.locals.user) {
			throw redirect(303, "/login")
		}
		if (event.url.pathname.startsWith("/protected/admin")) {
			if (event.locals.user.role !== "ADMIN") {
				throw redirect(303, "/protected")
			}
		}
	}

	// after
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
};

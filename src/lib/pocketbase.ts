import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('https://saltmarsh.app');

export const currentUser = writable(pb.authStore.model);

import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('someurl');

export const currentUser = writable(pb.authStore.model);

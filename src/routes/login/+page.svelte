<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Login to your account
	</h2>
	<p class="text-center mt-1">
		Or <a href="/register" class="text-primary font-medium hover:cursor-pointer hover:underline"
			>register</a
		> if you don't already have an account.
	</p>
	<form
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
		use:enhance={() => {
			return async ({ result }) => {
				pb.authStore.loadFromCookie(document.cookie);
				await applyAction(result);
			};
		}}
	>
		<div class="form-control w-full max-w-md">
			<label for="email" class="label font-medium pb-1">
				<span class="label-text">Email</span>
			</label>
			<input type="email" name="email" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="password" class="label font-medium pb-1">
				<span class="label-text">Password</span>
			</label>
			<input type="password" name="password" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="w-full max-w-md">
			<a
				href="/reset-password"
				class="font-medium text-primary hover:cursor-pointer hover:underline"
			>
				Forgot Password?</a
			>
		</div>

		<div class="w-full max-w-md pt-2">
			<button class="btn btn-primary w-full">Login</button>
		</div>
	</form>
</div>

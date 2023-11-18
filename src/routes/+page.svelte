<script lang="ts">
	import { enhance } from '$app/forms';

	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	const homepageBackgroundImg =
		'https://img.lovepik.com/background/20211021/large/lovepik-creative-coffee-background-image_401254524.jpg';
</script>

<svelte:head>
	<title>Coffee Story | Sign in</title>
</svelte:head>

<div class="w-screen h-screen grid grid-cols-1 lg:grid-cols-2">
	<div class="h-screen z-10 w-full flex items-center justify-center p-10 lg:p-0 max-w-lg mx-auto">
		<form method="POST" use:enhance class="w-full">
			<Card.Root class="bg-white/90 lg:bg-white border-0 shadow-none">
				<Card.Header>
					<Card.Title>Coffee Story</Card.Title>
					<Card.Description>Connect to other coffee lover</Card.Description>
				</Card.Header>
				<Card.Content class="w-full">
					<div class="flex flex-col w-full gap-1.5">
						<Input
							type="text"
							name="username"
							placeholder="Username"
							class="border-black block w-full"
						/>
						<p class="text-sm text-muted-foreground">Enter your username.</p>
					</div>
					<div class="flex flex-col mt-7 w-full gap-1.5">
						<Input type="password" name="password" placeholder="Password" class="border-black" />
						<p class="text-sm text-muted-foreground">Enter your password.</p>
					</div>
				</Card.Content>
				<Card.Footer>
					<div class="w-full">
						<Button type="submit" class="w-full bg-[#4d3319] text-white">Sign in</Button>
						<div class="mt-2 flex">
							<h1>Don't have an account?</h1>
							<a href="/signup">
								<Button variant="link" class="-mt-[7px] -ml-2 text-[#4d3319]">Sign up</Button>
							</a>
						</div>
					</div>
				</Card.Footer>
			</Card.Root>
		</form>
	</div>
	<div class="absolute lg:relative lg:flex justify-end">
		<img src={homepageBackgroundImg} class="h-screen object-cover" alt="" />
	</div>
</div>

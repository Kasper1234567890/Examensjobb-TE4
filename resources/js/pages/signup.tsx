import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";

export default function Signup() {
	return (
		<>
			<Head title="Home">
				<link rel="preconnect" href="https://fonts.bunny.net" />
				<link
					href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
					rel="stylesheet"
				/>
			</Head>

			<Navbar />

			<main>
				<h1>Sign Up</h1>
				<div className="m-auto w-[50%] bg-amber-500">
					<div className="flex flex-col items-center">
						<label htmlFor="user">Username</label>
						<input type="text" name="user" id="user" />
						<br />

						<label htmlFor="email">Email</label>
						<input type="text" name="email" id="email" />
						<br />

						<label htmlFor="password">Password</label>
						<input type="text" name="pass" id="pass" />
						<br />
					</div>
				</div>
			</main>

			<footer>
				<p>&copy; 2026 - Speedbricks</p>
			</footer>
		</>
	);
}

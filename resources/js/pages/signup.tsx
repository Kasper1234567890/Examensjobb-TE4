import { Head } from "@inertiajs/react";
import Logo from "../../assets/Speed_Bricks_Logo.png";

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

			<nav className="sticky top-0 z-1000 w-full bg-[#3f3f3f] p-5">
				<div className="flex justify-between">
					<div className="flex justify-center gap-4">
						<a href="/" className="navBtn">
							Home
						</a>
						<a href="/sets" className="navBtn">
							Sets
						</a>
					</div>
					<div className="flex items-center justify-center">
						<img src={Logo} alt="Speed Bricks Logo" className="w-1/4" />
					</div>
					<div className="flex justify-center gap-4">
						<a href="/signup" className="navBtn">
							Sign Up
						</a>
						<a href="/login" className="navBtn">
							Log In
						</a>
					</div>
				</div>
			</nav>

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

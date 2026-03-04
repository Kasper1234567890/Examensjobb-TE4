import { Head } from "@inertiajs/react";
import Logo from "../../assets/Speed_Bricks_Logo.png";

export default function Login() {
	return (
		<>
			<Head title="Home">
				<link rel="preconnect" href="https://fonts.bunny.net" />
				<link
					href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
					rel="stylesheet"
				/>
			</Head>

			<nav className="fixed top-0 z-1000 w-full bg-[#3f3f3f] p-5">
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

			<footer></footer>
		</>
	);
}

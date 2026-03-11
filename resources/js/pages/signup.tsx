import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";
import { useForm, Form } from "@inertiajs/react";
import { error } from "console";

export default function Signup() {
	const { data, setData, post, processing, errors } = useForm({
		username: "",
		email: "",
		password: "",
	});

	function submit(e: Event) {
		e.preventDefault();
		post("/register");
		console.log("hej");
	}

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
					<Form onSubmit={(e) => submit} action="/register" method="post">
						<div className="flex flex-col items-center">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								placeholder="Username"
								name="username"
								value={data.username}
								onChange={(e) => setData("username", e.target.value)}
							/>
							{errors.username && <div>{errors.username}</div>}
							<br />

							<label htmlFor="email">Email</label>
							<input
								type="email"
								placeholder="Email"
								name="email"
								value={data.email}
								onChange={(e) => setData("email", e.target.value)}
							/>
							{errors.email && <div>{errors.email}</div>}
							<br />

							<label htmlFor="password">Password</label>
							<input
								type="password"
								placeholder="Password"
								name="password"
								value={data.password}
								onChange={(e) => setData("password", e.target.value)}
							/>
							{errors.password && <div>{errors.password}</div>}
							<br />

							<button onClick={(e) => submit} type="submit" disabled={processing}>
								Register
							</button>
						</div>
					</Form>
				</div>
			</main>

			<footer>
				<p>&copy; 2026 - Speedbricks</p>
			</footer>
		</>
	);
}

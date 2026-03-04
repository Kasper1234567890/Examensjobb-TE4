import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";

export default function Welcome() {
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

			<footer></footer>
		</>
	);
}

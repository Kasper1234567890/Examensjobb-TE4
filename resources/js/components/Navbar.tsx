import Logo from "../../assets/Speed_Bricks_Logo.png";

interface NavbarProps {
	isLoggedIn?: boolean;
	settings?: boolean;
}

export default function Navbar({ isLoggedIn, settings }: NavbarProps) {
	return (
		<nav className="z-1000 sticky top-0 w-full bg-[#3f3f3f] p-5">
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
						{settings ? "Settings" : "Sign Up"}
					</a>
					<a href="/login" className="navBtn">
						{isLoggedIn ? "Log Out" : "Login"}
					</a>
				</div>
			</div>
		</nav>
	);
}

import Link from 'next/link';

export default function Navbar() {
	return (
		<nav>
			<div>
				<Link href='/'>Home</Link>
			</div>

			<div>
				<Link href='/products'>Products</Link>
				<Link href='/checkout'>Checkout</Link>
			</div>
		</nav>
	);
}

// use <Link href=''>
//

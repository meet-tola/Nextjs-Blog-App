import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white p-4">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href='/' className="text-black text-2xl font-bold">
            Arkticle
        </Link>

        <ul className="flex space-x-4">
            <li>
                <Link
                href='/blogs'
                className="text-black font-semibold hover:underline"
                >
                    Blogs
                </Link>
            </li>
            <li>
                <Link
                href='/api/auth/signin'
                className="text-white font-bold bg-black px-6 py-3 rounded-full hover:bg-[#5f5f5f]"
                >
                    Log in
                </Link>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default Header

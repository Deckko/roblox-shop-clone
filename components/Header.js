import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="font-bold text-xl">RobloxShop Clone</h1>
      <nav>
        <Link href="/" className="px-3">Home</Link>
        <Link href="/shop" className="px-3">Shop</Link>
        <Link href="/account" className="px-3">Account</Link>
        <Link href="/login" className="px-3">Login</Link>
        <Link href="/register" className="px-3">Register</Link>
      </nav>
    </header>
  );
}

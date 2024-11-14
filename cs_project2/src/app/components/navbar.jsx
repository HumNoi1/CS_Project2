import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white w-64 h-full flex flex-col items-start p-6 space-y-6 fixed">
        {/* Logo หรือ Brand */}
        <div className="text-2xl font-bold mb-6">
          <Link href="/">Logo</Link>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/Dashboards" className="text-gray-300 hover:text-white">
            Dashboards
          </Link>
          <Link href="/llm" className="text-gray-300 hover:text-white">
            LLM
          </Link>
          <Link href="/FileUploads" className="text-gray-300 hover:text-white">
            File Uploads
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <h1 className="text-2xl">Welcome to the Home Page</h1>
        <p className="mt-4 text-gray-700">
          This is your main content area. The Navbar on the left extends to the full height of the screen.
        </p>
      </main>
    </div>
  );
}
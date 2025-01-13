import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              ExamPro
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="hover:text-blue-200">
              Dashboard
            </Link>
            <Link href="/exams" className="hover:text-blue-200">
              Exams
            </Link>
            <Link href="/login" className="hover:text-blue-200">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
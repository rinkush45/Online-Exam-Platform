import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to ExamPro</h1>
            <p className="text-xl mb-8">Take your exams online with confidence</p>
            <Link 
              href="/exams"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50"
            >
              Start Exam
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Secure Testing</h3>
              <p className="text-gray-600">Take exams in a secure and monitored environment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Instant Results</h3>
              <p className="text-gray-600">Get your results immediately after completion</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Multiple Formats</h3>
              <p className="text-gray-600">Support for various question types</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from 'next/link';

export default function Categories() {
  const categories = [
    { name: 'Fruits & Vegetables', image: '/images/fruits.jpg', items: '150+ items' },
    { name: 'Dairy & Eggs', image: '/images/dairy.jpg', items: '80+ items' },
    { name: 'Meat & Fish', image: '/images/meat.jpg', items: '60+ items' },
    { name: 'Bakery', image: '/images/bakery.jpg', items: '40+ items' },
    { name: 'Beverages', image: '/images/beverages.jpg', items: '100+ items' },
    { name: 'Snacks', image: '/images/snacks.jpg', items: '120+ items' },
    { name: 'Household', image: '/images/household.jpg', items: '90+ items' },
    { name: 'Personal Care', image: '/images/personal-care.jpg', items: '70+ items' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">All Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={category.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 bg-gray-200"></div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{category.name}</h2>
              <p className="text-gray-600 text-sm">{category.items}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
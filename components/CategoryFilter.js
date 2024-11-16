import React from 'react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'softs', name: 'Softs' },
  { id: 'lighting', name: 'Lighting' },
  { id: 'decor', name: 'Decor' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'tables', name: 'Tables' },
  { id: 'rugs', name: 'Rugs' }
];

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
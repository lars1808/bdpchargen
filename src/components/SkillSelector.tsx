"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { X, AlertCircle, Search } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { getAllSkills, getSkillsByCategory, getCategories } from '@/lib/skills';
import { getAllCareers, getCareerById, getCareersBySkill } from '@/lib/careers';

// Define the interface
interface CategoryButtonProps {
  category: string;
  isActive: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = React.memo(({ category, isActive, isDisabled, onClick }) => {
  // Color mapping for categories
  const categoryColors: Record<string, string> = {
    'Combat': 'from-red-900 to-red-800',
    'Allies & Morale': 'from-blue-900 to-blue-800',
    'Esoteric & Arcane': 'from-purple-900 to-purple-800',
    'Knowledge': 'from-yellow-900 to-yellow-800',
    'Exploration': 'from-green-900 to-green-800',
    'Socializing': 'from-pink-900 to-pink-800',
    'Tricks & Subterfuge': 'from-indigo-900 to-indigo-800'
  } as const;

  const baseStyles = "px-4 py-2 rounded-lg text-sm font-medium transition-all";
  const activeStyles = "ring-2 ring-white ring-offset-2 ring-offset-gray-900";
  const disabledStyles = "opacity-50 cursor-not-allowed";
  const gradientStyle = categoryColors[category] || 'from-gray-900 to-gray-800';

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${baseStyles}
        ${isActive ? activeStyles : ''}
        ${isDisabled ? disabledStyles : 'hover:scale-105'}
        bg-gradient-to-br ${gradientStyle}
      `}
    >
      {category}
    </button>
  );
});


CategoryButton.displayName = 'CategoryButton';

// Rest of the component code remains exactly the same
const SkillSelector = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterCareer, setFilterCareer] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', type: 'default' });
  

  const categories = getCategories();
  const careers = getAllCareers();

  const getRelatedCareers = (skillId) => {
    return getCareersBySkill(skillId).map(career => career.name);
  };

  const getSkillCategory = useCallback((skillId: string): string | null => {
    for (const category of categories) {
      const categorySkills = getSkillsByCategory(category);
      if (categorySkills.some(skill => skill.id === skillId)) {
        return category;
      }
    }
    return null;
  }, [categories]);
  

  // Calculate available categories based on selected career
  const availableCategories = useMemo(() => {
    if (!filterCareer) return categories;
  
    const careerData = getCareerById(filterCareer.toLowerCase().replace(/\s+/g, '-'));
    if (!careerData) return categories;
  
    const availableCats = new Set();
    careerData.skills.forEach(skillId => {
      const category = getSkillCategory(skillId);
      if (category) availableCats.add(category);
    });
  
    return Array.from(availableCats);
  }, [filterCareer, categories, getSkillCategory]); // Added missing dependencies


  const getFilteredSkills = () => {
    let filteredSkills = getAllSkills().map(skill => ({
      ...skill,
      category: getSkillCategory(skill.id),
      relatedCareers: getRelatedCareers(skill.id)
    }));

    // Apply career filter
    if (filterCareer) {
      const careerData = getCareerById(filterCareer.toLowerCase().replace(/\s+/g, '-'));
      filteredSkills = filteredSkills.filter(skill => 
        careerData?.skills.includes(skill.id)
      );
    }

    // Apply category filter
    if (filterCategory) {
      filteredSkills = filteredSkills.filter(skill => 
        getSkillCategory(skill.id) === filterCategory
      );
    }

    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filteredSkills = filteredSkills.filter(skill => 
        skill.name.toLowerCase().includes(search) ||
        skill.description.toLowerCase().includes(search)
      );
    }

    return filteredSkills;
  };

  const toggleSkill = (skillId, skillName, skillDescription) => {
    if (selectedSkills.some(skill => skill.id === skillId)) {
      setSelectedSkills(selectedSkills.filter(skill => skill.id !== skillId));
      showAlert('Skill removed', 'default');
    } else if (selectedSkills.length < 4) {
      setSelectedSkills([...selectedSkills, { 
        id: skillId,
        name: skillName, 
        description: skillDescription,
        category: getSkillCategory(skillId),
        relatedCareers: getRelatedCareers(skillId)
      }]);
      showAlert('Skill added', 'default');
    } else {
      showAlert('Maximum of 4 skills allowed', 'destructive');
    }
  };

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: 'default' }), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="container mx-auto max-w-4xl">
{/* Selected Skills Section */}
<div className="mb-8 bg-gray-800 rounded-lg p-6">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-bold">Selected Skills</h2>
    <span className="px-2 py-1 bg-gray-700 rounded-md text-sm">
      {selectedSkills.length}/4
    </span>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {selectedSkills.map((skill, index) => (
      <div key={index} className="bg-gray-700 rounded-lg p-4 relative">
        <button 
          onClick={() => toggleSkill(skill.id, skill.name, skill.description)}
          className="absolute top-2 right-2 p-1 hover:bg-gray-600 rounded-full"
        >
          <X size={16} />
        </button>
        <h3 className="font-bold text-white mb-1">{skill.name}</h3>
        <span className="inline-block px-2 py-0.5 text-xs bg-gray-600 rounded-full mb-2">
          {skill.category}
        </span>
        <p className="text-gray-300 text-sm">{skill.description}</p>
      </div>
    ))}
    {[...Array(4 - selectedSkills.length)].map((_, index) => (
      <div key={`empty-${index}`} 
           className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-gray-500 text-center">
        Empty Slot
      </div>
    ))}
  </div>
  {selectedSkills.length > 0 && (
    <div className="mt-4 pt-4 border-t border-gray-700">
      <button
        onClick={() => {
          const skillText = selectedSkills.map(skill => 
            `${skill.name}\n${skill.description}\n`
          ).join('\n');
          
          navigator.clipboard.writeText(skillText)
            .then(() => showAlert('Skills copied to clipboard!', 'default'))
            .catch(() => showAlert('Failed to copy to clipboard', 'destructive'));
        }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
          />
        </svg>
        Copy Skills to Clipboard
      </button>
    </div>
  )}
</div>

        {/* Search and Filters - Modified */}
        <div className="mb-8 bg-gray-800 rounded-lg p-6">
          <div className="space-y-6">
            {/* Top row: Search and Career dropdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <select 
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-blue-500"
                value={filterCareer}
                onChange={(e) => {
                  setFilterCareer(e.target.value);
                  // Reset category filter if the current category isn't available for the new career
                  if (!availableCategories.includes(filterCategory)) {
                    setFilterCategory('');
                  }
                }}
              >
                <option value="">All Careers</option>
                {careers.map(career => (
                  <option key={career.id} value={career.name}>{career.name}</option>
                ))}
              </select>
            </div>

            {/* Bottom row: Category buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <CategoryButton
                  key={category}
                  category={category}
                  isActive={filterCategory === category}
                  isDisabled={filterCareer && !availableCategories.includes(category)}
                  onClick={() => setFilterCategory(filterCategory === category ? '' : category)}
                />
              ))}
            </div>
            </div>
      </div>

      {/* Career Description */}
      {filterCareer && (
        <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <div className="flex items-start gap-3">
            <div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">{filterCareer}</h3>
              <p className="text-gray-300">
                {careers.find(career => career.name === filterCareer)?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Skills List */}
        <div className="space-y-2">
          {getFilteredSkills().map((skill) => (
            <button
              key={skill.id}
              onClick={() => toggleSkill(skill.id, skill.name, skill.description)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedSkills.some(s => s.id === skill.id)
                  ? 'bg-blue-900 hover:bg-blue-800'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-white">{skill.name}</h3>
                    <span className="px-2 py-0.5 text-xs bg-gray-700 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Alert */}
        {alert.show && (
          <Alert 
            variant={alert.type} 
            className="fixed bottom-4 right-4 w-auto"
          >
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              <AlertDescription>{alert.message}</AlertDescription>
            </div>
          </Alert>
        )}
                {/* Add this Copyright Footer */}
                <footer className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            Block, Dodge, Parry is published under{" "}
            <a 
              href="https://creativecommons.org/licenses/by-sa/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              CC BY SA 4.0
            </a>
            , Copyright Lars Huijbregts / Dice Goblin Games
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SkillSelector;
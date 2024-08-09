import React from 'react';
import { Cat } from 'lucide-react';

const CatFact = ({ fact }) => (
  <div className="flex items-center mb-4">
    <Cat className="h-6 w-6 mr-2 text-blue-500" />
    <p className="text-lg">{fact}</p>
  </div>
);

const Index = () => {
  const catFacts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
    "The first cat in space was a French cat named Felicette in 1963.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">All About Cats</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Cute cat" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Fun Cat Facts</h2>
            {catFacts.map((fact, index) => (
              <CatFact key={index} fact={fact} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

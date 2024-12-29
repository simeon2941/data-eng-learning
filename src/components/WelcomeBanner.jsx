import React from 'react';
import { Clock, BookOpen, Target } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="flex items-start space-x-4 p-4 bg-white/80 rounded-lg backdrop-blur-sm">
    <div className={`p-2 ${color} rounded-lg shrink-0`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const WelcomeBanner = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg shadow-sm mb-8">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-400" />
      <div className="absolute right-20 top-20 w-20 h-20 rounded-full bg-purple-400" />
      <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-400" />
    </div>

    {/* Content */}
    <div className="relative p-8">
      {/* Center-aligned header section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to DeMastery
        </h1>
        <p className="text-lg text-gray-600">
          Master data engineering concepts through bite-sized, practical examples.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard
          icon={Clock}
          title="Bite-sized Learning"
          description="Quick, focused examples you can complete in 30 minutes"
          color="bg-blue-100 text-blue-600"
        />
        <FeatureCard
          icon={BookOpen}
          title="Practical Examples"
          description="Real-world scenarios with working code"
          color="bg-indigo-100 text-indigo-600"
        />
        <FeatureCard
          icon={Target}
          title="Progressive Learning"
          description="From fundamentals to advanced concepts"
          color="bg-purple-100 text-purple-600"
        />
      </div>
    </div>
  </div>
);

export default WelcomeBanner;
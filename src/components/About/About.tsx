import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'Python', 'Machine Learning', 'Scikit-learn', 'TensorFlow', 'Pandas',
    'NumPy', 'Data Analysis', 'SQL', 'Tableau', 'Power BI'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Image Placeholder */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-lg">Profile Photo</span>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6 leading-relaxed">
                I'm an aspiring Machine Learning Engineer with a strong foundation in mathematics 
                and statistics, currently pursuing my Master's in Computer Science with Data Analytics. 
                My journey began with a Bachelor's in Mathematics, which provided me with the analytical 
                thinking and problem-solving skills essential for machine learning.
              </p>
              
              <p className="mb-6 leading-relaxed">
                I've built machine learning models, conducted data analysis, and delivered insights 
                through real-world and academic projects. I'm passionate about applying AI to solve 
                complex challenges and turning data into actionable insights that drive meaningful 
                impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-gray-600" />
                <span className="text-gray-700">Kerala, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={20} className="text-gray-600" />
                <span className="text-gray-700">Available for opportunities</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
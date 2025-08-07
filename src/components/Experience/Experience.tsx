import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  location: string;
  details?: string[];
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

const Experience: React.FC = () => {
  const education: Education[] = [
    {
      id: 1,
      degree: "Master of Computer Science in Data Analytics",
      institution: "Digital University Kerala",
      year: "Sep 2024 - Present",
      location: "Thiruvananthapuram, Kerala",
      details: [
        "Specializing in advanced machine learning algorithms and data analytics",
        "Coursework includes Deep Learning, Statistical Analysis, and Big Data Processing",
        "Working on research projects in AI and data science applications"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Mathematics",
      institution: "St. Thomas College, Calicut University",
      year: "Aug 2021 - Mar 2024",
      location: "Thrissur, Kerala",
      details: [
        "Strong foundation in mathematical concepts essential for machine learning",
        "Coursework in Statistics, Linear Algebra, and Calculus",
        "Developed analytical and problem-solving skills"
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Google Cloud Data Analytics Certificate",
      issuer: "Google Cloud",
      year: "2024",
      description: "Comprehensive training in cloud-based data analytics and machine learning"
    },
    {
      id: 2,
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      year: "2024",
      description: "Version control and collaborative development practices"
    }
  ];

  const technicalSkills = {
    "Programming Languages": ["Python", "SQL (PostgreSQL)", "HTML/CSS"],
    "ML Libraries & Frameworks": ["Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    "Data Visualization": ["Matplotlib", "Seaborn", "Tableau", "Power BI"],
    "Tools & Technologies": ["Jupyter Notebook", "Git/GitHub", "OpenCV", "LaTeX"],
    "ML Expertise": ["Regression", "Classification", "Clustering", "NLP", "Feature Engineering"]
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Education & Skills
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3" size={24} />
            Education
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`relative ${index !== education.length - 1 ? 'pb-8' : ''}`}
              >
                {index !== education.length - 1 && (
                  <div className="absolute left-4 top-12 w-0.5 h-full bg-gray-300"></div>
                )}
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-grow hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-2" />
                          {edu.year}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    
                    {edu.details && (
                      <ul className="space-y-2">
                        {edu.details.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 flex items-start">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Calendar className="mr-3" size={24} />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h4>
                <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {cert.year}
                  </div>
                </div>
                {cert.description && (
                  <p className="text-gray-600 text-sm mt-3">{cert.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
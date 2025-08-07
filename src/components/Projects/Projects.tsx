import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Emotion Classifier",
      description: "Built an NLP-based classifier to detect emotions from text using Scikit-learn. Performed comprehensive preprocessing including tokenization and stop-word removal, and evaluated performance using accuracy and F1-score metrics.",
      technologies: ["Python", "Scikit-learn", "NLP", "Pandas", "NumPy"],
      liveUrl: "https://emotion-classifier-demo.example.com",
      githubUrl: "https://github.com/leslyvj/emotion-classifier",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      id: 2,
      title: "BMI Prediction Model",
      description: "Developed a regression model to estimate BMI using health data. Conducted exploratory data analysis, feature engineering, and implemented Linear Regression and Decision Tree algorithms for accurate predictions.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      liveUrl: "https://bmi-predictor-demo.example.com",
      githubUrl: "https://github.com/leslyvj/bmi-prediction",
      image: "https://images.pexels.com/photos/6111563/pexels-photo-6111563.jpeg"
    },
    {
      id: 3,
      title: "Job Monitoring Dashboard",
      description: "Created an interactive dashboard using HTML/CSS and JavaScript to monitor and visualize job posting trends. Enhanced front-end development skills while presenting data insights through dynamic charts and visual elements.",
      technologies: ["HTML/CSS", "JavaScript", "Chart.js", "Data Visualization"],
      liveUrl: "https://job-dashboard-demo.example.com",
      githubUrl: "https://github.com/leslyvj/job-monitoring-dashboard",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in machine learning, 
            data analysis, and model development using modern ML technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
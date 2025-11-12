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
      title: "MultiQuery-AI",
      description: "Offline multi-modal RAG system that ingests documents, images, and audio, embeds them, and runs unified semantic search with generation for mixed-media queries.",
      technologies: [
        "Python",
        "Whisper",
        "LangChain",
        "Chroma",
        "FastAPI"
      ],
      liveUrl: "https://github.com/leslyvj/MultiQuery-AI",
      githubUrl: "https://github.com/leslyvj/MultiQuery-AI",
      image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg"
    },
    {
      id: 2,
      title: "Job Verifier Multi-Agent System",
      description: "Coordinated agents that scrape job listings, run heuristic and OSINT checks, and escalate suspicious roles to an LLM reviewer to flag potential fraud at scale.",
      technologies: [
        "Python",
        "LangGraph",
        "LangServe",
        "FastAPI",
        "OSINT"
      ],
      liveUrl: "https://github.com/leslyvj/Job_verifier_Multi-agent_system",
      githubUrl: "https://github.com/leslyvj/Job_verifier_Multi-agent_system",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
    },
    {
      id: 3,
      title: "DHARMA Legal Analysis System",
      description: "Digital hub that processes FIRs end-to-end, extracting entities, mapping relationships, and surfacing high-priority legal insights through an interactive dashboard.",
      technologies: [
        "Python",
        "spaCy",
        "HuggingFace",
        "FastAPI",
        "Streamlit"
      ],
      liveUrl: "https://github.com/leslyvj/DHARMA-legal-analysis-system",
      githubUrl: "https://github.com/leslyvj/DHARMA-legal-analysis-system",
      image: "https://images.pexels.com/photos/8217549/pexels-photo-8217549.jpeg"
    },
    {
      id: 4,
      title: "Audio RAG Optimized",
      description: "GPU-accelerated audio RAG pipeline leveraging Faster-Whisper, chunking, and local LLMs to deliver high-throughput semantic search across long-form recordings.",
      technologies: [
        "Python",
        "Faster-Whisper",
        "CUDA",
        "Chroma",
        "LangChain"
      ],
      liveUrl: "https://github.com/leslyvj/audio-rag-optimized",
      githubUrl: "https://github.com/leslyvj/audio-rag-optimized",
      image: "https://images.pexels.com/photos/6759604/pexels-photo-6759604.jpeg"
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
            A showcase of applied AI systems spanning multi-modal RAG, agentic verification, 
            legal automation, and GPU-accelerated audio intelligence.
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
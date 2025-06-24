
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that follows best practices"
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description: "Creating user-centered designs with attention to detail"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a recent Computer Science graduate with a passion for frontend development 
                and user experience design. My journey in tech started during college when I 
                discovered the magic of turning ideas into interactive digital experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in the power of clean, purposeful design and code that not only works 
                beautifully but also creates meaningful connections between users and technology. 
                I'm eager to contribute to innovative projects and grow alongside a dynamic team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Bachelor's in Computer Science</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Certified in React & JavaScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">UI/UX Design Enthusiast</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <item.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

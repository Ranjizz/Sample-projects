
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Alex Chen</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Passionate about creating digital experiences that make a difference.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Alex Chen
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

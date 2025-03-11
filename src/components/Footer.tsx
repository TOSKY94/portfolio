import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-2">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-1">© 2024 Patrick C. Oguaju. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:patrick.oguaju@yahoo.com" className="hover:text-white transition-colors p-2">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/patrick-oguaju/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/TOSKY94" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
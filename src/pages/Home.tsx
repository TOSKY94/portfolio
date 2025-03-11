import { Download } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';
import {AzDevOps, AzSQLServer} from 'react-az-icons';
import { SiTerraform } from 'react-icons/si';
import StackIcon from 'tech-stack-icons';

function Home() {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 animate-fade-in-up ">
            <img
              src={profileImage}
              alt="Profile"
              className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-white/20"
            />
            <div className="w-full text-center pt-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Patrick C. Oguaju</h1>
            <h2 className="text-1xl md:text-2xl text-slate-300 mb-6 animate-fade-in-up animate-delay-100">Software Engineer</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">

            <p className="text-lg text-slate-300 mb-8 animate-fade-in-up animate-delay-200">
              Crafting robust cloud-native solutions and scalable enterprise applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up animate-delay-300">
              <a
                href="https://docs.google.com/document/d/1-RMmkXQ_zBEmNo6RRifRMlYegAqNTuo8/edit?usp=drive_link&ouid=100819498970892968854&rtpof=true&sd=true"
                target="_blank"
                download
                className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
            <div className="mt-12 animate-fade-in-up animate-delay-400">
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <StackIcon className="w-12 h-12 hover-scale" name="csharp" />
                <StackIcon className="w-12 h-12 hover-scale" name="python" />
                <StackIcon className="w-12 h-12 hover-scale" name="typescript" />
                <StackIcon className="w-12 h-12 hover-scale" name="js" />
                <StackIcon className="w-12 h-12 hover-scale" name="ai" />
                <StackIcon className="w-12 h-12 hover-scale" name="azure" />
                <StackIcon className="w-12 h-12 hover-scale" name="gcloud" />
                <StackIcon className="w-12 h-12 hover-scale" name="oracle" />
                <StackIcon className="w-12 h-12 hover-scale" name="aws" />
                <StackIcon className="w-12 h-12 hover-scale" name="firebase" />
                <StackIcon className="w-12 h-12 hover-scale" name="docker" />
                <StackIcon className="w-12 h-12 hover-scale" name="kubernetes" />
                <SiTerraform className="w-12 h-12 hover-scale text-purple-600" title="Terraform" />
                <StackIcon className="w-12 h-12 hover-scale" name="git" />
                <StackIcon className="w-12 h-12 hover-scale" name="powershell" />
                <AzSQLServer className="w-12 h-12 hover-scale" title="SQL Server"/>
                <AzDevOps className="w-12 h-12 hover-scale" title="Azure DevOps" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
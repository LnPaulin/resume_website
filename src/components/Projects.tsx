import { Project } from "./Project";
import password from "../assets/projects/passwords.jpg"
import seim from "../assets/projects/azure-seim.png"
import gcp from "../assets/projects/gcp.png"
import pentest from "../assets/projects/pentest.jpg"
import apprunner from "../assets/projects/apprunner.webp"

function Projects() {
  return (
    <div
      id="projects"
      className="w-full min-h-screen bg-back py-36 md:py-48 px-8 lg:px-72"
    >
      <div className="relative flex justify-end items-center">
        <h2 className="font-poppins font-extrabold text-4xl md:text-7xl text-cerulean">
          Projects.
        </h2>
        <div className="h-1 grow bg-white/20 self-end ml-4 mb-4"></div>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Project
          githubLink="https://www.youtube.com/watch?v=qGyFN6I6h-c&t=954s"
          projectName="Blackbox Penetration Testing"
          projectLink="https://www.youtube.com/watch?v=qGyFN6I6h-c&t=954s"
          projectSrc={pentest}
          tools={["nmap", "metasploit", "exploit-db"]}
          projectShortDesc="Performing blackbox penetration testing with only the target website provided."
        />
        <Project
          githubLink="https://github.com/LnPaulin/password_gen"
          projectName="PasswordGen"
          projectLink="https://password.gitcotech.net"
          projectSrc={password}
          tools={["Python", "Django", "Bootstrap"]}
          projectShortDesc="A strong Password Generator."
        />
        <Project
          githubLink="https://youtu.be/mTWk9_nRjzg?si=MLBIEWC19UOEe_3j"
          projectName="GCP Loadbalancing"
          projectLink="https://youtu.be/mTWk9_nRjzg?si=MLBIEWC19UOEe_3j"
          projectSrc={gcp}
          tools={["GCP", "Loadbalancer", "Compute Enging"]}
          projectShortDesc="Implementing Loadbalancing on GCP Compute Engine"
        />
        <Project
          githubLink="https://medium.com/@tchiofonkwa/deploying-a-django-project-on-aws-with-app-runner-and-a-ci-cd-pipeline-174bec24132fe"
          projectName="DjangoDeployment"
          projectLink="https://medium.com/@tchiofonkwa/deploying-a-django-project-on-aws-with-app-runner-and-a-ci-cd-pipeline-174bec24132fe"
          projectSrc={apprunner}
          tools={["Django", "AWS AppRunner", "Amazon RDS PostgreSQL", "Github"]}
          projectShortDesc="Deploying a django app on aws with AWS AppRunner"
        />
        <Project
          githubLink="https://github.com/LnPaulin/Honeypot"
          projectName="HoneyPot"
          projectLink="https://github.com/LnPaulin/Honeypot"
          projectSrc={seim}
          tools={["Microsoft Sentinel", "KQL", "Virtual Machine", "Azure Function"]}
          projectShortDesc="Setting up a vulnerable machine on azure and copturing live events"
        />
      </div>
    </div>
  );
}

export default Projects;

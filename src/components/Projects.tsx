import { Project } from "./Project";
import password from "../assets/projects/passwords.jpg";
import seim from "../assets/projects/azure-seim.png";
import gcp from "../assets/projects/gcp.png";
import pivot from "../assets/projects/pivot.png";
import pentest from "../assets/projects/pentest.jpg";
import apprunner from "../assets/projects/apprunner.webp";

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
          projectShortDesc="Performing Blackbox penetration testing on a network with only the target website provided."
          projectFullDesc={
            <>
              <i><h3>Project Summary: Blackbox Penetration Test for Gitcotech</h3></i>
              <br></br>
              <p>The process began with initial reconnaissance, where I discovered the website lacked SSL/TLS, exposing it to potential attacks. Using Nmap, I performed a network scan, identifying open ports like Port 80 (HTTP) and Port 3389 (RDP), and determined the website was hosted on a Microsoft IIS server. During the exploitation phase, I found a vulnerable service, BadBlue 2.7, on a host within the same network, which I exploited using Metasploit to gain initial access. I then performed privilege escalation to obtain administrator access, discovering a file <i>host_info.txt</i> containing sensitive credentials. Using these credentials, I moved laterally to access the primary server via RDP, gaining full control over the Active Directory domain. Finally, in the post-exploitation phase, I confirmed the server hosted the gitcotech.com website and downloaded sensitive files for further analysis.</p>
              <br></br>
              <i><h3>Recommendations</h3></i>
              <br></br>
              <p>
                <ul>
                  <li>Implement SSL/TLS to secure data in transit.</li>
                  <li>Regularly update software to patch vulnerabilities.</li>
                  <li>Conduct regular security assessments to identify and mitigate risks.</li>
                  <li>Segment network to isolate critical systems</li>
                </ul>
              </p>
              <br></br>
              <i><h3>Conclusion</h3></i>
              <br></br>
              <p>The test revealed critical security gaps, including outdated software and poor credential management. Addressing these issues will significantly reduce the risk of a breach. A detailed report was provided to guide the client’s remediation efforts.</p>
            </>
          }
          
        />

        <Project
          githubLink="https://youtu.be/teWgDTCshdQ?si=gr7CtUcE5Aj2QtZk"
          projectName="Penetration Testing > Pivoting"
          projectLink="https://youtu.be/teWgDTCshdQ?si=gr7CtUcE5Aj2QtZk"
          projectSrc={pivot}
          tools={["nmap", "metasploit", "Deepseek"]}
          projectShortDesc="Pivoting in a Network from a Bastion host and compromizing a firewall protected host."
          projectFullDesc={
            <>
              <i><h3>Project Summary: Pivoting in a Network</h3></i>
              <br></br>
              <p>In this project, I demonstrates how to pivot through a compromised machine (10.0.0.25) to access and analyze a target machine (10.0.0.206) in a virtual lab environment. Using Metasploit, I set up a pivot with the autoroute command on a meterpreter session, scanned the target for open ports, and identified the service running on port 80 by curling the http header information. </p>
              <br></br>
              <p> The goal is to showcase practical techniques in ethical hacking, such as network pivoting and service detection, while deepening my understanding of cybersecurity concepts through research and hands-on practice.</p>
              <i><h3>Recommendations</h3></i>
              <br></br>
              <p>
                <ul>
                  <li>Implement SSL/TLS to secure data in transit.</li>
                  <li>Regularly update software to patch vulnerabilities.</li>
                  <li>Conduct regular security assessments to identify and mitigate risks.</li>
                  <li>Segment network to isolate critical systems</li>
                </ul>
              </p>
            
            </>
          }
          
        />


        <Project
          githubLink="https://github.com/LnPaulin/password_gen"
          projectName="PasswordGen"
          projectLink="https://password.gitcotech.net"
          projectSrc={password}
          tools={["Python", "Django", "Bootstrap"]}
          projectShortDesc="A strong Password Generator."
          projectFullDesc={
            <>
              <i><h3>Random Password Generator with Django</h3></i>
              <br></br>
              <p>This project is a Random Password Generator built using Django. It allows users to generate secure, customizable passwords based on their preferences. The application provides options to include uppercase letters, special characters, and numbers, as well as to specify the length of the password.</p>
              <br></br>The Random Password Generator is a Django-based web application designed to create secure, customizable passwords. Users can specify the password length and choose to include uppercase letters, special characters, and numbers. The app uses a list to store the character set <i>(abcdefghijklmnopqrstuvwxyz by default)</i> and dynamically extends it based on user preferences <i>e.g., adding ABCDEFGHIJKLMNOPQRSTUVWXYZ </i>for uppercase or <i>~!@#$%^&*()__+</i> for special characters. <p>The password is generated by iterating through the list and using Python's random.choice() function to select characters randomly.</p> 
              
            </>
          }
        />
        <Project
          githubLink="https://youtu.be/mTWk9_nRjzg?si=MLBIEWC19UOEe_3j"
          projectName="GCP Loadbalancing"
          projectLink="https://youtu.be/mTWk9_nRjzg?si=MLBIEWC19UOEe_3j"
          projectSrc={gcp}
          tools={["GCP", "Loadbalancer", "Compute Engine"]}
          projectShortDesc="Implementing Loadbalancing on GCP Compute Engine"
          projectFullDesc="This project demonstrates how to implement load balancing on Google Cloud Platform's Compute Engine. It covers setting up load balancers, configuring backend services, and ensuring high availability and scalability for web applications."
        />
        <Project
          githubLink="https://medium.com/@tchiofonkwa/deploying-a-django-project-on-aws-with-app-runner-and-a-ci-cd-pipeline-174bec24132f"
          projectName="DjangoDeployment"
          projectLink="https://medium.com/@tchiofonkwa/deploying-a-django-project-on-aws-with-app-runner-and-a-ci-cd-pipeline-174bec24132f"
          projectSrc={apprunner}
          tools={["Django", "AWS AppRunner", "Amazon RDS PostgreSQL", "Github"]}
          projectShortDesc="Deploying a django app on aws with AWS AppRunner"
          projectFullDesc="This project involves deploying a Django application on AWS using AWS AppRunner. It includes setting up a CI/CD pipeline, configuring Amazon RDS PostgreSQL for the database, and integrating with GitHub for version control."
        />
        <Project
          githubLink="https://github.com/LnPaulin/Honeypot"
          projectName="HoneyPot"
          projectLink="https://github.com/LnPaulin/Honeypot"
          projectSrc={seim}
          tools={["Microsoft Sentinel", "KQL", "Virtual Machine", "Azure Function"]}
          projectShortDesc="Setting up a vulnerable machine on azure and capturing live events"
          projectFullDesc="HoneyPot is a project that involves setting up a vulnerable machine on Azure and capturing live events using Microsoft Sentinel. It uses KQL for querying logs, Azure Functions for automation, and provides insights into potential security threats."
        />
      </div>
    </div>
  );
}

export default Projects;
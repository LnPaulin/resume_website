import PP from "../assets/pp.jpg";
import DoraemonImg from "../assets/joy.png"

function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-altback py-36 md:py-48 px-8 lg:px-72"
    >
      <div className="relative flex justify-end items-center">
        <div className="h-1 grow bg-white/20 self-end mb-4 mr-4 md:ml-10"></div>
        <h2 className="font-poppins font-extrabold text-4xl md:text-7xl text-right text-cerulean ">
          About Me.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row pt-10">
        <div className="md:w-2/5 md:px-8 flex flex-col items-center">
          <img src={PP} className="rounded-full w-48 h-48" />
          <div className="px-2 pt-4 flex flex-col items-center justify-center">
            <h4 className="font-semibold text-xl text-center">
              Tech Stack and Expertise
            </h4>
            <div className="mt-4 flex justify-center flex-wrap gap-2 text-lg">
              <span className="px-3 py-1 bg-darkgray rounded-xl">Django</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">AWS</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">GCP</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Azure</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">VMware</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Azure AI</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Terraform</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Windows Server</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Microsoft 365</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">EDR (LimaCharlie)</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Linux</span>                         
              <span className="px-3 py-1 bg-darkgray rounded-xl">Wireshark</span>              
              <span className="px-3 py-1 bg-darkgray rounded-xl">Firewall</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Qualys</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Nessus</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Python</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">SQL</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Git</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Github</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">nmap</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">SIEM</span>
              <span className="px-3 py-1 bg-darkgray rounded-xl">Docker</span>
            </div>
            <div className="flex w-full justify-center gap-4 flex-wrap mt-8 self-start">
              <span className="text-cerulean text-lg hover:underline duration-300">
                My Socials -&#62;
              </span>
              <a
                href="https://www.linkedin.com/in/tchio-fonkwa-paulin"
                target="_blank"
              >
                <svg
                  className="w-6 h-6 rounded-sm fill-white/70 hover:fill-cerulean cursor-pointer"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-143 145 512 512"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.072"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{" "}
                  </g>
                </svg>
              </a>
              <a href="https://github.com/lnpaulin/" target="_blank">
                <svg
                  className="w-6 h-6 rounded-sm fill-white/70 hover:fill-cerulean cursor-pointer"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-143 145 512 512"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M-143,145v512h512V145H-143z M244.2,423.4c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7 c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3 c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9 c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2 c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5 C243,374.6,247.3,398.2,244.2,423.4z"></path>{" "}
                      <path d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6 c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1 c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2 C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2 c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z"></path>{" "}
                    </g>
                  </g>
                </svg>
              </a>
            
              <a href="mailto:contact@gitcotech.net" target="_blank">
                <svg
                  className="w-6 h-6 rounded-sm fill-white/70 hover:fill-cerulean cursor-pointer"
                  viewBox="0 0 232 232"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="232" height="232" />
                  <g>
                    <path
                      d="M52 79.283V76C52 73.8783 52.8429 71.8434 54.3431 70.3431C55.8434 68.8429 57.8783 68 60 68H172C174.122 68 176.157 68.8429 177.657 70.3431C179.157 71.8434 180 73.8783 180 76V79.283L116 119.283L52 79.283ZM118.12 127.393C117.484 127.79 116.75 128 116 128C115.25 128 114.516 127.79 113.88 127.393L52 88.717V156C52 158.122 52.8429 160.157 54.3431 161.657C55.8434 163.157 57.8783 164 60 164H172C174.122 164 176.157 163.157 177.657 161.657C179.157 160.157 180 158.122 180 156V88.717L118.12 127.393Z"
                      className="fill-altback"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex grow flex-col gap-4 font-poppins font-extralight md:w-3/5 text-white/90 text-xl">
          <p>Hey there, I'm Tchio, a motivated IT and cloud Security Specialist with a strong backgroud in technical concepts and customer services.  I am passionate about securing information systems on premises and on the Cloud.   </p>
          <p>
            My interest in computers <span className="mx-2">🖥️</span> probably began when I first saw one in the computer lab back at highschool
        
            <img className="w-6 h-6 mx-2 inline-block" src={DoraemonImg} alt="Doraemon joy face" />.
            Since then, I've been hooked — whether it's reading computer books,
            trying out new software , or breaking down my system into pieces,
            I've done it all.
          </p>
          <p>
            As a Security analyst, I enjoy monitoring network traffic to identify suspicious packets, training my peers about technics & tactics that threat actors 
            can use to compromise systems, prepare and plan on how to respond to incidents and how to recover once the disaster strikes. 
            I equally use the services of cloud providers like AWS, GCP and Azure to provision cloud infrastructures in a cost effective and secure environment.
          </p>
          <p>
            When I'm not in front of a computer screen, you will probably find me running
            in a field, or playing Pro Evolution Soccer with some friends.{" "}
            <span className="text-cerulean font-semibold">Thanks</span> for stopping by my portfolio!
          </p>
        </div>
      </div>
    </div >
  );
}

export default About;

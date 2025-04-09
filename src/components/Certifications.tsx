import Certificate from "./Certificate";
import gsec from "../assets/gsec.png";
import secplus from "../assets/sec.png";
import aws from "../assets/saa.png";
import isc2 from "../assets/cc.png";
import ai from "../assets/ai.png"
import ejpt from "../assets/ejpt.png"

function Certification() {
  return (
    <div
      id="certs"
      className="w-full min-h-screen bg-altback py-36 md:py-48 px-8 lg:px-72"
    >
      <div className="flex justify-end items-center">
        <div className="h-1 grow bg-white/20 self-end mb-4 mr-4"></div>
        <h2 className="font-poppins font-extrabold text-4xl md:text-7xl text-right text-cerulean ">
          Certifications.
        </h2>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Certificate
          certSrc={ejpt}
          certName="Junior Penetration Tester (eJPT)"
          certLink="https://certs.ine.com/11811ce4-624e-4750-8f5a-cb2d6786f1aa#acc.pPj1mzxE"
        />
      <Certificate
          certSrc={secplus}
          certName="CompTIA Security+"
          certLink="https://www.credly.com/badges/58a0a23b-1623-454d-b888-10b40278ef48/public_url"
        />
      <Certificate
          certSrc={aws}
          certName="AWS Solutions Architech Assosicate"
          certLink="https://www.credly.com/badges/fc644b6a-31a2-40aa-a09b-dfa43a117a18/public_url"
        />
         <Certificate
          certSrc={ai}
          certName="Azure AI Engineer Associate"
          certLink="https://learn.microsoft.com/api/credentials/share/en-us/TchioFonkwaPaulin/74CF0E3EB753415D?sharingId=4B9A763214C9C86B"
        />
        <Certificate
          certSrc={isc2}
          certName="ISC2 Certifed in Cybersecurity"
          certLink="https://www.credly.com/badges/18cce0ac-e303-45aa-beca-11d6917052a2/public_url"
        />
         <Certificate
          certSrc={gsec}
          certName="Google CyberSecurity Certificate"
          certLink="https://www.credly.com/badges/0b86d34d-41ed-4a43-a3fb-c8da8663a033/public_url"
        />
      </div>
    </div>
  );
}

export default Certification;

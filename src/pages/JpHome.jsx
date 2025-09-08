import TitleJp from "../components/TitleJp";
import AboutJp from "../components/AboutJp";
import ContactJp from "../components/ContactJp";
import EducationJp from "../components/EducationJp";
import CertificationJp from "../components/CertificationJp";
import FooterJp from "../components/FooterJp";

const JpHome = () => {
  return (
    <div className="min-h-screen bg-gray-200 font-jp flex justify-center items-center">
      <div className="w-full max-w-4xl px-12 flex flex-col gap-8 mt-16">
        <TitleJp />
        <AboutJp />
        <ContactJp />
        <EducationJp />
        <CertificationJp />
        <FooterJp />
      </div>
    </div>
  );
};

export default JpHome;

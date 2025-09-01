import TitleJp from "../components/jp/TitleJp";
import AboutJp from "../components/jp/AboutJp";
import ContactJp from "../components/jp/ContactJp";
import EducationJp from "../components/jp/EducationJp";
import CertificationJp from "../components/jp/CertificationJp";
import TechJp from "../components/jp/TechJp";

const JpHome = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-jp flex justify-center items-center">
      <div className="w-full max-w-4xl px-12 flex flex-col gap-8 mt-16">
        <TitleJp />
        <AboutJp />
        <ContactJp />
        <EducationJp />
        <CertificationJp />
        <TechJp />
      </div>
    </div>
  );
};

export default JpHome;

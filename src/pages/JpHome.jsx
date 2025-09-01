import TitleJp from "../components/jp/TitleJp";
import AboutJp from "../components/jp/AboutJp";
import ContactJp from "../components/jp/ContactJp";
import EducationJp from "../components/jp/EducationJp";
import CertificationJp from "../components/jp/CertificationJp";
import TechJp from "../components/jp/TechJp";

const JpHome = () => {
  return (
    <div className="min-h-screen bg-amber-50 font-jp flex items-center">
      <div className="mt-16 px-82 w-full flex flex-col gap-12">
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

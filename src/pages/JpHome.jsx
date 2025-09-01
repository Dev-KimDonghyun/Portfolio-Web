import TitleJp from "../components/jp/TitleJp";
import AboutJp from "../components/jp/AboutJp";
import ContactJp from "../components/jp/ContactJp";
import EducationJp from "../components/jp/EducationJp";
import CertificationJp from "../components/jp/CertificationJp";
import TechJp from "../components/jp/TechJp";

const JpHome = () => {
  return (
    <div className="font-jp bg-amber-50">
      <TitleJp />
      <div className="grid grid-cols-2">
        <AboutJp />
        <ContactJp />
        <EducationJp />
        <CertificationJp />
      </div>
      <TechJp />
    </div>
  );
};

export default JpHome;

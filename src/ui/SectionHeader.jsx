import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import SectionLink from "./SectionLink";

function SectionHeader({ title, subtitle, link }) {
  return (
    <div className="flex items-end justify-between mb-1.5 md:mb-2 lg:mb-4">
      <div>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </div>
      {link !== "/offer" && <SectionLink link={link}>مشاهده همه</SectionLink>}
    </div>
  );
}

export default SectionHeader;

import { Home } from "lucide-react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type TechExperienceCardProps = {
  title: string;
  company_name: string;
  date: string;
  description: string[];
  icon: string;
};

export default function TechExperienceCard({
  title,
  company_name,
  date,
  description,
  icon,
}: TechExperienceCardProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={date}
      iconStyle={{ background: "white", color: "green" }}
      icon={icon ? <img src={icon} /> : <Home />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{company_name}</h4>
      <ul className="list-disc flex flex-col gap-3 mt-3">
        {description.map((desc, index) => (
          <li className="leading-loose" key={index}>{desc}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

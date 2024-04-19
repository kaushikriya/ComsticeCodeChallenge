import { ReactNode } from "react";
import { Button, TwoColumnsWithFooter } from ".";
import DashboardImage from "../assets/dashboard.svg";
import Download from "../assets/download.svg";
import Applications from "../assets/applications.svg";
import Bolt from "../assets/bolt.svg";
import Image from "next/image";

const footerData = [
  {
    title: "Lower Cost of Ownership",
    content:
      "No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.",
    icon: <Download />,
  },
  {
    title: "Higher Agent Occupancy",
    content:
      "Real-time and historical agent scorecards to improve agent occupancy.",
    icon: <Applications />,
  },
  {
    title: "Higher Agent Occupancy",
    content:
      "Real-time and historical agent scorecards to improve agent occupancy.",
    icon: <Applications />,
  },
  {
    title: "First Contact Resolution",
    content:
      "Minimize repeat callers. handle more customers, convert more business.",
    icon: <Bolt />,
  },
];

const FooterItem = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: ReactNode;
}) => {
  return (
    <div className="w-full md:w-80 flex items-center gap-5">
      <div className="rounded-full bg-[#EBEDFE] flex items-center justify-center font-mono h-10 w-12">
        <div className="w-full h-full flex items-start">{icon}</div>
      </div>
      <div className="grid space-y-2 w-[90%]">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-lg">{content}</div>
      </div>
    </div>
  );
};

export const Dashboard = () => {
  const firstColumn = (
    <div className="grid w-full gap-4">
      <div className="bg-white gradient-to-r from-[#0C1523] to-[##6B6E86] leading-3 text-xl md:text-2xl font-semibold whitespace-normal h-20 w-full">
        Avaya Call Reporting Reinvented
      </div>
      <div>
        Step into the future of call center analytics with Comstice Avaya Call
        Reporting solution. Say goodbye to the need for an Avaya AES server and
        extra licenses for every agent, and say hello to a world of insightful
        analytics, cradle-to-grave reports, and automated agent and team reports
        by email.
      </div>
      <Button title="Request Demo" variant="Primary" />
    </div>
  );

  const secondColumn = (
    <div>
      <DashboardImage className="flex-shrink md:w-full md:h-full" />
    </div>
  );

  const FooterColumn = (
    <div className="w-full grid md:flex md:flex-row shrink-0 justify-between items-center">
      {footerData.map((item, index) => (
        <FooterItem
          key={index}
          title={item.title}
          content={item.content}
          icon={item.icon}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[90%] h-full fixed top-[150px] flex items-center justify-center">
        <TwoColumnsWithFooter
          firstColumnNode={firstColumn}
          secondColumnNode={secondColumn}
          footerNode={FooterColumn}
        />
      </div>
    </div>
  );
};

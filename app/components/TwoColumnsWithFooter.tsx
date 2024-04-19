import { ReactNode } from "react";

export const TwoColumnsWithFooter = ({
  firstColumnNode,
  secondColumnNode,
  footerNode,
}: {
  firstColumnNode: ReactNode;
  secondColumnNode: ReactNode;
  footerNode: ReactNode;
}) => {
  return (
    <div className="w-full h-full grid md:flex md:flex-col">
      <div className="w-full grid space-y-4 md:flex justify-between items-center h-[60%]">
        <div className="w-1/2">{firstColumnNode}</div>
        <div className="w-1/2">{secondColumnNode}</div>
      </div>
      <div className="w-full">{footerNode}</div>
    </div>
  );
};

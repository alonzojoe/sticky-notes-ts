import { type ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

const InfoBox = ({ mode, children, severity }: InfoBoxProps) => {
  if (mode === "hint") {
    return <div className="infobox infobox-hint">{children}</div>;
  }

  return (
    <aside
      className={`infobox infobox-warning warning--${
        severity === "low" ? "low" : severity === "medium" ? "medium" : "high"
      } `}
    >
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;

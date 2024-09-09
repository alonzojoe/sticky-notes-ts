import { type ReactNode } from "react";

type InfoBoxHint = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxHint = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = InfoBoxHint | WarningBoxHint;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;

  if (mode === "hint") {
    return <div className="infobox infobox-hint">{children}</div>;
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;

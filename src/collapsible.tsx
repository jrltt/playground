import React, { ReactNode, useEffect, useState } from "react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
  open?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  open = false,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div>
      <button onClick={toggleOpen}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;

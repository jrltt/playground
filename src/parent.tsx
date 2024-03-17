import React, { ReactElement, ReactNode, useState } from "react";

interface ParentComponentProps {
  children: (isOpen: boolean) => ReactNode; // Children is now a function
}
const ParentComponent: React.FC<ParentComponentProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle All</button>
      {children(isOpen)}
    </div>
  );
};

interface ChildProps {
  open: boolean;
}

const ParentComponentV2: React.FC<{
  children: ReactElement<ChildProps>[]; // Expect an array of React elements
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to change the state
  const toggleAll = () => setIsOpen((open) => !open);

  return (
    <div>
      <button onClick={toggleAll}>Toggle All</button>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { open: isOpen })
          : child
      )}
    </div>
  );
};

export default ParentComponent;
export { ParentComponentV2 };

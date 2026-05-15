import { ReactNode, useState } from 'react';

interface AccordionProps {
  key?: string | number;
  title: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <div 
        className="bg-[#e0e0e0] p-3 text-sm flex justify-between items-center cursor-pointer hover:bg-neutral-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && children}
    </>
  );
}

import { ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  key?: string | number;
  title: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col border border-white/20 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <button 
        className="w-full p-4 text-left flex justify-between items-center cursor-pointer bg-white/30 dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-neutral-800 dark:text-neutral-200 tracking-wide">{title}</span>
        <ChevronDown 
          size={18} 
          className={`text-neutral-600 dark:text-neutral-400 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 bg-white/20 dark:bg-black/20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

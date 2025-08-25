import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
}

const CodeBlock = ({ children }: CodeBlockProps) => {

  return (
    <code
      className="bg-gray-800 dark:bg-slate-300 text-pink-300 dark:text-green-800 p-3 py-[4px] rounded-md overflow-x-auto before:content-none after:content-none"
    >
      {children}
    </code>
  );
};

export default CodeBlock;
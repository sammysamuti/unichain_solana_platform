interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <div className="container mx-auto px-6 py-8 w-full">
        {children}
      </div>
    </div>
  );
}

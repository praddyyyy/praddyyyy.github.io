interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container = ({ children }: ContainerProps) => {
    return (
      <div className="max-w-10xl mx-auto w-full px-2 sm:px-6 lg:px-8">
        {children}
      </div>
    );
  };
  
  export default Container;
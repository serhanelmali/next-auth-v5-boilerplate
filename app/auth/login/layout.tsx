const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-full bg-black">
      {children}
    </div>
  );
};

export default Layout;

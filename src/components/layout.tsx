interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="overflow-x-hidden text-white min-h-screen">{children}</div>
);

export default Layout;

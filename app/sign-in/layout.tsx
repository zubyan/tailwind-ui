export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Sign In Layout
      <div className="p-4">{children}</div>
    </div>
  );
}

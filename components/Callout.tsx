export function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "tip" }) {
  const colors = {
    info: "bg-blue-50 border-blue-300 text-blue-900",
    warning: "bg-yellow-50 border-yellow-300 text-yellow-900",
    tip: "bg-green-50 border-green-300 text-green-900",
  };

  return (
    <div className={`my-8 p-6 border-l-4 rounded-r-lg ${colors[type]}`}>
      {children}
    </div>
  );
}
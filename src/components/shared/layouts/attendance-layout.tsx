interface AttendanceLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export function AttendanceLayout({
  title = "Attendance Management",
  children,
}: AttendanceLayoutProps) {
  return (
    <div className="container mx-auto py-2">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {children}
    </div>
  );
}

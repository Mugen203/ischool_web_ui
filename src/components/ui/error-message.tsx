interface ErrorMessageProps {
  children: React.ReactNode;
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-destructive">{children}</div>
    </div>
  );
}

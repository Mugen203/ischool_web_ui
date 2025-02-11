import { CalendarIcon } from "lucide-react";

const payments = [
  {
    id: "1",
    amount: 1500,
    dueDate: "2023-07-01",
    description: "Fall Semester Tuition",
  },
  {
    id: "2",
    amount: 300,
    dueDate: "2023-07-15",
    description: "Dormitory Fee",
  },
  {
    id: "3",
    amount: 150,
    dueDate: "2023-08-01",
    description: "Student Activity Fee",
  },
  {
    id: "4",
    amount: 75,
    dueDate: "2023-08-15",
    description: "Lab Fee",
  },
];

export function UpcomingPayments({ fullList = false }) {
  const displayPayments = fullList ? payments : payments.slice(0, 3);

  return (
    <div className="space-y-8">
      {displayPayments.map((payment) => (
        <div key={payment.id} className="flex items-center">
          <CalendarIcon className="h-9 w-9 text-muted-foreground" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {payment.description}
            </p>
            <p className="text-sm text-muted-foreground">
              Due: {payment.dueDate}
            </p>
          </div>
          <div className="ml-auto font-medium">
            ${payment.amount.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}

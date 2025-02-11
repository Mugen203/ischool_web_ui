import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const transactions = [
  {
    id: "1",
    amount: -320,
    date: "2023-06-01",
    description: "Tuition Payment",
    category: "Tuition",
  },
  {
    id: "2",
    amount: -50,
    date: "2023-06-03",
    description: "Bookstore Purchase",
    category: "Books",
  },
  {
    id: "3",
    amount: 500,
    date: "2023-06-05",
    description: "Scholarship Credit",
    category: "Financial Aid",
  },
  {
    id: "4",
    amount: -25,
    date: "2023-06-07",
    description: "Parking Fee",
    category: "Fees",
  },
  {
    id: "5",
    amount: -15,
    date: "2023-06-10",
    description: "Library Fine",
    category: "Fees",
  },
];

export function RecentTransactions({ fullList = false }) {
  const displayTransactions = fullList
    ? transactions
    : transactions.slice(0, 3);

  return (
    <div className="space-y-8">
      {displayTransactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={`/avatars/${transaction.category.toLowerCase()}.png`}
              alt={transaction.category}
            />
            <AvatarFallback>{transaction.category[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.description}
            </p>
            <p className="text-sm text-muted-foreground">{transaction.date}</p>
          </div>
          <div
            className={`ml-auto font-medium ${
              transaction.amount < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {transaction.amount < 0 ? "-" : "+"}$
            {Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}

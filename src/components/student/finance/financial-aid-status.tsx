import { Progress } from "@/components/ui/progress";

export function FinancialAidStatus() {
  const awards = [
    { name: "Federal Pell Grant", amount: 6495, status: "Disbursed" },
    { name: "State Grant", amount: 3000, status: "Pending" },
    { name: "University Scholarship", amount: 5000, status: "Accepted" },
    { name: "Work Study", amount: 2000, status: "Offered" },
  ];

  const totalAid = awards.reduce((sum, award) => sum + award.amount, 0);
  const disbursedAid = awards
    .filter((award) => award.status === "Disbursed")
    .reduce((sum, award) => sum + award.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          Total Financial Aid: ${totalAid.toFixed(2)}
        </h3>
        <Progress value={(disbursedAid / totalAid) * 100} className="mt-2" />
        <p className="text-sm text-muted-foreground mt-1">
          ${disbursedAid.toFixed(2)} disbursed of ${totalAid.toFixed(2)} total
          aid
        </p>
      </div>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{award.name}</p>
              <p className="text-sm text-muted-foreground">{award.status}</p>
            </div>
            <p className="font-medium">${award.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

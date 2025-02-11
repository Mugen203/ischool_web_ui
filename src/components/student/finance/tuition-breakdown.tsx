import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Tuition", value: 10000 },
  { name: "Room & Board", value: 5000 },
  { name: "Books & Supplies", value: 1200 },
  { name: "Student Fees", value: 800 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function TuitionBreakdown() {
  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span className="font-medium">${item.value.toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold pt-2 border-t">
          <span>Total</span>
          <span>
            ${data.reduce((sum, item) => sum + item.value, 0).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

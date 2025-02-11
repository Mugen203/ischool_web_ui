"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Overview from "./overview";
import { RecentTransactions } from "./recent-transactions";
import { UpcomingPayments } from "./upcoming-payments";
import { FinancialAidStatus } from "./financial-aid-status";
import { TuitionBreakdown } from "./tuition-breakdown";
import { PaymentMethods } from "./payment-methods";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DollarSign,
  CreditCard,
  PiggyBank,
  FileText,
  AlertTriangle,
} from "lucide-react";
import type {
  FinanceMetric,
  RequiredDocument,
  TabSection,
} from "@/types/finance";

/**
 * StudentFinance Component
 *
 * Comprehensive financial management dashboard for students.
 * Features include:
 * - Financial overview and metrics
 * - Transaction history
 * - Payment processing
 * - Financial aid status
 * - Tuition breakdown
 *
 * @component
 */
export function StudentFinance() {
  const [balance, setBalance] = useState(5000);

  const metrics: FinanceMetric[] = [
    {
      title: "Current Balance",
      value: balance,
      description: balance >= 0 ? "Credit" : "Outstanding balance",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Upcoming Payment",
      value: 1500,
      description: "Due in 15 days",
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Financial Aid",
      value: 12000,
      description: "Awarded for this year",
      icon: <PiggyBank className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Pending Documents",
      value: 2,
      description: "Action required",
      icon: <FileText className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const requiredDocuments: RequiredDocument[] = [
    { name: "FAFSA Confirmation", status: "approved" },
    { name: "Income Verification Form", status: "pending", dueDate: "5 days" },
    { name: "Scholarship Acceptance Letter", status: "submitted" },
  ];

  const tabs: TabSection[] = [
    { value: "overview", label: "Overview" },
    { value: "transactions", label: "Transactions" },
    { value: "payments", label: "Payments" },
    { value: "financial-aid", label: "Financial Aid" },
    { value: "tuition", label: "Tuition" },
  ];

  return (
    <div className="container mx-auto py-2">
      <h1 className="text-4xl font-bold mb-8">Financial Dashboard</h1>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {typeof metric.value === "number"
                  ? `$${metric.value.toFixed(2)}`
                  : metric.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <Overview />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <UpcomingPayments />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Transactions Tab */}
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>
                A detailed list of all your financial transactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentTransactions fullList />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payments Tab */}
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Make a Payment</CardTitle>
              <CardDescription>Pay your tuition or other fees.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" placeholder="Enter amount" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-method">Payment Method</Label>
                  <PaymentMethods />
                </div>
                <Button type="submit">Submit Payment</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment Schedule</CardTitle>
              <CardDescription>
                View and manage your upcoming payments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingPayments fullList />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Aid Tab */}
        <TabsContent value="financial-aid" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Aid Status</CardTitle>
              <CardDescription>
                Current status of your financial aid application and awards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FinancialAidStatus />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
              <CardDescription>
                Documents needed for your financial aid application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {requiredDocuments.map((doc, index) => (
                  <li
                    key={index}
                    className={
                      doc.status === "pending"
                        ? "text-red-500 flex items-center"
                        : ""
                    }
                  >
                    {doc.status === "pending" && (
                      <AlertTriangle className="h-4 w-4 mr-2" />
                    )}
                    {doc.name}
                    {doc.dueDate && ` (Due in ${doc.dueDate})`}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tuition Tab */}
        <TabsContent value="tuition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tuition Breakdown</CardTitle>
              <CardDescription>
                Detailed breakdown of your tuition and fees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TuitionBreakdown />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

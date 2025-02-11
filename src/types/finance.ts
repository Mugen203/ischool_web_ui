export interface Transaction {
    id: string;
    amount: number;
    date: string;
    description: string;
    category: string;
  }
  
  export interface Payment {
    id: string;
    amount: number;
    dueDate: string;
    description: string;
  }
  
  export interface FinancialAward {
    name: string;
    amount: number;
    status: 'Disbursed' | 'Pending' | 'Accepted' | 'Offered';
  }
  
  export interface TuitionItem {
    name: string;
    value: number;
  }
  
  export interface PaymentMethod {
    value: string;
    label: string;
  }

  export interface FinanceMetric {
    title: string;
    value: number | string;
    description: string;
    icon: React.ReactNode;
  }
  
  export interface RequiredDocument {
    name: string;
    status: 'pending' | 'submitted' | 'approved';
    dueDate?: string;
  }

  export interface TabSection {
    value: string;
    label: string;
  }
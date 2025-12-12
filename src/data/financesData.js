import { capitalize, compactDateFormatter } from "../utils/helpers";



export const payoutsData = [
    {
      id: 'PAY-001',
      date: '2024-11-25',
      amount: 2800.00,
      status: 'completed',
      method: 'Bank Account - ****1234',
      description: 'Monthly payout for October 2024',
      transactionId: 'TXN-456789'
    },
    {
      id: 'PAY-002',
      date: '2024-11-20',
      amount: 1200.00,
      status: 'completed',
      method: 'PayPal - user@example.com',
      description: 'Course sales payout',
      transactionId: 'TXN-456788'
    },
    {
      id: 'PAY-003',
      date: '2024-11-15',
      amount: 3200.00,
      status: 'pending',
      method: 'Bank Account - ****1234',
      description: 'November 2024 payout',
      transactionId: 'TXN-456790'
    },
    {
      id: 'PAY-004',
      date: '2024-11-10',
      amount: 500.00,
      status: 'processing',
      method: 'Stripe Connect',
      description: 'Affiliate commission',
      transactionId: 'TXN-456791'
    },
    {
      id: 'PAY-005',
      date: '2024-10-28',
      amount: 2400.00,
      status: 'completed',
      method: 'Bank Account - ****1234',
      description: 'Monthly payout for September 2024',
      transactionId: 'TXN-456787'
    },
    {
      id: 'PAY-006',
      date: '2024-10-15',
      amount: 750.00,
      status: 'failed',
      method: 'PayPal - user@example.com',
      description: 'Course sales payout',
      transactionId: 'TXN-456786'
    }
  ];

export const ordersColumnHeader = [
  {
    header: "Reference",
    value: (row) => row.payment_reference?.slice(0, 7),
    className: ""
  },
  {
    header: "Course Title",
    key: "course_title"
  },
  {
    header: "Amount",
    value: (row) => `$${row.total_paid?.toLocaleString()}`,
    className: ""
  },
  {
    header: "Date",
    value: (row) => compactDateFormatter(row.created_at),
    className: ""
  },
  {
    header: "Status",
    value: (row) => capitalize(row.payment_status),
    className: ""
  },
  {
    header: "Actions",
    value: "", 
    className: ""
  }
];

export const paymentsColumnHeader = [
    {
        header: "Amount", 
        value: (row) => `$${row.amount_paid?.toLocaleString()}`,
        className: ""
    },   
    {
        header: "Payment Reference", 
        value: (row) => row.payment_reference?.slice(0, 7),
        className: ""
    }, 
    {
        header: "Order Title", 
        value: (row) => row.order_title,
        className: ""
    }, 
    {
        header: "Date", 
        value: (row) => compactDateFormatter(row.created_at), 
        className: ""
    }, 
    {
        header: "Status", 
        value: (row) => capitalize(row.payment_status),
        className: ""
    }, 
    // {
    //     header: "Action", 
    //     className: ""
    // }, 
]
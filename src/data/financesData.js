


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
        header: "Payment Reference", 
        className: ""
    }, 
    {
        header: "Course Title", 
        className: ""
    }, 
    {
        header: "Amount", 
        className: ""
    }, 
    {
        header: "Date", 
        className: ""
    }, 
    {
        header: "Status", 
        className: ""
    }, 
    {
        header: "Action", 
        className: ""
    }, 
]
export const paymentsColumnHeader = [
    {
        header: "Amount", 
        className: ""
    }, 
    {
        header: "Payment Reference", 
        className: ""
    }, 
    {
        header: "Order Title", 
        className: ""
    }, 
    {
        header: "Date", 
        className: ""
    }, 
    {
        header: "Status", 
        className: ""
    }, 
    // {
    //     header: "Action", 
    //     className: ""
    // }, 
]
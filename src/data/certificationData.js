export const certificationData = [
    {
      id: 'CERT-001',
      studentName: 'John Doe',
      courseName: 'Introduction to AI',
      issueDate: '2024-11-15',
      status: 'issued',
      verificationCode: 'AI2024-XY7Z-4K9P',
      email: 'john.doe@example.com'
    },
    {
      id: 'CERT-002',
      studentName: 'Sarah Johnson',
      courseName: 'Advanced React Development',
      issueDate: '2024-11-20',
      status: 'issued',
      verificationCode: 'RCT2024-AB3C-5D8E',
      email: 'sarah.j@example.com'
    },
    {
      id: 'CERT-003',
      studentName: 'Michael Chen',
      courseName: 'Digital Marketing Fundamentals',
      issueDate: '2024-11-22',
      status: 'pending',
      verificationCode: null,
      email: 'mchen@example.com'
    },
    {
      id: 'CERT-004',
      studentName: 'Emma Wilson',
      courseName: 'Data Science Bootcamp',
      issueDate: '2024-11-25',
      status: 'issued',
      verificationCode: 'DS2024-QW9R-2T5Y',
      email: 'emma.w@example.com'
    },
    {
      id: 'CERT-005',
      studentName: 'David Martinez',
      courseName: 'Web Design Essentials',
      issueDate: '2024-11-27',
      status: 'revoked',
      verificationCode: 'WD2024-UI7K-3N6M',
      email: 'dmartinez@example.com'
    }
  ];

export const certificationColumnHeader = [
    {
        header: "Student", 
        className: ""
    }, 
    {
        header: "Course", 
        className: ""
    },  
    {
        header: "Issue Date", 
        className: ""
    }, 
    {
        header: "Verification Code", 
        className: ""
    },
    {
        header: "Status", 
        className: ""
    },
    {
        header: "Actions", 
        className: ""
    },
]
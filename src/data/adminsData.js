export const adminsData = [
    { id: 1, name: 'John Smith', email: 'john.smith@lms.com', role: 'Super Admin', status: 'Active', joinedDate: '2024-01-15', lastActive: '2 hours ago', avatar: 'JS' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@lms.com', role: 'Admin', status: 'Active', joinedDate: '2024-02-20', lastActive: '1 day ago', avatar: 'SJ' },
    { id: 3, name: 'Michael Chen', email: 'mchen@lms.com', role: 'Admin', status: 'Active', joinedDate: '2024-03-10', lastActive: '3 hours ago', avatar: 'MC' },
    { id: 4, name: 'Emma Davis', email: 'emma.d@lms.com', role: 'Moderator', status: 'Inactive', joinedDate: '2023-12-05', lastActive: '2 weeks ago', avatar: 'ED' },
  ];

export const adminsColumnHeader = [
    {
        header: "Admin", 
        className: ""
    }, 
    {
        header: "Email", 
        className: ""
    },  
    // {
    //     header: "Role", 
    //     className: ""
    // }, 
    {
        header: "Status", 
        className: ""
    },
    {
        header: "Joined Date", 
        className: ""
    },
    {
        header: "Actions", 
        className: "text-right"
    },
]
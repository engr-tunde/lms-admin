export const usersData = [
    { id: 1, name: 'Alice Williams', email: 'alice.w@student.com', enrolledCourses: 5, status: 'Active', joinedDate: '2024-01-10', lastActive: '5 min ago', avatar: 'AW' },
    { id: 2, name: 'Bob Martinez', email: 'bob.m@student.com', enrolledCourses: 3, status: 'Active', joinedDate: '2024-02-14', lastActive: '1 hour ago', avatar: 'BM' },
    { id: 3, name: 'Carol Thompson', email: 'carol.t@student.com', enrolledCourses: 8, status: 'Active', joinedDate: '2023-11-22', lastActive: '30 min ago', avatar: 'CT' },
    { id: 4, name: 'David Lee', email: 'david.l@student.com', enrolledCourses: 2, status: 'Suspended', joinedDate: '2024-03-05', lastActive: '1 week ago', avatar: 'DL' },
    { id: 5, name: 'Eva Rodriguez', email: 'eva.r@student.com', enrolledCourses: 6, status: 'Active', joinedDate: '2024-01-28', lastActive: '2 hours ago', avatar: 'ER' },
    { id: 6, name: 'Frank Wilson', email: 'frank.w@student.com', enrolledCourses: 4, status: 'Active', joinedDate: '2024-02-18', lastActive: '15 min ago', avatar: 'FW' },
  ];

export const usersColumnHeader = [
    {
        header: "User", 
        className: ""
    }, 
    {
        header: "Email", 
        className: ""
    },  
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
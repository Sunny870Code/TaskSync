const employee = [
  {
    "id": 1,
    "name": "s",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "failed": 1,
      "total": 3
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Design Landing Page",
        "description": "Create a responsive landing page for the product.",
        "date": "2026-02-20T10:00:00Z",
        "category": "UI/UX"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "title": "Database Backup",
        "description": "Ensure database backup runs successfully.",
        "date": "2026-02-18T09:30:00Z",
        "category": "Backend"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Write Blog Post",
        "description": "Write a blog post about the new feature launch.",
        "date": "2026-02-19T14:00:00Z",
        "category": "Content"
      }
    ]
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "failed": 1,
      "total": 4
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Setup CI/CD Pipeline",
        "description": "Configure CI/CD for the new project repository.",
        "date": "2026-02-21T11:00:00Z",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "title": "Fix Login Bug",
        "description": "Resolve the issue causing login failures for some users.",
        "date": "2026-02-18T16:00:00Z",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Update Documentation",
        "description": "Update API documentation with the latest endpoints.",
        "date": "2026-02-19T09:00:00Z",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": true,
        "failed": false,
        "title": "Client Meeting",
        "description": "Discuss project requirements with the client.",
        "date": "2026-02-20T13:00:00Z",
        "category": "Management"
      }
    ]
  },
  {
    "id": 3,
    "name": "Amit Patel",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "failed": 1,
      "total": 3
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Code Review",
        "description": "Review pull requests and provide feedback.",
        "date": "2026-02-20T12:00:00Z",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Optimize Queries",
        "description": "Improve database query performance.",
        "date": "2026-02-19T15:30:00Z",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "title": "Update Dependencies",
        "description": "Update project dependencies and test for breaks.",
        "date": "2026-02-18T10:00:00Z",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": 4,
    "name": "Neha Kapoor",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "failed": 1,
      "total": 4
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Create Marketing Banner",
        "description": "Design a promotional banner for social media campaigns.",
        "date": "2026-02-20T14:00:00Z",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "title": "Email Campaign Test",
        "description": "Test the new email campaign workflow.",
        "date": "2026-02-19T11:00:00Z",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Prepare slides for the upcoming client meeting.",
        "date": "2026-02-21T09:00:00Z",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Social Media Update",
        "description": "Post updates on social media channels.",
        "date": "2026-02-20T17:00:00Z",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 5,
    "name": "Arjun Singh",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "failed": 1,
      "total": 4
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Frontend Bug Fix",
        "description": "Fix UI bugs reported in the latest release.",
        "date": "2026-02-20T10:30:00Z",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "title": "Server Maintenance",
        "description": "Perform scheduled server maintenance.",
        "date": "2026-02-19T12:00:00Z",
        "category": "Backend"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Write Unit Tests",
        "description": "Add unit tests for the new feature module.",
        "date": "2026-02-21T15:00:00Z",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Team Sync Meeting",
        "description": "Daily standup with the development team.",
        "date": "2026-02-20T09:00:00Z",
        "category": "Management"
      }
    ]
  }
]

const admin = [
  {
    "id": 1,
    "name" : "Kunal",
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = ( ) => {
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employee =JSON.parse(localStorage.getItem('employee'))
    const admin =JSON.parse(localStorage.getItem('admin'))
    console.log("local test",employee,admin)

    return{employee, admin}

}
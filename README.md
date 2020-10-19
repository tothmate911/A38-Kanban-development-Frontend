# A38-Kanban-development-Frontend

## Short description
This application is a kanban board. In the board you can see, filter and manipulate your gitlab issues. The columns of the board are the statuses of the issues. The swimlanes are optionally assignees or stories of the issues.  

Our application uses OAuth to access the datas in gitlab. We use graphQL API to get the issues from gitlab, and then we show them on a kanban board.

This is the frontend of the application, which is written in React.
The backend is a Spring application (https://github.com/tothmate911/A38-Kanban-development-Backend).


For configuration and deployment, please see the Readme file of the backend repository.

# LinkUp - Collaborative Calendar Application

LinkUp is a powerful, real-time calendar application designed for group collaboration and seamless event management. It allows users to create and manage multiple calendars, collaborate in real-time with team members, and sync with external calendars like Google and Apple. With flexible views, messaging, and data integrity at the core, LinkUp offers a dynamic and user-friendly experience.

## Features

- **Multiple Calendars**: Manage different calendars with unique settings.
- **Group Collaboration**: Invite, chat, and make changes with your team in real-time.
- **View Modes**: Toggle between monthly and weekly calendar views.
- **Sync with Google & Apple Calendars**: Import, export, and synchronize with external calendars.
- **Real-Time Updates**: Stay updated with live changes using WebSockets.
- **Messaging & Friend Requests**: Send messages, add friends, and manage connections.

## Tech Stack

### Frontend:
- **React**: A modern JavaScript library for building interactive UIs.
- **HTML/CSS**: For the layout and responsive design.
- **JavaScript**: Handles all interactivity and logic in the app.

### Backend:
- **Express.js**: A Node.js framework to handle API routes and HTTP requests.
- **WebSockets**: For real-time communication between users.
- **PostgreSQL**: A relational database to store structured data like events and calendars.
- **MongoDB**: A NoSQL database for quick-read/write operations, used for messaging and invatations.

## How It Works

### Real-Time Collaboration:
- Using WebSockets, changes made by one user are reflected in real-time for all users connected to the same calendar.
- Users can invite friends to their calendars and chat in-app, fostering a collaborative environment.

### Syncing with External Calendars:
- The app integrates with the **Google Calendar API** for easy syncing and management of events.
- For Apple users, **CalDAV** protocol is used for syncing Apple Calendar data.

### Calendar Views:
- Switch between a **monthly view** to see your entire schedule at a glance, or a **weekly view** for a more detailed breakdown.
- Each calendar can be customized with colors and settings to suit user preferences.



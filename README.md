# <img width="80" height="80" alt="Bhara Bari reverse - Rental Home Service-fotor-bg-remover-2025120791530" src="https://github.com/user-attachments/assets/ce547406-9e6b-41d2-a8e0-23555220bfcf" /> | BharaBari 
BharaBari is a Rental Home Service website built to enhance the online communication system between the renters and the landlords. It should be an online platform to make the communication authentically easier and safe within the era of advanced technology. A simple online service for searching rental homes.

> Course  : Software Engineering </br>
> Code    : CSE327.6 </br> 
> Faculty : IQN </br> 
> Semester: Fall 2025 </br> 
> North South University 


## Tech-Stack 
> Frontend: HTML, CSS, JavaScript </br>
> Database: Supabase </br>
> Back-end: Javascript, Node.js </br>
```
Frontend (HTML/CSS/JS)
↓ API calls
Backend (Node.js / Express)
↓ Services + Patterns
Supabase (PostgreSQL + Storage)
```

## Class Diagrams
### User-related classes (Factory + Singleton)
```
                ┌───────────────────┐
                │     BaseUser      │
                │- userId           │
                │- username         │
                │- email            │
                │- role             │
                │- contact          │
                └───────┬───────────┘
                        │
      ┌─────────────────┼───────────────────┐
      │                 │                   │
┌────────────┐   ┌──────────────┐   ┌─────────────┐
│   Renter   │   │   Landlord   │   │    Admin    │
└────────────┘   └──────────────┘   └─────────────┘

        ▲
        │ factory creates
        │
┌─────────────────────────────────────┐
│            UserFactory              │  ← Factory Pattern
└─────────────────────────────────────┘
```

### Flat-related classes (Builder + Facade)
```
┌───────────────┐
│     Flat      │
│- id           │
│- location     │
│- rent         │
│- rooms        │
│- landlordId   │
└───────▲───────┘
        │
┌────────────────────┐
│     FlatBuilder    │  ← Builder Pattern
└────────────────────┘

┌──────────────────────────┐
│    FlatServiceFacade     │  ← Facade Pattern
│ + createFlat()           │
│ + uploadImages()         │
│ + updateFlat()           │
└──────────────────────────┘
```

### Search Filtering (Strategy Pattern)
```
         ┌──────────────────────┐
         │    SearchStrategy    │ ← interface
         └───────────┬──────────┘
                     │
     ┌───────────────┼──────────────────┐
     │               │                  │
┌──────────────┐ ┌──────────────┐ ┌─────────────┐
│LocationFilter│ │RentFilter    │ │RoomFilter   │  ← Strategy classes
└──────────────┘ └──────────────┘ └─────────────┘

```

### Negotiation & Notifications (Observer Pattern)
```
┌─────────────────────┐
│  NotificationCenter │  ← Subject
└─────────────────────┘
           ▲ notify
      ┌────┴─────────────┬─────────────┐
      │                  │             │
┌────────────┐   ┌─────────────┐ ┌───────────────┐
│   Renter   │   │   Landlord  │ │    Admin      │  ← Observers
└────────────┘   └─────────────┘ └───────────────┘

```

## Backend Architecture 
```
/BharaBari_Website
│
├── /src
│   ├── /config      → Singleton (DB connection)
│   ├── /factories   → Factory Pattern
│   ├── /strategies  → Strategy Pattern
│   ├── /observer    → Observer Pattern
│   ├── /builders    → Builder Pattern
│   ├── /facade      → Facade Pattern
│   ├── /controllers → Express route handlers
│   ├── /services    → Business logic
│   ├── /routes      → API endpoints
│   └── app.js       → Main server
│
├── /template
|
|
└── package.json
``` 

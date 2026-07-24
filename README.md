# DUST
### Distributed Unified Swarm Technology
---
# Team Details:
**Team Name:** VEER
## Members:
- G V MANISH
- RAYHAAN SHAH B 
- KEERTHANA PUGALENTHI
---
## Hackathon:
### RUSH HOUR HACKATHON
---
# Introduction:

Industrial facilities require continuous inspection of machinery, hazardous zones, pipelines, warehouses, and production environments. Manual inspection is time-consuming, expensive, and exposes workers to unnecessary risks.

Existing monitoring systems lack centralized fleet management, intelligent automation, and AI-assisted operational support.

Our solution provides an integrated web platform that allows industries to manage autonomous inspection rovers, monitor their operations in real time, assign missions, analyze sensor data, and interact with an AI assistant capable of answering operational questions using an SQL-backed knowledgebase.

---

# Proposed Solution

Our platform centralizes rover fleet management into a single intelligent dashboard.

The application enables secure user authentication, autonomous facility mapping, AI-assisted knowledge retrieval, live fleet monitoring, remote rover control, mission scheduling, sensor analytics, and predictive AI alerts.

The integrated AI assistant leverages an SQL knowledge base through Ollama to provide accurate and contextual responses regarding industrial operations, rover maintenance, mission history, equipment documentation, and troubleshooting procedures.

---
# Features
- Autonomous Facility Mapping
- Rover Fleet Management
- Mission Management
- Interactive 3D Rover Dashboard
- Live Monitoring
- Real-Time Rover Health Monitoring
- Remote Operations

---

# Tech Stack

**Frontend**
- React.js
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

**Backend**
- Node.js
- Express.js

**Database**
- MySQL

**Artificial Intelligence**
- Ollama (Llama 3)
- LangChain
- Retrieval-Augmented Generation (RAG)

**Authentication & Security**
- JSON Web Token (JWT)
- bcrypt.js

**3D Visualization**
- Three.js
- React Three Fiber
- Drei

**Maps & Navigation**
- Leaflet.js
- OpenStreetMap

**Data Visualization**
- Recharts

**API Communication**
- REST API
- Axios

**Real-Time Communication**
- Socket.IO (WebSockets)

**Development Tools**
- Visual Studio Code
- Git
- GitHub
- Postman

**Deployment**
- Vercel (Frontend)
- Render (Backend)

---

# Application Workflow

```

 User Login

      |

  Dashboard

      |

 Select Rover

      |

Assign Mission

      |

Rover Navigation

      |

Sensor Collection

      |

   Database

      |

 AI Analysis

      |

   Alerts

      |

Mission Report

```
---

# Project Structure
## Frontend

```
DUST/
│
├── client/                         
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Dashboard/
│   │   │   ├── Mission/
│   │   │   ├── Rover/
│   │   │   ├── AIAssistant/
│   │   │   └── Settings/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts

```
---

## Backend

```

├── server/                         
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── sockets/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── ai/
│   ├── prompts/
│   ├── embeddings/
│   ├── rag/
│   └── ollama.js
│
├── docs/
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```
---
## AI/ML Workflow

```
                    Industrial Rover
                           │
                           
             Camera & Sensor Data Collection
                           │
                           
                Data Processing Pipeline
                           │
             ┌─────────────┴─────────────┐
             │                           │
                                       
      Defect Detection            User AI Query
             │                           │
                                    
   AI Risk & Severity Analysis    Retrieve Data (MySQL)
             │                           │
                                       
    Generate Smart Alert        Build Context (Ollama)
             │                           │
             └─────────────┬─────────────┘
                           
               Llama 3 Response Generation
                           │
                           
        Dashboard Notification & AI Assistant
```
---

# Future Scope

- Voice-Controlled AI Assistant
- Multi-Industry Support
- Predictive Maintenance
- Computer Vision Defect Detection
- Cloud-Based Fleet Management
- Mobile Application
- IoT Device Integration
- Autonomous Navigation Enhancement

---






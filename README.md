# Footactiq — AI Tactical Football Analysis

AI-powered match analysis built for local and semi-professional football clubs.

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 14 (App Router)           |
| Language    | TypeScript                        |
| Styling     | Tailwind CSS                      |
| Database    | MongoDB Atlas (free M0 tier)      |
| ORM         | Mongoose                          |
| Email       | ZeptoMail (transactional)         |
| Hosting     | Vercel (recommended, free tier)   |

---

## Local Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
```bash
cp .env.example .env.local
```
Open `.env.local` and fill in your values (see details below).

### 3. Run dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

### MongoDB Atlas
1. Visit [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a **free M0 cluster** (512MB, always free)
3. Under **Security → Database Access**, create a user with read/write permissions
4. Under **Security → Network Access**, add `0.0.0.0/0` (or your IP)
5. Click **Connect → Drivers**, copy the URI
6. Paste it as `MONGODB_URI` in `.env.local`, replacing `<password>` and setting the DB name to `footactiq`

```
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/footactiq?retryWrites=true&w=majority
```

### ZeptoMail
1. Visit [zeptomail.zoho.com](https://zeptomail.zoho.com) and create a free account
2. Create a **Mail Agent**
3. Go to **Sending Domains**, add and verify your domain (add DNS records)
4. Copy the **Send Mail Token** from your Mail Agent
5. Paste it as `ZEPTOMAIL_TOKEN` in `.env.local`

```
ZEPTOMAIL_TOKEN=Zoho-enczapikey xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FROM_EMAIL=hello@yourdomain.com
FROM_NAME=Footactiq
ADMIN_EMAIL=you@yourdomain.com
```

---

## API Routes

| Method | Endpoint        | Description                  |
|--------|-----------------|------------------------------|
| POST   | `/api/waitlist` | Subscribe email to waitlist  |
| GET    | `/api/waitlist` | Health check                 |

### POST `/api/waitlist`

**Request body:**
```json
{ "email": "user@example.com" }
```

**Responses:**
| Status | Meaning                         |
|--------|---------------------------------|
| 201    | Subscribed, welcome email sent  |
| 400    | Invalid / missing email         |
| 409    | Email already on the list       |
| 500    | Server error                    |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Global styles + CSS variables
│   └── api/
│       └── waitlist/
│           └── route.ts        # POST /api/waitlist
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky navigation
│   │   └── Footer.tsx          # Footer with links
│   └── sections/
│       ├── HeroSection.tsx     # Hero + stadium graphic
│       ├── MarqueeSection.tsx  # Scrolling ticker
│       ├── FeaturesSection.tsx # 4 feature cards
│       ├── HowItWorksSection.tsx  # 4-step process
│       ├── AICoachSection.tsx  # Interactive AI demo
│       ├── StatsSection.tsx    # Animated counters
│       ├── TestimonialsSection.tsx # Scrolling quotes
│       ├── PricingSection.tsx  # 3 pricing tiers
│       └── CTASection.tsx      # Email capture + API call
├── lib/
│   ├── mongodb.ts              # Mongoose connection singleton
│   └── mailer.ts               # ZeptoMail sender
└── models/
    └── Subscriber.ts           # Mongoose subscriber schema
```

---

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Set your environment variables in the Vercel dashboard under **Project → Settings → Environment Variables**. Copy all variables from `.env.example`.

---

## Color Palette

| Token        | Hex       | Usage                     |
|--------------|-----------|---------------------------|
| Dark Navy    | `#0A192F` | Main background           |
| Deep Green   | `#0B6E4F` | Section backgrounds       |
| Electric Blue| `#3B82F6` | Buttons, links, accents   |
| Dark Grey    | `#111827` | Cards, UI panels          |
| White        | `#FFFFFF` | Primary text              |
| Accent Green | `#10B981` | Success states, badges    |

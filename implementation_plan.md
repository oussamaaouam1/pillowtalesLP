# Waitlist & Support Implementation Guide

This document serves as both the backend architecture plan and the API contract for the landing page LLM. 

## 🌐 API Contract for the Landing Page

The backend (Convex) will expose two public, CORS-enabled HTTP endpoints. The landing page can call these endpoints directly from the browser using `fetch()`. No API keys or SDKs are needed on the frontend.

**Environment Variable Required on Frontend:**
```env
CONVEX_SITE_URL=https://ardent-dachshund-882.convex.site
```

### 1. Waitlist Endpoint
Call this when a user submits their email to join the waitlist.

- **URL:** `POST {CONVEX_SITE_URL}/waitlist/join`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
  ```json
  {
    "email": "parent@example.com"
  }
  ```
- **Responses:**
  - `200 OK`: Successfully added to waitlist.
  - `400 Bad Request`: Invalid email.

### 2. Support Ticket Endpoint
Call this when a user fills out the "Contact Us" or "Support" form.

- **URL:** `POST {CONVEX_SITE_URL}/support/submit`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "I have a question about the app..."
  }
  ```
- **Responses:**
  - `200 OK`: Ticket saved to database AND forwarded to admin email.
  - `400 Bad Request`: Missing fields.
  - `500 Internal Server Error`: Failed to send email via Resend.

---

## 🛠️ Backend Implementation Plan (For Convex)

To make those two URLs work, we need to apply the following updates to the Convex backend:

### 1. Update Database Schema (`convex/schema.ts`)
Add two new tables to store the collected data permanently:
- `waitlist`: Stores `email` and `createdAtMs`.
- `supportTickets`: Stores `name`, `email`, `message`, `status` ("open"), and `createdAtMs`.

### 2. Create the Actions (`convex/landingPage.ts`)
Create the new `httpAction` handlers:
- **`submitWaitlist`**: 
  - Validates email format.
  - Saves to the `waitlist` table via an internal mutation.
  - Returns `200 OK` with CORS headers.
- **`submitSupport`**: 
  - Validates name, email, and message.
  - Saves to the `supportTickets` table via an internal mutation.
  - Uses the existing `RESEND_API_KEY` to dispatch an email immediately to the admin inbox containing the user's message and reply-to address.
  - Returns `200 OK` with CORS headers.

### 3. Update Router (`convex/http.ts`)
Register the two `POST` routes and their corresponding `OPTIONS` routes (to satisfy browser CORS preflight checks) in the HTTP router.

## Open Questions for You
> [!IMPORTANT]
> When a user submits a Support Ticket on the landing page, the backend will forward it to your email inbox. What email address should receive these support tickets? (e.g., `support@pillowtales.com`, or your personal email?)

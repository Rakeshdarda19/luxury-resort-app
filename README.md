## Luxury Resort App (MERN)

### Setup

#### 1) Server

From `Luxury-resort-app/server`:

- Copy `env.example` to `.env` (create it manually) and set:
  - `MONGODB_URI`
  - `CORS_ORIGIN` (defaults to `http://localhost:5173`)
- Run:
  - `npm install`
  - `npm run dev`

#### 2) Client

From `Luxury-resort-app/client`:

- Copy `env.example` to `.env` (create it manually) if you want a custom API URL
- Run:
  - `npm install`
  - `npm run dev`

### Figma assets (pixel-perfect requirement)

Export all images/icons from Figma and place them in:

- `client/src/assets/figma/`

Then replace the placeholder blocks in `client/src/pages/HomePage.jsx` with `<img>` tags pointing to those exported assets.

### API

- `POST /api/enquiries`
  - Saves modal enquiry form submissions to MongoDB.


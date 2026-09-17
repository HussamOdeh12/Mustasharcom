# Mustasharcom for Informatics Solutions — Official Corporate Website

Official bilingual corporate website for **Mustasharcom for Informatics Solutions** (مستشاركم للحلول المعلوماتية), an Abu Dhabi-headquartered IT consultancy and digital transformation firm (Commercial Licence CN-2769971, ISO 9001:2015 certified, 55.03% In-Country Value score).

- **Canonical Production URL**: [https://mustasharcom.ae](https://mustasharcom.ae)
- **Secondary Domain**: [https://www.mustasharcom.ae](https://www.mustasharcom.ae) (Redirects to canonical)

---

## 1. Technology Stack

- **Framework**: Next.js 15 (App Router with bilingual root layouts `(en)` and `(ar)`)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5
- **Icons**: Lucide React
- **Internationalization**: Native server-rendered `lang="en" dir="ltr"` and `lang="ar" dir="rtl"`

---

## 2. Project Structure

```
├── app/
│   ├── (en)/                   # English route group (<html lang="en" dir="ltr">)
│   │   ├── layout.tsx          # English root layout with OpenGraph & Schema.org JSON-LD
│   │   ├── page.tsx            # English homepage
│   │   ├── about/              # Leadership & corporate heritage
│   │   ├── services/           # Services catalog overview
│   │   │   └── [slug]/         # Dynamic service practice pages (6 practices)
│   │   ├── projects/           # 12-project verified enterprise registry
│   │   ├── quality-compliance/ # ISO 9001:2015 & ICV 55.03% credentials
│   │   ├── contact/            # Enterprise contact & RFP form
│   │   ├── privacy/            # English privacy policy
│   │   └── terms/              # English terms of service
│   ├── (ar)/                   # Arabic route group (<html lang="ar" dir="rtl">)
│   │   ├── layout.tsx          # Arabic root layout with OpenGraph & Arabic Schema.org
│   │   └── ar/                 # Arabic localized pages mirroring English paths
│   ├── api/
│   │   └── contact/            # Server-side contact & inquiry submission handler
│   ├── globals.css             # Tailwind v4 import and RTL font rules
│   ├── robots.ts               # Production indexing & Vercel preview protection
│   └── sitemap.ts              # Bilingual XML sitemap with bidirectional hreflang
├── components/
│   ├── forms/                  # Enterprise Contact & RFP form components
│   ├── layout/                 # Persistent Header and Footer navigation
│   ├── pages/                  # Shared modular page views
│   ├── projects/               # Filterable project explorer & drawer
│   ├── sections/               # Modular content sections
│   └── ui/                     # Accessible UI widgets (LanguageSwitcher, Breadcrumbs, etc.)
├── lib/
│   ├── company-data.ts         # CENTRAL DATA SOURCE: Profile, Services, Projects, Certifications
│   ├── translations.ts         # CENTRAL STRINGS: Bilingual dictionary for UI chrome
│   └── utils.ts                # Styling & class name helper utilities
├── public/                     # Optimized brand assets, logos, and favicons
└── next.config.ts              # Legacy redirects, security headers, standalone output
```

---

## 3. Maintenance & Content Updates

All institutional content is strictly centralized to avoid code-level fragmentation:

- **Company Profile, Metrics, & Certifications**: Edit `lib/company-data.ts` (`COMPANY_PROFILE`)
- **Service Practices**: Edit `lib/company-data.ts` (`SERVICES_CATALOG`)
- **Project Engagements**: Edit `lib/company-data.ts` (`PROJECTS_REGISTER`)
- **Bilingual UI Translations**: Edit `lib/translations.ts` (`UI_STRINGS`)

---

## 4. Local Installation & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/mustasharcom-website.git
   cd mustasharcom-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the English site or [http://localhost:3000/ar](http://localhost:3000/ar) for the Arabic site.

4. **Run linter**:
   ```bash
   npm run lint
   ```

5. **Run TypeScript type validation**:
   ```bash
   npx tsc --noEmit
   ```

6. **Create a production build**:
   ```bash
   npm run build
   ```

---

## 5. Environment Variables

Create a `.env.local` file for local development (refer to `.env.example`):

| Variable | Required | Default / Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Optional | `https://mustasharcom.ae` (Canonical production URL) |

*Note: In Vercel deployments, `NEXT_PUBLIC_SITE_URL` is set to `https://mustasharcom.ae`. The codebase automatically defaults to `https://mustasharcom.ae` even if this variable is left unset.*

---

## 6. GitHub & Vercel Deployment Workflow

### Step 1: Push to GitHub
Commit all files and push the repository to GitHub:
```bash
git add .
git commit -m "feat: complete production release for Mustasharcom website"
git branch -M main
git remote add origin https://github.com/your-org/mustasharcom-website.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Select your GitHub repository (`mustasharcom-website`).
4. **Framework Preset**: Automatically detected as `Next.js`.
5. **Root Directory**: `./`
6. **Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL`: `https://mustasharcom.ae`
7. Click **Deploy**.

### Step 3: Custom Domain Configuration
1. In the Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Add `mustasharcom.ae` and select **Recommended redirect: www.mustasharcom.ae → mustasharcom.ae**.
3. Update your DNS records at your domain registrar:
   - **A Record**: `@` → `76.76.21.21` (or Vercel Anycast IP)
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
4. Vercel automatically provisions an SSL/TLS certificate.

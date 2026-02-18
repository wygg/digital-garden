---
date: 2026-02-18
tags:
- vercel
- deployment
- ci-cd
- study
title: Vercel Automated Publishing Technical Review & SOP
---

# 🚀 From GitHub to Vercel: A Complete Breakdown of the Automated Publishing Process

#public

## 1. Revealing the Principle: How is a Website Created?

In the past, to put a website online, you had to:
1.  Buy a server (Cloud host)
2.  Install Nginx/Apache
3.  Configure the Linux environment
4.  Manually upload files (FTP/SCP)

In the era of Vercel, this has transformed into a **CI/CD (Continuous Integration/Continuous Deployment)** automated pipeline.

**Core Mechanism: Webhook**

When you execute `git push` locally:
1.  **Trigger**: GitHub receives the code and immediately sends an HTTP request (Webhook) to Vercel.
2.  **Response**: Vercel receives the message: "Hey, wygg updated the code!"
3.  **Pull**: Vercel's server immediately pulls your code from GitHub.
4.  **Build**: Vercel runs `npm install` and `npm run build` in its cloud container.
5.  **Distribution**: The built static files (HTML/CSS/JS) are pushed to global CDN nodes.

---

## 2. Detailed Step-by-Step SOP

### Phase 1: Establish Connection (Link)

**Action**:
In the Vercel console, click `Import Project` -> Select the `digital-garden` repository.

**Technical Details**:
*   **Authorization (OAuth)**: Vercel gains permission to read this specific GitHub repository.
*   **Configuration Recognition**: Vercel automatically scans `package.json`.
    *   Finds `astro` dependency -> Identifies it as an Astro framework.
    *   Automatically sets Build Command: `astro build`.
    *   Automatically sets Output Directory: `dist` (Astro's default).

### Phase 2: Build Pipeline

What happens in the Vercel background after you click Deploy? (You can see this in Deployment -> Logs)

1.  **Clone**: `git clone https://github.com/wygg/digital-garden.git`
2.  **Dependencies**: `npm install`
    *   Downloads thousands of packages like `astro`, `react`, and `tailwindcss`.
    *   This is why we **don't need** to upload `node_modules` to GitHub; Vercel reinstalls them based on the `package.json` manifest.
3.  **Build**: `npm run build` (i.e., `astro build`)
    *   **Astro's Job**: It compiles your `.astro` and `.md` files into pure HTML.
    *   **Static Site Generation (SSG)**: It executes `getStaticPaths` to generate an independent HTML page for every Markdown article.
4.  **Upload**:
    *   The generated `dist/` folder (containing HTML/CSS/JS/Images) is uploaded to Vercel's storage bucket.

### Phase 3: Global Distribution (Edge Network)

This is the most magical step.
Vercel doesn't just store files; it pushes them to hundreds of **Edge nodes** worldwide.

*   **Result**:
    *   US users access -> Routed to US node.
    *   Chinese users access -> Routed to HK/Singapore/Japan nodes.
    *   Extremely fast, without you having to configure a CDN yourself.

---

## 3. Troubleshooting

### Q: Why does Vercel error "Command not found: astro"?
*   **Reason**: `astro` might not be listed in `dependencies` in `package.json`, or you uploaded `node_modules` causing conflicts.
*   **Solution**: Ensure `npm run build` works locally and `.gitignore` includes `node_modules`.

### Q: Why hasn't the website changed after updating an article?
*   **Reason**: Vercel build might have failed (e.g., a Markdown formatting error crashed the compilation).
*   **Solution**: Check the latest Deployment Logs in the Vercel Dashboard. If it's a red Error, the website won't update even if the GitHub push was successful.

### Q: How do I customize my domain?
*   **Action**: Vercel -> Settings -> Domains.
*   You can buy a domain like `wygg.com` and add a CNAME record at your registrar pointing to `cname.vercel-dns.com`.

---

## 4. Your "Publish Button"

Now, your publishing process is simplified to:

**Write Article -> Run Sync Script -> Git Push**

Vercel handles all the rest (building, distribution, cache invalidation). That's the power of modern engineering.

---

## 5. Antigravity Iron Workflow (Executive Summary)

This is our refined **"Unity of Knowledge and Action" Standard Operating Procedure**:

1.  **Private Source** 📝
    *   **Location**: Obsidian (`Library_Study-Think`)
    *   **Action**: Write freely; only tag articles intended for public view with `#public`.

2.  **Sync Filter** ⚙️
    *   **Command**: `python scripts/sync_garden.py`
    *   **Action**: Physically copy `#public` files to `800_Digital_Garden (Output)`. This is the physical boundary between private and public.

3.  **Local Preview** 👀
    *   **Location**: `localhost:4321` (Default Astro port)
    *   **Action**: Check layout in a local browser. If unsatisfied, return to Obsidian, edit, and sync again.

4.  **Audit & Push** 🚀
    *   **Command**: `git add . && git commit && git push` (in the `800_...` directory)
    *   **Significance**: This is the only **Gatekeeper**. The moment you hit Enter, you broadcast to the world.

5.  **Cloud Build** ☁️
    *   **Location**: Vercel
    *   **Action**: Automatic pulling, building, and global distribution. No manual intervention required.

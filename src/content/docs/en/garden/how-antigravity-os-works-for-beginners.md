---
date: 2026-02-18
tags:
- Tutorial
- DigitalGarden
- Antigravity
title: "🚀 Antigravity OS: How a Note Turns Into a Website"
---

# 🚀 Antigravity OS: How a Note Turns Into a Website
> **— A Full Breakdown of the Digital Life Publishing Pipeline for Beginners**

If you compare publishing a website to "opening a restaurant and offering delivery," then this is how the process happens step-by-step:

---

### Step 1: Ingredient Production (Writing)
*   **Where you are:** Obsidian
*   **Action:** Write down a journal entry.
*   **Key Switch:** Add the `#public` tag at the end of the note.
*   **Behind the mechanism:** This step is **data production**. Tagging it is like sticking a "delivery allowed" label on this ingredient. If you don't tag it, this entry will forever be locked in your local vault (private repository).

### Step 2: Food Waste Handling & Ingredient Cleaning (Syncing)
*   **Command:** `python scripts/sync_garden.py`
*   **Program involved:** **Python (Script)**
*   **Its role:** 
    1.  **Filtering**: Like a security inspector, it only picks out files with the `#public` tag.
    2.  **Sanitization**: It notices your filename is in Chinese (e.g., `我的日记.md`), which is very unfriendly to URLs. It renames the file to a clean English name based on the `slug` (e.g., `my-diary`) you wrote in the note.
    3.  **Moving**: It moves the cleaned file from your thinking area to the "to-be-served area": `800_Digital_Garden (Output)/src/content/docs/garden`.

### Step 3: Local Tasting (Local Preview)
*   **Command:** `npm run dev`
*   **Program involved:** **Astro (Development Server)**
*   **Its role:** 
    *   This is your "Internal Kitchen Preview." It opens a small window on your computer (localhost:4321).
    *   **Real-time Translation**: It translates the Markdown text you wrote into web code in real-time. Every character you change causes the preview window to update instantly.

### Step 4: Boxing & Shipping (Shipping)
*   **Command:** `git add .` -> `git commit` -> `git push`
*   **Program involved:** **Git (Version Control)**
*   **Its role:** 
    *   This is like putting a security seal on your ingredient box (source code) and loading it onto a delivery truck.
    *   The `push` command is like pressing the "Ship" button, sending this box of **raw ingredients** to a cloud warehouse called **GitHub**.
    *   **Note**: What you are sending is the "recipe and ingredients" (source code), not the "cooked meal" (finished webpage).

### Step 5: Cloud Kitchen Cooking (Building)
*   **What happens:** Triggered automatically; no work required from you.
*   **Program involved:** **Vercel (Hosting Platform) and Astro in its data center**
*   **Behind the mechanism:**
    1.  **Webhook**: Once GitHub receives the shipment, it immediately calls **Vercel**: "wygg just sent over some new ingredients!"
    2.  **Build**: Vercel instantly starts **Astro (Head Chef)** in its cloud kitchen.
    3.  **Generate `dist`**: Following your source code, Astro works frantically in the cloud to generate a set of compressed, high-speed webpage files stored in a box called **`dist`**.

### Step 6: Global Serving (Serving)
*   **What happens:** Completed instantly.
*   **Program involved:** **Vercel Global Network**
*   **Its role:** 
    *   Vercel distributes the webpages from that `dist` box to servers all around the world.
    *   Now, anyone accessing your domain can see that carefully processed and beautifully presented "Digital Journal."

---

### 🤔 The Missing Link: Why Do I Also See a `dist` Folder Locally?

Although Vercel generates it in the cloud, you will sometimes see it locally. Its existence serves three important purposes:

1.  **"Mock Exams" and "Rehearsals" (Local Verification)**:
    *   `npm run dev` is just "tasting in the kitchen."
    *   When you run `npm run build`, Astro generates `dist` locally. This is the "official meal."
    *   Combined with the `npm run preview` command, you can check one last time before publishing, just like a real user: **"Do all the links work? Are all the images showing?"**

2.  **"Performance Check" (Optimization Check)**:
    *   The HTML, CSS, and images in `dist` are compressed and bundled.
    *   You can open this folder to see if the generated webpages are small enough and the code is clean enough.

3.  **"Troubleshooting Base" (Troubleshooting)**:
    *   If the cloud-based Vercel reports an error, you can delete `dist` locally and rebuild. If the local `dist` generates successfully, it means your code is fine, and there might be an issue with the cloud configuration.

**💡 Remember this:** The local `dist` is like your **factory inspection sample**. Although it is the finished product, you don't need to send it to anyone, because the boss (Vercel) has an identical production manual and will produce a brand new version itself.

---

### 💡 Core Overview Memory Table

| Phase | Tool | Role | Why is it needed? |
| :--- | :--- | :--- | :--- |
| **Writer** | Obsidian | Pen & Notebook | Carries your original draft thoughts. |
| **Mover** | `sync_garden.py` | Sanitizer & Courier | Resolves garbled characters caused by Chinese filenames; physically isolates private and public content. |
| **Repository** | Git / GitHub | Time Capsule & Storeroom | Records every version of your work as raw material for cloud publishing. |
| **Head Chef** | **Astro** | Translator & Builder | Translates human-readable notes into machine-readable webpages (`dist`). |
| **Steward** | **Vercel** | Venue & Automated Factory | Provides a platform, monitors GitHub, and works for you when needed. |

---

### ⚠️ Pro Tip:
**"I changed my journal, but why hasn't the webpage updated?"**
Check yourself:
1.  **Tag**: Did I write `#public`?
2.  **Sync**: Did I run `python scripts/sync_garden.py`?
3.  **Ship**: Did I `git push`?
4.  **Kitchen**: Is Vercel currently building (usually takes 1 minute)?

#public

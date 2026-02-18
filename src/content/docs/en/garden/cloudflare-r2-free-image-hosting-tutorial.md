---
date: 2026-02-18
tags:
- Tutorial
- Cloudflare
- R2
- Tools
- Public
title: "Build a Globally Accelerated Image Hosting for Free: Cloudflare R2 Practical Guide"
---

# 🚀 Build a Globally Accelerated Image Hosting for Free: Cloudflare R2 Practical Guide

> **Background**: While building Antigravity OS (Digital Garden), we faced a pain point: storing images in Git repositories is too heavy, and third-party hosting services are unreliable. Cloudflare R2 offers us a "perfect" intermediate solution: **10GB permanent free storage, 0 bandwidth fees (no egress fees), and global CDN acceleration.**

This tutorial records the author's entire journey from "opening the door" to "cutting the keys," suitable for anyone looking to completely solve their image storage anxiety.

---

## 🏗️ Phase 1: Opening the Door (Registration & Verification)

R2 is an object storage service under Cloudflare. Although it's free, it has a "threshold" to prevent malicious abuse.

1.  **Preparation**: A Cloudflare account, a foreign currency credit card (Visa/MasterCard), or a PayPal account.
2.  **Bind Payment Method**:
    *   Enter payment info on the R2 page.
    *   **Tip**: If you encounter errors with the address, ensure your **Zip Code** and **City** strictly match. For Chinese cards, simply select `China` and enter the billing address in Pinyin.
    *   **Fee Explanation**: Don't worry; as long as you stay within the limit (10GB), Cloudflare will absolutely not charge you a penny.

## 📦 Phase 2: Building the Safe (Create Bucket)

Once inside, you need to create a "container" for your images.

1.  Click **`Create Bucket`**.
2.  **Naming**: e.g., `my-image-box` (lowercase letters and hyphens only).
3.  **Location**: Selecting `Automatic` is fine; it will automatically choose the data center closest to you.

## 🪟 Phase 3: Lighting the Display Case (Public Access) — **The easiest step to miss**

By default, your safe is opaque; images are invisible to the public internet.

1.  Enter your new Bucket and click **`Settings`** at the top.
2.  Scroll down to find **`Public Development URL`**.
3.  **Light it up**: Click the blue **`Enable`**.
4.  You will get a URL like `https://pub-xxx.r2.dev`, which is the **official residence** of your images.

## 🔐 Phase 4: Cutting the Automated Keys (API Tokens)

To allow Python scripts or third-party tools to automatically move images for you, you need a set of keys.

1.  Return to the R2 overview page and click **`Manage R2 API Tokens`** on the right.
2.  Click **`Create API token`**:
    *   **Permissions**: Select **`Object Read & Write`**.
    *   **Validity**: Select **`Forever`**.
3.  **Save the Keys**: You will receive an **Access Key ID** and **Secret Access Key**.
    *   **Warning**: The Secret Key appears only once; make sure to copy it down!

---

## 🤖 Phase 5: Integrating with Antigravity OS Automation Engine

If you are using the Antigravity OS sync script, simply enter the above information in your `.env` file:

```bash
R2_ACCOUNT_ID="Your Account ID"
R2_ACCESS_KEY_ID="Your Key ID"
R2_SECRET_ACCESS_KEY="Your Secret Key"
R2_BUCKET_NAME="Your Bucket Name"
R2_PUBLIC_DOMAIN="Your .r2.dev URL"
```

### 🌟 Post-Integration "Magic" Effects:
*   **Drag & Upload**: You drag a source image named `my-life.jpg` into Obsidian.
*   **Automatic Renaming**: The script automatically "bleaches" it to `my-life.jpg` and pushes it to the cloud.
*   **Automatic Replacement**: References in your local notes are instantly turned into globally accessible CDN links.

---

## 🏆 Summary: Why R2?
*   **Big Name Reliability**: No need to worry about sudden shutdowns like niche image hosting services.
*   **Completely Free**: 10GB is enough to host thousands of high-definition photos.
*   **Data Sovereignty**: All images are in your own Bucket; you can download them in bulk at any time.

---
#public

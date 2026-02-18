---
date: 2026-02-18
tags:
- Security
- Privacy
- Constitution
- Antigravity
title: Antigravity OS Privacy, Security, and Data Sovereignty Protocol
---

# 🛡️ Antigravity OS Privacy, Security, and Data Sovereignty Protocol

#public

> **"Only knowledge that can be fully controlled is safe power."**

This protocol aims to standardize the storage, masking, and protection mechanisms for sensitive data (accounts, keys, personal privacy) within Antigravity OS, ensuring an absolute physical boundary between "Public Sharing (Digital Garden)" and "Private Backup (GitHub Private)."

---

## 1. Key and Account Protection (The .env Wall)

**Law**: It is strictly forbidden to write any API keys, passwords, or Secret Keys in plain text directly into code files.

*   **Execution Mechanism**: Use **`.env`** (Environment Variables) files.
*   **Physical Barrier**: The root `.gitignore` must include a `.env` line. This ensures that even if you push code to GitHub, these "house keys" remain only on your physical hard drive.
*   **Current Protected Targets**:
    *   Cloudflare R2 `Access Key` and `Secret Key`.
    *   Sensitive tokens related to Vercel deployment.

## 2. Content Concealment Mechanism (The Gatekeeper)

Antigravity OS adopts a "Whitelist" publishing system, where all thoughts are private by default unless explicitly "authorized."

### 2.1 File-Level Concealment
*   **Mechanism**: The `sync_garden.py` Gatekeeper system.
*   **Rule**: Only files containing the `#public` tag are eligible to enter `800_Digital_Garden (Output)`.
*   **Security Advice**: Notes involving personal emotions, immature ideas, or business secrets are **strictly prohibited** from being tagged `#public`.

### 2.2 Absolute Private Vault (999_Private_Vault)
*   **Physical Definition**: Stored at `Library_Study-Think/999_Private_Vault/`.
*   **Forced Masking Rules**:
    1.  **Git Masking**: Forced exclusion through `.gitignore`; strictly forbidden in the version control system.
    2.  **Script Masking**: The `sync_garden.py` script must explicitly exclude this directory during any scanning (articles or images).
    3.  **AI Behavior Rules**: Any subsequent programming tasks involving automation, batch processing, or renaming must check and inherit the "exclude 999 directory" logic.

### 2.3 Repository-Level Masking (Git Ignore)
*   **Mechanism**: Utilize `.gitignore` rules.
*   **Operation**: To completely exclude a folder (e.g., `Library_Study-Think/999_Sensitive/`) from Git control, declare it in the root `.gitignore`.
*   **Effect**: The folder exists on your hard drive but is completely invisible in GitHub's cloud repository.

## 3. Asset Offloading (Attachment Isolation)

To prevent the Git repository from becoming redundant or exposing privacy due to large numbers of images or binary files, we established an **Offshore Asset Mechanism**.

*   **Logic**: Automatically upload images referenced as `![local-image.png](...)` to **Cloudflare R2** via scripts.
*   **Privacy Benefits**:
    1.  **Physical Decoupling**: Images are no longer uploaded to GitHub with the code, avoiding synchronization failures caused by large files.
    2.  **On-Demand Publicity**: Only images in public articles processed by the sync script will have cloud URLs.
    3.  **Traffic Isolation**: Leverage R2's anti-hotlinking and public/private settings to enhance resource control.

## 4. Extreme Privacy Backup (Air-gap Thinking)

For highly sensitive data (e.g., mnemonic phrases, core financial documents), an **"Offline"** strategy is recommended:
*   **Storage Location**: Local directories outside of `Library_Study-Think` that are not associated with any Git repository.
*   **Interaction Rules**: AI assistants are strictly forbidden from outputting the contents of these files in dialogue unless they receive explicit instructions from the user in the current session.

---

## 5. Leak Prevention Audit Checklist

- [ ] Check if the root `.gitignore` contains `.env`.
- [ ] Check if the `sync_garden.py` logic still maintains `#public` filtering.
- [ ] Run `git status` in the `800_Digital_Garden (Output)` directory to ensure no unexpected files are included.
- [ ] Confirm Cloudflare R2 Token permissions are limited to specific Buckets, not the entire account.

---

**"In the world of Antigravity, security is the cornerstone of ascent."**

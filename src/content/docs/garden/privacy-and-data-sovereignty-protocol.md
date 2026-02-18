---
date: 2026-02-18
slug: privacy-and-data-sovereignty-protocol
tags:
- Security
- Privacy
- Constitution
- Antigravity
title: Antigravity OS 隐私安全与数据主权协议
---

# 🛡️ Antigravity OS 隐私安全与数据主权协议

> **“只有能被完全掌控的知识，才是安全的力量。”**

本协议旨在规范 Antigravity OS 中敏感数据（账号、密钥、私人隐私）的存储、屏蔽与保护机制，确保系统在“公开分享 (Digital Garden)”与“私有备份 (GitHub Private)”之间拥有绝对的物理边界。

---

## 1. 密钥与账号保护 (The .env Wall)

**法条**：严禁将任何明文形式的 API 密钥、密码、Secret Keys 直接写入代码文件。

*   **执行机制**：使用 **`.env`** (Environment Variables) 文件。
*   **物理屏障**：在根目录 `.gitignore` 中必须包含 `.env` 行。这确保了即便你将代码推送到 GitHub，这些“房间钥匙”也只留在你的物理硬盘上。
*   **当前保护对象**：
    *   Cloudflare R2 的 `Access Key` 与 `Secret Key`。
    *   Vercel 部署相关的敏感令牌。

## 2. 内容隐匿机制 (The Gatekeeper)

Antigravity OS 采用“白名单”发布制度，默认所有思考均为私有，除非获得明确“授权”。

### 2.1 文件级隐匿
*   **机制**：`sync_garden.py` 守门员制度。
*   **规则**：只有内容中包含 `#public` 标签的文件才具备进入 `800_Digital_Garden (Output)` 的资格。
*   **安全建议**：涉及个人情感、未成熟想法、商业机密的笔记，**严禁**标注 `#public`。

### 2.2 绝对私密保险箱 (999_Private_Vault)
*   **物理定义**：存放于 `Library_Study-Think/999_Private_Vault/`。
*   **强制屏蔽规则**：
    1.  **Git 屏蔽**：通过 `.gitignore` 强制排除，严禁进入版本控制系统。
    2.  **脚本屏蔽**：`sync_garden.py` 在任何扫描（文章或图片）过程中必须显式排除此目录。
    3.  **AI 行为规则**：后续任何涉及自动化、批量处理、重命名的编程任务，必须检查并继承“排除 999 目录”的逻辑。

### 2.3 仓库级屏蔽 (Git Ignore)
*   **机制**：使用 `.gitignore` 规则。
*   **操作**：若想让某个文件夹（如 `Library_Study-Think/999_Sensitive/`）彻底不进入 Git 版本控制，需在根目录 `.gitignore` 中声明。
*   **效果**：该文件夹在你的硬盘里存在，但在 GitHub 的云端库里完全隐身。

## 3. 附件资产隔离 (Asset Offloading)

为了防止 Git 仓库因大量图片/二进制文件而变得冗余或暴露隐私，我们确立了**附件离岸机制**。

*   **逻辑**：通过脚本将 `![local-image.png](image-not-found)` 自动上传至 **Cloudflare R2**。
*   **隐私收益**：
    1.  **物理脱钩**：图片不再随代码上传 GitHub，避免了大文件导致的同步故障。
    2.  **按需公开**：只有同步脚本处理过的公开文章，其图片才具备云端 URL。
    3.  **流量隔离**：利用 R2 的防盗链和公开/私有设置，增强资源的可控性。

## 4. 极端隐私备份方案 (Air-gap Thinking)

对于极度敏感的数据（如助记词、核心财务文档），建议采取 **“离线化”** 策略：
*   **存放位置**：存放在 `Library_Study-Think` 之外的、不关联任何 Git 仓库的本地目录。
*   **交互规则**：AI 助手严禁在对话中输出这些文件的内容，除非获得用户在当前对话中的明确指令。

---

## 5. 防泄漏自查清单 (Audit Checklist)

- [ ] 检查根目录 `.gitignore` 是否包含 `.env`。
- [ ] 检查 `sync_garden.py` 的逻辑是否依然保持 `#public` 过滤。
- [ ] 在 `800_Digital_Garden (Output)` 目录运行 `git status`，确保没有未预期的文件被纳入。
- [ ] 确认 Cloudflare R2 的 Token 权限仅限于特定的 Bucket，而非整个账户。

---

**“在反重力的世界里，安全是上升的基石。”**
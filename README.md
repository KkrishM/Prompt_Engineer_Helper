# PromptHelper — AI Prompt Engineering Workspace

![PromptHelper](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge)
![Free](https://img.shields.io/badge/Free-No_API_Key_Needed-green?style=for-the-badge)
![HTML](https://img.shields.io/badge/Built_With-HTML_CSS_JS-orange?style=for-the-badge)

> An AI-powered prompt engineering workspace to **build**, **test**, and **improve** prompts — completely free, no API key required for users.

🔗 **Live Demo:** [prompt-engineer-helper.vercel.app](https://prompt-engineer-helper.vercel.app)

---

## 📸 Preview

| Dashboard | Build | Test | Improve |
|-----------|-------|------|---------|
| Welcome screen with stats & recent activity | Generate prompts using AI | Run prompts live & see output | Side-by-side comparison with analysis |

---

## ✨ Features

### 🏠 Dashboard
- Personalized welcome with your name and role
- Quick access to all 3 tools
- Recent activity feed
- Stats tracker — prompts built, tested, improved, saved

### ✏️ Build
- Describe your goal in plain English
- Choose output format (Plain text, JSON, Markdown, Numbered list, Step-by-step)
- Select tone (Professional, Casual, Technical, Concise, Detailed)
- Apply prompt engineering techniques:
  - 🔗 Chain of Thought
  - 🎯 Few-Shot Examples
  - 📐 XML Tags
  - 🎭 Role Prompting
- 6 quick templates (Code Explainer, Email Drafter, SQL Query, Creative Story, Unit Test, Summarizer)
- Copy, Export as .txt, Save to History

### ▶️ Test
- Paste any prompt and run it live against AI
- Use `{{input}}` as a dynamic placeholder
- Adjustable temperature slider
- See real output instantly
- Copy, Export, Save results

### ✨ Improve
- Paste any existing prompt
- Choose focus area (Clarity, Specificity, Output quality, Reduce hallucination, Conciseness)
- Get side-by-side original vs improved comparison
- Detailed analysis of what was changed and why

### 🕐 History
- All saved prompts in one place
- Copy, Export, or Delete any saved prompt
- Persists across sessions using localStorage

### 👤 Profile
- Set your name and role
- Personalized experience throughout the app

---

## 🚀 Getting Started

### Option 1 — Use the Live App
Just visit: **[prompt-engineer-helper.vercel.app](https://prompt-engineer-helper.vercel.app)**
No sign up. No API key. Completely free.

### Option 2 — Run Locally

```bash
# Clone the repo
git clone https://github.com/KkrishM/Prompt_Engineer_Helper.git

# Navigate into the project
cd Prompt_Engineer_Helper

# Open in browser
open index.html
```

> For AI features to work locally, you'll need to set up the backend (see below).

### Option 3 — Deploy Your Own

1. Fork this repo
2. Import into [Vercel](https://vercel.com)
3. Add your API key as an environment variable:
   ```
   GROQ_API_KEY = your_groq_api_key
   ```
4. Deploy — done!

Get a free Groq API key at [console.groq.com](https://console.groq.com)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript (Vanilla) |
| Backend | Vercel Serverless Functions (Node.js) |
| AI Model | Llama 3.3 70B via Groq API |
| Hosting | Vercel |
| Storage | Browser localStorage |

---

## 📁 Project Structure

```
Prompt_Engineer_Helper/
├── index.html          # Main app (UI + frontend logic)
├── vercel.json         # Vercel routing config
├── api/
│   └── claude.js       # Serverless backend (Groq API call)
└── README.md
```

---

## 💡 Why I Built This

Prompt engineering is one of the most valuable skills in the AI era, but there's no good free tool that helps you build, test, and iterate on prompts in one place. PromptHelper solves that — it's a complete workspace for anyone working with AI models.

---

## 🔮 Roadmap

- [ ] Prompt version history (compare iterations)
- [ ] Share prompts via URL
- [ ] Support for multiple AI models
- [ ] Prompt rating and scoring system
- [ ] Dark mode

---

## 👨‍💻 Author

**Krish** — [@KkrishM](https://github.com/KkrishM)

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

⭐ **If you found this useful, give it a star!**

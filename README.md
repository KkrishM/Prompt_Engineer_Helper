# PromptHelper — AI Prompt Engineering Workspace

![AI Powered](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge)
![Free](https://img.shields.io/badge/Free-No_API_Key_Needed-green?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_Friendly-purple?style=for-the-badge)
![HTML](https://img.shields.io/badge/Built_With-HTML_CSS_JS-orange?style=for-the-badge)

> An AI-powered prompt engineering workspace to **build**, **test**, and **improve** prompts — completely free, no API key required, works on any device.

 **Live Demo:** [prompt-engineer-helper.vercel.app](https://prompt-engineer-helper.vercel.app)

---

##  Preview

| Dashboard | Build | Test | Improve |
|-----------|-------|------|---------|
| Welcome screen with stats & recent activity | Generate prompts using AI | Run prompts live & see output | Side-by-side comparison with analysis |

---

##  Features

###  Dashboard
- Personalized welcome with your name and role
- Quick access to all 3 tools
- Recent activity feed
- Stats tracker — prompts built, tested, improved, saved

###  Build
- Describe your goal in plain English
- Choose output format (Plain text, JSON, Markdown, Numbered list, Step-by-step)
- Select tone (Professional, Casual, Technical, Concise, Detailed)
- Apply prompt engineering techniques:
  -  Chain of Thought
  -  Few-Shot Examples
  -  XML Tags
  -  Role Prompting
- 6 quick templates (Code Explainer, Email Drafter, SQL Query, Creative Story, Unit Test, Summarizer)
- Copy, Export as .txt, Save to History

###  Test
- Paste any prompt and run it live against AI
- Use `{{input}}` as a dynamic placeholder for reusable prompts
- Adjustable temperature slider (creativity control)
- See real AI output instantly
- Copy, Export, Save results

###  Improve
- Paste any existing prompt
- Choose focus area (Clarity, Specificity, Output quality, Reduce hallucination, Conciseness)
- Get side-by-side original vs improved comparison
- Detailed bullet-point analysis of what was changed and why

###  History
- All saved prompts in one place
- Copy, Export .txt, or Delete any saved prompt
- Persists across sessions using localStorage

### 👤 Profile
- Set your name and role
- Personalized greeting and avatar throughout the app

###  Fully Responsive
- Works seamlessly on mobile, tablet, and desktop
- Bottom navigation bar on mobile (just like a native app)
- Adaptive layouts for all screen sizes

---

##  Getting Started

### Option 1 — Use the Live App (Recommended)
Just visit: **[prompt-engineer-helper.vercel.app](https://prompt-engineer-helper.vercel.app)**

No sign up. No API key. Completely free. Works on any device.

### Option 2 — Run Locally

```bash
# Clone the repo
git clone https://github.com/KkrishM/Prompt_Engineer_Helper.git

# Navigate into the project
cd Prompt_Engineer_Helper

# Open in browser
open index.html
```

> Note: AI features require the backend to be running. Use the live app or deploy your own for full functionality.

### Option 3 — Deploy Your Own

1. Fork this repo
2. Create a free account at [console.groq.com](https://console.groq.com) and get an API key
3. Import repo into [Vercel](https://vercel.com)
4. Add environment variable:
   ```
   GROQ_API_KEY = your_groq_api_key
   ```
5. Deploy — done! Your own free AI-powered app is live.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript (Vanilla) |
| Backend | Vercel Serverless Functions (Node.js) |
| AI Model | Llama 3.3 70B via Groq API (Free) |
| Hosting | Vercel (Free) |
| Storage | Browser localStorage |

---

## 📁 Project Structure

```
Prompt_Engineer_Helper/
├── index.html          # Main app — UI, logic, responsive layout
├── vercel.json         # Vercel routing configuration
├── api/
│   └── claude.js       # Serverless backend (Groq API handler)
└── README.md
```

---

## 💡 Why I Built This

Prompt engineering is one of the most valuable skills in the AI era, but there's no good **free** tool that helps you build, test, and iterate on prompts in one place. PromptHelper solves that — it's a complete workspace for developers, writers, and anyone working with AI models.

---

## 🔮 Roadmap

- [ ] Prompt version history (compare iterations)
- [ ] Share prompts via URL
- [ ] Support for multiple AI models
- [ ] Prompt rating and scoring system
- [ ] Dark mode
- [ ] Prompt collections / folders

---

## 👨‍💻 Author

**Krish** — [@KkrishM](https://github.com/KkrishM)

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

⭐ **If you found this useful, give it a star!**

---
layout: default
---

<div lang="en" markdown="1">

ClioDeck is a local-first, AI-powered writing assistant designed for historians and humanities researchers. It combines RAG-based research, bibliography management, primary source analysis, and document editing in a single desktop application.

ClioDeck is a [vibe-coding](https://en.wikipedia.org/wiki/Vibe_coding) experiment by [Frédéric Clavert](https://inactinique.github.io), coded with [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

</div>

<div lang="fr" markdown="1">

ClioDeck est un assistant d'écriture local, propulsé par l'IA, conçu pour les historiens et les chercheurs en sciences humaines. Il combine recherche par RAG, gestion bibliographique, analyse de sources primaires et édition de documents dans une seule application de bureau.

ClioDeck est une expérience de [vibe-coding](https://en.wikipedia.org/wiki/Vibe_coding) par [Frédéric Clavert](https://inactinique.github.io), codée avec [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

</div>

<div class="screenshot">
<img src="img/white.jpg" alt="ClioDeck screenshot (light)" class="screenshot-light">
<img src="img/dark.png" alt="ClioDeck screenshot (dark)" class="screenshot-dark">
</div>

<h2><span lang="en">What's new in 1.0.0-rc.3</span><span lang="fr">Nouveautés de la 1.0.0-rc.3</span></h2>

<div lang="en" markdown="1">

This release candidate is about **long-form writing**: books written in chapters, a rewritten editor, and an assistant that can read what you have already written. *New to ClioDeck? [Skip to what it does](#features).*

</div>

<div lang="fr" markdown="1">

Ce candidat de version tourne autour de l'**écriture longue** : des livres écrits en chapitres, un éditeur réécrit, et un assistant capable de lire ce que vous avez déjà écrit. *Vous découvrez ClioDeck ? [Passez à ce qu'il fait](#features).*

</div>

<ul class="features-list">

<li>
<strong><span lang="en">Books are written in chapters</span><span lang="fr">Les livres s'écrivent en chapitres</span></strong>
<span lang="en">A book is no longer one long file: each chapter is its own markdown file, and the project keeps their order. You get a chapter navigator, an outline of the manuscript, search across the whole book, footnote renumbering from the first chapter to the last, and a PDF with real numbered chapters and a table of contents — or a single chapter for a working proof.</span>
<span lang="fr">Un livre n'est plus un seul long fichier : chaque chapitre a le sien, et le projet en garde l'ordre. Navigateur de chapitres, plan du manuscrit, recherche dans l'ouvrage entier, renumérotation des notes du premier au dernier chapitre, et un PDF à vrais chapitres numérotés avec table des matières — ou le tirage d'un seul chapitre pour relecture.</span>
</li>

<li>
<strong><span lang="en">Your file stays your file</span><span lang="fr">Votre fichier reste votre fichier</span></strong>
<span lang="en">The editor is now CodeMirror 6, rendering markdown live. It never converts your text into an internal document and back: open a file, save it untouched, and it is <strong>identical byte for byte</strong> — including line endings and trailing spaces. Footnotes and Pandoc citations are understood natively, with hover previews and <code>@</code> autocomplete from Zotero.</span>
<span lang="fr">L'éditeur repose désormais sur CodeMirror 6, qui affiche le markdown mis en forme sans le convertir. Votre texte n'est jamais transformé en document interne puis reconstitué : ouvrez un fichier, enregistrez-le sans y toucher, il est <strong>identique octet pour octet</strong> — fins de ligne et espaces en fin de ligne comprises. Notes de bas de page et citations Pandoc sont comprises nativement, avec aperçu au survol et autocomplétion <code>@</code> depuis Zotero.</span>
</li>

<li>
<strong><span lang="en">The assistant can read your manuscript</span><span lang="fr">L'assistant peut lire votre manuscrit</span></strong>
<span lang="en">What you have already written becomes a fourth corpus, next to your PDFs, Tropy archives and Obsidian notes — so you can ask what you wrote about a subject three chapters ago. Excerpts from your own draft are labelled apart from your sources, and the assistant is told not to cite them as evidence. Indexing runs quietly after each save, and needs an embeddings model (local or from your provider).</span>
<span lang="fr">Ce que vous avez déjà écrit devient un quatrième corpus, aux côtés de vos PDF, archives Tropy et notes Obsidian — de quoi retrouver ce que vous disiez d'un sujet trois chapitres plus tôt. Les extraits de votre brouillon sont distingués de vos sources, et l'assistant a pour consigne de ne pas les citer comme des preuves. L'indexation se fait discrètement après chaque enregistrement ; elle suppose un modèle d'embeddings (local ou chez votre fournisseur).</span>
</li>

<li>
<strong><span lang="en">The AI only ever proposes</span><span lang="fr">L'IA ne fait jamais que proposer</span></strong>
<span lang="en">No AI feature writes into your document on its own. Anything it suggests arrives as a proposal you accept, alter or refuse, and each of those decisions is recorded — in full in the research journal, as bare counts in the AI usage journal, which never stores your prompts.</span>
<span lang="fr">Aucune fonction d'IA n'écrit d'elle-même dans votre document. Ce qu'elle suggère se présente comme une proposition, que vous acceptez, retouchez ou refusez ; chacune de ces décisions est consignée — intégralement dans le journal de recherche, en simples décomptes dans le journal d'usage de l'IA, qui n'enregistre jamais vos requêtes.</span>
</li>

<li>
<strong><span lang="en">Project context, and consent before sending</span><span lang="fr">Contexte de projet, et consentement avant tout envoi</span></strong>
<span lang="en">The <code>context.md</code> file in your project — subject, period, conventions to observe — is now really given to the assistant at the start of each conversation; until you write in it, nothing is sent. And the assistant will not reach a remote provider without your explicit consent, a rule the application core now enforces itself.</span>
<span lang="fr">Le fichier <code>context.md</code> de votre projet — sujet, période, conventions à respecter — est enfin remis à l'assistant au début de chaque conversation ; tant que vous n'y écrivez rien, rien n'est transmis. Et l'assistant ne s'adresse pas à un service distant sans votre accord explicite, règle que le cœur de l'application applique désormais lui-même.</span>
</li>

</ul>

<div lang="en" markdown="1">

Some caveats worth knowing: the endnote and per-chapter numbering settings shape the PDF export only — the Word export ignores them for now; a per-chapter bibliography needs a bibliography file and gives way to a single one when you let ClioDeck format citations itself. The [full release notes](https://github.com/cliodeck/cliodeck-app/wiki/3.3-RC3-Release-Notes) list everything, including the bugs this candidate fixes for articles too.

</div>

<div lang="fr" markdown="1">

Quelques réserves à connaître : les réglages de notes de fin et de numérotation par chapitre ne valent que pour l'export PDF — l'export Word les ignore pour l'instant ; une bibliographie par chapitre suppose un fichier bibliographique et cède la place à une bibliographie unique si vous laissez ClioDeck formater lui-même les citations. Les [notes de version complètes](https://github.com/cliodeck/cliodeck-app/wiki/3.3-RC3-Release-Notes) détaillent le reste, y compris les corrections qui valent aussi pour les articles.

</div>

<h2 id="features"><span lang="en">Features</span><span lang="fr">Fonctionnalités</span></h2>

<ul class="features-list">

<li>
<strong><span lang="en">RAG Research Assistant</span><span lang="fr">Assistant de recherche RAG</span></strong>
<span lang="en">Query your PDFs and sources in natural language. Every answer includes automatic source citations.</span>
<span lang="fr">Interrogez vos PDF et vos sources en langage naturel. Chaque réponse inclut des citations automatiques des sources.</span>
</li>

<li>
<strong><span lang="en">Brainstorm Mode</span><span lang="fr">Mode Brainstorm</span></strong>
<span lang="en">A dedicated chat mode for the exploratory phase of research: agent loop with tool-use, retrieval grounding across PDFs, Tropy archives, Obsidian notes and your own manuscript, and per-project context (<code>context.md</code>).</span>
<span lang="fr">Un mode chat dédié à la phase exploratoire de la recherche : boucle agent avec outils, ancrage RAG sur PDF, archives Tropy, notes Obsidian et votre propre manuscrit, et contexte par projet (<code>context.md</code>).</span>
</li>

<li>
<strong><span lang="en">MCP Integration</span><span lang="fr">Intégration MCP</span></strong>
<span lang="en">ClioDeck is both an MCP client (consume third-party MCP servers from Brainstorm) and an MCP server (expose your indexed corpus to Claude Desktop or Claude Code). Inactive by default, audited via a JSONL access log, and third-party tool results are inspected before they reach the model.</span>
<span lang="fr">ClioDeck est à la fois client MCP (consomme des serveurs MCP tiers depuis Brainstorm) et serveur MCP (expose votre corpus indexé à Claude Desktop ou Claude Code). Inactif par défaut, journal d'accès JSONL, et les résultats d'outils tiers sont inspectés avant d'atteindre le modèle.</span>
</li>

<li>
<strong><span lang="en">Archive Connectors</span><span lang="fr">Connecteurs d'archives</span></strong>
<span lang="en">Search Gallica (BnF), HAL (CCSD) and Europeana directly from Brainstorm or any connected MCP client. API keys (Europeana only) are stored via Electron <code>safeStorage</code>, never in plain text.</span>
<span lang="fr">Cherchez dans Gallica (BnF), HAL (CCSD) et Europeana directement depuis Brainstorm ou un client MCP connecté. Les clés API (Europeana uniquement) sont stockées via Electron <code>safeStorage</code>, jamais en clair.</span>
</li>

<li>
<strong><span lang="en">Bibliography Management</span><span lang="fr">Gestion bibliographique</span></strong>
<span lang="en">Zotero synchronization, BibTeX import/export, PDF indexing, and a statistics dashboard for your library.</span>
<span lang="fr">Synchronisation Zotero, import/export BibTeX, indexation de PDF et tableau de bord statistique pour votre bibliothèque.</span>
</li>

<li>
<strong><span lang="en">Primary Sources</span><span lang="fr">Sources primaires</span></strong>
<span lang="en">Tropy integration with OCR and transcription support. Search across both secondary and primary sources simultaneously.</span>
<span lang="fr">Intégration Tropy avec OCR et support de transcription. Recherchez simultanément dans vos sources secondaires et primaires.</span>
</li>

<li>
<strong><span lang="en">Corpus Analysis</span><span lang="fr">Analyse de corpus</span></strong>
<span lang="en">Knowledge graph visualization, textometrics (word frequencies, n-grams, TF-IDF), similarity finder, and optional topic modeling.</span>
<span lang="fr">Visualisation de graphe de connaissances, textométrie (fréquences de mots, n-grammes, TF-IDF), recherche de similarités et modélisation de thèmes optionnelle.</span>
</li>

<li>
<strong><span lang="en">Document Editor</span><span lang="fr">Éditeur de documents</span></strong>
<span lang="en">Live-render Markdown editor (CodeMirror 6) with footnotes, Pandoc citations and citation autocomplete. Articles, books and presentations all share the same editor. Export to PDF (via LaTeX), Word (.docx) or reveal.js slides.</span>
<span lang="fr">Éditeur Markdown en rendu live (CodeMirror 6) avec notes de bas de page, citations Pandoc et auto-complétion des citations. Articles, livres et présentations partagent le même éditeur. Export en PDF (via LaTeX), Word (.docx) ou diaporama reveal.js.</span>
</li>

<li>
<strong><span lang="en">Research Journal</span><span lang="fr">Journal de recherche</span></strong>
<span lang="en">Session tracking, chat history, and activity timeline to keep track of your research process.</span>
<span lang="fr">Suivi des sessions, historique des conversations et chronologie d'activité pour suivre votre processus de recherche.</span>
</li>

<li>
<strong><span lang="en">AI Usage Journal</span><span lang="fr">Journal d'usage de l'IA</span></strong>
<span lang="en">A reflexive record of your own recourse to AI: volumes, tasks and corpora, plus a manual decision layer — what non-AI alternative existed, why it was set aside, whether it was worth it. Kept in a separate database and <strong>never records your prompts</strong>.</span>
<span lang="fr">Un relevé réflexif de votre propre recours à l'IA : volumes, tâches et corpus, plus une couche décisionnelle manuelle — quelle alternative non-IA existait, pourquoi elle a été écartée, si cela en valait la peine. Conservé dans une base séparée et <strong>n'enregistre jamais vos prompts</strong>.</span>
</li>

</ul>

<h2><span lang="en">Design Philosophy</span><span lang="fr">Principes de conception</span></h2>

<div lang="en" markdown="1">

- **Local-first** — All your data stays on your machine
- **Your files stay yours** — Plain Markdown, byte-for-byte fidelity, readable and versionable outside ClioDeck
- **Open source** — Licensed under GPLv3
- **Works offline** — Embedded LLM for use without internet
- **macOS & Linux** — Desktop application built with Electron; a Windows build exists and should work, but is untested
- **Academic transparency** — Every AI answer is traceable to its sources, and every AI edit is an explicit decision you made

</div>

<div lang="fr" markdown="1">

- **Local d'abord** — Toutes vos données restent sur votre machine
- **Vos fichiers restent les vôtres** — Markdown brut, fidélité octet pour octet, lisible et versionnable hors de ClioDeck
- **Open source** — Sous licence GPLv3
- **Fonctionne hors ligne** — LLM embarqué pour une utilisation sans internet
- **macOS & Linux** — Application de bureau construite avec Electron ; une version Windows existe et devrait fonctionner, mais n'est pas testée
- **Transparence académique** — Chaque réponse de l'IA est traçable jusqu'à ses sources, et chaque modification par l'IA est une décision que vous avez prise

</div>

<h2><span lang="en">Get Started</span><span lang="fr">Commencer</span></h2>

<div lang="en" markdown="1">

ClioDeck is available on [GitHub](https://github.com/cliodeck/cliodeck-app). You'll find the documentation on the project's [wiki](https://github.com/cliodeck/cliodeck-app/wiki).

**Before you download.** ClioDeck 1.0.0-rc.3 is a *release candidate*: usable for real work, but still under active testing. Two things are worth knowing:

- The application is **not code-signed**. macOS Gatekeeper will refuse to open it on first launch (right-click → Open to bypass), and managed university machines may block it outright.
- Installation is still **technical**. A local model server ([Ollama](https://ollama.com)) is needed unless you use a cloud provider with your own API key, and PDF export requires [Pandoc](https://pandoc.org) plus a LaTeX distribution. The [wiki](https://github.com/cliodeck/cliodeck-app/wiki) walks through it.

</div>

<div lang="fr" markdown="1">

ClioDeck est disponible sur [GitHub](https://github.com/cliodeck/cliodeck-app). Vous trouverez la documentation sur le [wiki](https://github.com/cliodeck/cliodeck-app/wiki) du projet.

**Avant de télécharger.** ClioDeck 1.0.0-rc.3 est un *candidat de version* : utilisable pour un vrai travail, mais encore en cours de test. Deux choses méritent d'être sues :

- L'application **n'est pas signée**. Gatekeeper refusera de l'ouvrir au premier lancement sous macOS (clic droit → Ouvrir pour passer outre), et les machines universitaires administrées peuvent la bloquer entièrement.
- L'installation reste **technique**. Un serveur de modèles local ([Ollama](https://ollama.com)) est nécessaire, sauf à utiliser un fournisseur distant avec votre propre clé d'API, et l'export PDF demande [Pandoc](https://pandoc.org) et une distribution LaTeX. Le [wiki](https://github.com/cliodeck/cliodeck-app/wiki) détaille la marche à suivre.

</div>

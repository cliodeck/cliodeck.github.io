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

This release candidate turns ClioDeck into an environment for **long-form writing**: books with real chapters, a rewritten editor, and an assistant that knows what you have already written.

</div>

<div lang="fr" markdown="1">

Ce candidat de version fait de ClioDeck un environnement d'**écriture longue** : des livres à vrais chapitres, un éditeur réécrit, et un assistant qui connaît ce que vous avez déjà écrit.

</div>

<ul class="features-list">

<li>
<strong><span lang="en">Write a book, chapter by chapter</span><span lang="fr">Écrire un livre, chapitre par chapitre</span></strong>
<span lang="en">A book project is now a set of markdown files ordered by a manifest, not one monolithic document. Chapter panel (create, rename, reorder), two-level outline of the manuscript, search across the whole book, footnotes renumbered from one end to the other, and per-book settings: footnotes or endnotes, numbering continuous or restarting at each chapter, one bibliography or one per chapter.</span>
<span lang="fr">Un projet livre est désormais un ensemble de fichiers markdown ordonnés par un manifeste, et non un document monolithique. Panneau de chapitres (créer, renommer, réordonner), plan du manuscrit à deux niveaux, recherche dans tout l'ouvrage, notes numérotées d'un bout à l'autre, et réglages par ouvrage : notes de bas de page ou de fin, numérotation continue ou repartant à chaque chapitre, bibliographie unique ou par chapitre.</span>
</li>

<li>
<strong><span lang="en">An export worthy of a book</span><span lang="fr">Un export digne d'un livre</span></strong>
<span lang="en">PDF with real numbered chapters and a table of contents, Word with one section per chapter, page breaks and a table of contents — or a single chapter as a working proof. Two chapters each using <code>[^1]</code> used to produce the <em>same</em> note in the final document, the first one silently vanishing; the assembler now scopes note identifiers per chapter.</span>
<span lang="fr">PDF avec de vrais chapitres numérotés et une table des matières, Word avec une section par chapitre, sauts de page et table des matières — ou le tirage d'un chapitre isolé. Deux chapitres utilisant chacun <code>[^1]</code> produisaient jusqu'ici la <em>même</em> note dans le document final, celle du premier disparaissant en silence ; l'assembleur préfixe désormais les identifiants de notes par chapitre.</span>
</li>

<li>
<strong><span lang="en">A new editor — your file stays your file</span><span lang="fr">Un nouvel éditeur — votre fichier reste votre fichier</span></strong>
<span lang="en">CodeMirror 6 with Obsidian-style live rendering. The markdown text is the source of truth: the editor never serialises an intermediate tree, so opening a file and saving it without a change returns it <strong>byte for byte identical</strong> — mixed CRLF line endings included. Footnotes (superscripts, hover preview, in-place editing) and Pandoc citations (clusters, locators, <code>@</code> autocomplete from Zotero, unresolved keys flagged) are parsed natively.</span>
<span lang="fr">CodeMirror 6 en rendu live façon Obsidian. Le texte markdown est la source de vérité : l'éditeur ne sérialise jamais d'arbre intermédiaire, si bien qu'ouvrir un fichier et le sauvegarder sans le modifier le restitue <strong>identique octet pour octet</strong> — fins de ligne CRLF mixtes comprises. Notes de bas de page (exposants, infobulle, édition en place) et citations Pandoc (clusters, locators, autocomplétion <code>@</code> depuis Zotero, clés non résolues signalées) sont analysées nativement.</span>
</li>

<li>
<strong><span lang="en">The assistant knows your manuscript</span><span lang="fr">L'assistant connaît votre manuscrit</span></strong>
<span lang="en">What you have already written becomes a fourth corpus, alongside your PDFs, Tropy archives and Obsidian notes — indexed incrementally after each save, in the background. Its excerpts are labelled apart from your sources: an author must see when a passage comes from their own draft rather than from evidence.</span>
<span lang="fr">Ce que vous avez déjà écrit devient un quatrième corpus, à côté de vos PDF, archives Tropy et notes Obsidian — indexé de façon incrémentale après chaque sauvegarde, en arrière-plan. Ses extraits sont étiquetés à part de vos sources : un auteur doit voir qu'un passage vient de son propre brouillon plutôt que d'une preuve.</span>
</li>

<li>
<strong><span lang="en">AI writes only through proposals</span><span lang="fr">L'IA n'écrit que par propositions</span></strong>
<span lang="en">No AI writing feature touches your document directly. Every intervention arrives as an atomic proposal you accept, modify or reject, and every decision is recorded — with its contents in the research journal, as counts only in the AI usage journal. It is an architectural lock, not a setting.</span>
<span lang="fr">Aucune fonctionnalité d'écriture IA ne touche directement votre document. Chaque intervention arrive comme une proposition atomique que vous acceptez, modifiez ou refusez, et chaque décision est consignée — avec son contenu dans le journal de recherche, en simples agrégats dans le journal d'usage IA. C'est un verrou d'architecture, pas un réglage.</span>
</li>

<li>
<strong><span lang="en">Project context, and safer by default</span><span lang="fr">Contexte de projet, et plus sûr par défaut</span></strong>
<span lang="en">The <code>context.md</code> file at the root of your project — research topic, period, conventions to follow — is now genuinely sent to the assistant at the start of every conversation. Sending anything to a remote provider requires explicit consent, now enforced by the application core rather than by the interface alone.</span>
<span lang="fr">Le fichier <code>context.md</code> à la racine de votre projet — sujet, période, conventions à respecter — est désormais réellement transmis à l'assistant au début de chaque conversation. Tout envoi vers un service distant exige un consentement explicite, garanti désormais par le cœur de l'application et non par la seule interface.</span>
</li>

</ul>

<h2><span lang="en">Features</span><span lang="fr">Fonctionnalités</span></h2>

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
- **macOS & Linux** — Desktop application built with Electron
- **Academic transparency** — Every AI answer is traceable to its sources, and every AI edit is an explicit decision you made

</div>

<div lang="fr" markdown="1">

- **Local d'abord** — Toutes vos données restent sur votre machine
- **Vos fichiers restent les vôtres** — Markdown brut, fidélité octet pour octet, lisible et versionnable hors de ClioDeck
- **Open source** — Sous licence GPLv3
- **Fonctionne hors ligne** — LLM embarqué pour une utilisation sans internet
- **macOS & Linux** — Application de bureau construite avec Electron
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

# cliodeck.github.io

Source of the ClioDeck website, published at <https://cliodeck.github.io> by
GitHub Pages on every push to the default branch.

**This repository is the website only.** The application itself lives in
[cliodeck/cliodeck-app](https://github.com/cliodeck/cliodeck-app), and its
documentation in the [wiki](https://github.com/cliodeck/cliodeck-app/wiki).
Report bugs and request features there, not here.

## Structure

| Path | Role |
|---|---|
| `index.md` | The whole site — a single bilingual page |
| `_layouts/default.html` | Page shell, theme and language bootstrap |
| `_includes/` | Header and footer |
| `assets/css/style.scss` | Styles, light and dark themes |
| `assets/js/` | Theme and language toggles |
| `img/` | Screenshots, also used as the link preview image |

The page is bilingual without a plugin: every string exists twice, tagged
`lang="en"` and `lang="fr"`, and CSS hides one according to the `data-lang`
attribute set on `<html>`. When editing, **add both languages** — an
untranslated string simply disappears for half the readers.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Requires Ruby ≥ 2.7 (the macOS system Ruby 2.6 is too old for current
Jekyll). `_site/` is a build artefact and is not committed.

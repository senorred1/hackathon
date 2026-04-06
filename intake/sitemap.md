# Sitemap

Define which pages to build. Choose ONE approach:

---

## Option A: Specific Pages

List each page explicitly. Use indentation for hierarchy.

```
- Home (/)
- About (/about)
  - Team (/about/team)
  - History (/about/history)
- Services (/services)
  - Consulting (/services/consulting)
  - Training (/services/training)
- Contact (/contact)
```

---

## Option B: Build All Discovered Pages

Let Claude discover pages from the reference site and build them all.

```
BUILD_ALL

Exclude:
- /wp-admin/*
- /login
- /old-*
- /draft-*
```

---

## Your Sitemap

Delete the option you're NOT using and fill in below:

- Home (/)
- About (/about)
- Services (/services)
- Contact (/contact)

# Chapter 08 - Semantic HTML

## Learning Objectives

Learn how to structure webpages using semantic HTML elements instead of generic containers.

---

# What is Semantic HTML?

Semantic HTML uses elements that describe the purpose of their content.

Instead of:

```html
<div></div>
```

Use:

```html
<header></header>

<nav></nav>

<main></main>

<footer></footer>
```

---

# Why Semantic HTML?

Semantic HTML helps:

- Improve readability
- Improve accessibility
- Improve SEO
- Make code easier to maintain

---

# Common Semantic Elements

| Element | Purpose |
|----------|---------|
| `<header>` | Introductory content |
| `<nav>` | Navigation links |
| `<main>` | Main content |
| `<section>` | Thematic section |
| `<article>` | Independent content |
| `<aside>` | Sidebar or related content |
| `<footer>` | Footer information |

---

# Header

```html
<header>

<h1>My Website</h1>

</header>
```

Usually contains:

- Logo
- Website title
- Navigation

---

# Navigation

```html
<nav>

<a href="#">Home</a>

<a href="#">About</a>

</nav>
```

Contains navigation links.

---

# Main

```html
<main>

...

</main>
```

Contains the primary content of the page.

Only one `<main>` element should appear on a page.

---

# Section

```html
<section>

<h2>About</h2>

</section>
```

Groups related content together.

---

# Article

```html
<article>

<h2>News</h2>

</article>
```

Represents standalone content such as:

- Blog posts
- News articles
- Forum posts

---

# Aside

```html
<aside>

Sidebar

</aside>
```

Contains related information such as:

- Advertisements
- Quick links
- Related posts

---

# Footer

```html
<footer>

Copyright

</footer>
```

Usually contains:

- Copyright
- Contact information
- Social media links

---

# Semantic vs Non-Semantic

Non-semantic:

```html
<div class="header"></div>

<div class="menu"></div>

<div class="footer"></div>
```

Semantic:

```html
<header></header>

<nav></nav>

<footer></footer>
```

---

# Best Practices

✅ Use semantic elements whenever possible.

✅ Keep the page structure logical.

✅ Use one `<main>` element per page.

✅ Use headings (`<h1>`–`<h6>`) inside sections.

---

# Practice

Create a webpage with:

- Header
- Navigation
- Main
- Two Sections
- One Article
- One Aside
- Footer

---

# Mini Project

Create a personal portfolio homepage using only semantic HTML.

Include:

- Header
- Navigation
- About Me
- Skills
- Projects
- Contact
- Sidebar
- Footer

---

# Summary

You learned:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

---

## Next Chapter

**09-multimedia**
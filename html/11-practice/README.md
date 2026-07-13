# Chapter 11 - HTML Best Practices

## Learning Objectives

Learn how to write clean, readable, maintainable, and accessible HTML.

---

# 1. Use Semantic HTML

Prefer semantic elements:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

instead of excessive `<div>` elements.

---

# 2. Keep Code Properly Indented

Good:

```html
<section>

    <h2>Title</h2>

    <p>Content</p>

</section>
```

Bad:

```html
<section><h2>Title</h2><p>Content</p></section>
```

---

# 3. Always Add Alt Text

Good:

```html
<img src="cat.jpg" alt="Sleeping cat">
```

Bad:

```html
<img src="cat.jpg">
```

---

# 4. Use Proper Heading Order

Correct:

```html
<h1>

<h2>

<h3>
```

Avoid jumping directly from `<h1>` to `<h4>` unless there is a valid content structure.

---

# 5. Label Every Form Field

```html
<label for="email">

Email

</label>

<input
id="email"
type="email">
```

Improves accessibility and usability.

---

# 6. Use Meaningful File Names

Good:

- login.html
- contact.html
- portfolio.html

Avoid:

- file1.html
- test.html
- new.html

---

# 7. Organize Your Project

Example:

```text
project/

css/

images/

js/

index.html
```

---

# 8. Write Descriptive Link Text

Good:

```html
<a href="/projects">
View Projects
</a>
```

Avoid:

```html
Click Here
```

---

# 9. Validate User Input

Useful attributes:

- `required`
- `min`
- `max`
- `maxlength`
- `pattern`

Example:

```html
<input
type="email"
required>
```

---

# 10. Comment Complex Sections

```html
<!-- Navigation -->

<nav>

...

</nav>
```

---

# HTML Coding Checklist

Before publishing, ask yourself:

- Is the page valid HTML?
- Are all tags properly closed?
- Is the indentation consistent?
- Are image `alt` attributes included?
- Are form controls labeled?
- Is the heading hierarchy logical?
- Are filenames descriptive?
- Is semantic HTML used?
- Is the page mobile-friendly?

---

# Mini Project

Review one of your previous HTML chapters and improve it by:

- Replacing unnecessary `<div>` elements with semantic tags
- Improving indentation
- Adding missing `alt` text
- Adding labels to form controls
- Renaming files if needed

---

# Summary

After this chapter you should be able to write HTML that is:

- Clean
- Readable
- Accessible
- Maintainable
- Professional
- SEO-friendly

---

## Next Chapter

**12-practice-projects**
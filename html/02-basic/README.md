# Chapter 02 - Basic HTML Tags

## Learning Objectives

In this chapter you will learn the most common HTML tags that appear in almost every webpage.

---

# 1. Heading Tags

HTML provides six levels of headings.

```html
<h1>Main Heading</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

- `<h1>` is the largest and most important heading.
- `<h6>` is the smallest heading.

---

# 2. Paragraph Tag

Paragraphs are created using the `<p>` tag.

```html
<p>This is a paragraph.</p>
```

---

# 3. Line Break Tag

The `<br>` tag starts a new line.

```html
First Line<br>
Second Line<br>
Third Line
```

Output:

```
First Line
Second Line
Third Line
```

---

# 4. Horizontal Rule

The `<hr>` tag creates a horizontal line.

```html
<hr>
```

It is commonly used to separate sections of a webpage.

---

# 5. HTML Comments

Comments are ignored by the browser.

```html
<!-- This is a comment -->
```

Use comments to explain your code or temporarily disable sections.

---

# 6. HTML Whitespace

HTML ignores multiple spaces and line breaks.

Example:

```html
Hello          World
```

Output:

```
Hello World
```

---

# 7. Nesting HTML Elements

Elements can be placed inside other elements.

```html
<div>
    <h2>About Me</h2>
    <p>I am learning HTML.</p>
</div>
```

This is called **nesting**.

---

# Common Beginner Mistakes

❌ Forgetting to close tags

```html
<p>Hello
```

✅ Correct

```html
<p>Hello</p>
```

---

❌ Using multiple `<h1>` elements unnecessarily

Use one main `<h1>` per page and organize content with `<h2>`, `<h3>`, etc.

---

❌ Expecting multiple spaces to appear

```html
Hello      World
```

HTML displays this as:

```
Hello World
```

---

# Practice

Create a webpage with:

- One `<h1>` heading
- Two `<h2>` headings
- Three paragraphs
- Two `<hr>` lines
- Three `<br>` tags
- One HTML comment

---

# Mini Project

Create a simple "About Me" page that includes:

- Your name
- University
- Department
- Skills
- Career goal

Use only the tags learned so far.

---

# Summary

After completing this chapter, you should know how to use:

- `<!DOCTYPE html>`
- `<html>`
- `<head>`
- `<body>`
- `<h1>` to `<h6>`
- `<p>`
- `<br>`
- `<hr>`
- `<!-- -->`

---

## Next Chapter

**03-text-formatting**
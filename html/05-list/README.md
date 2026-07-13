# Chapter 05 - HTML Lists

## Learning Objectives

Learn how to organize information using HTML lists.

---

# Types of Lists

HTML provides three types of lists:

- Unordered List
- Ordered List
- Description List

---

# Unordered List

Uses bullet points.

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

---

# Ordered List

Displays items with numbers.

```html
<ol>
    <li>Step One</li>
    <li>Step Two</li>
</ol>
```

---

# Ordered List Types

Uppercase letters:

```html
<ol type="A">
```

Lowercase letters:

```html
<ol type="a">
```

Upper Roman numerals:

```html
<ol type="I">
```

Lower Roman numerals:

```html
<ol type="i">
```

Numbers (default):

```html
<ol>
```

---

# Starting Number

```html
<ol start="5">
```

Output:

```
5
6
7
```

---

# Nested Lists

Lists can contain other lists.

```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
</ul>
```

---

# Description List

Used for terms and definitions.

```html
<dl>

    <dt>HTML</dt>

    <dd>Markup language.</dd>

</dl>
```

- `<dl>` = Description List
- `<dt>` = Description Term
- `<dd>` = Description Details

---

# Best Practices

✅ Use unordered lists for collections of items.

✅ Use ordered lists for step-by-step instructions.

✅ Use description lists for glossaries and definitions.

---

# Practice

Create:

- Your favorite foods list
- Your daily routine
- Programming roadmap
- Course syllabus
- Shopping list

---

# Mini Project

Create a webpage containing:

- Shopping List
- Daily Routine
- Programming Languages
- Semester Subjects
- Favorite Movies
- Skills
- Goals

Use different types of HTML lists.

---

# Summary

You learned:

- `<ul>`
- `<ol>`
- `<li>`
- `<dl>`
- `<dt>`
- `<dd>`
- `type`
- `start`
- Nested Lists

---

## Next Chapter

**06-tables**
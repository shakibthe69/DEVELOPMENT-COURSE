# 03 - CSS Selectors

## Objective

Learn how CSS selects HTML elements.

---

# Types of Selectors

## 1. Universal Selector

```css
*{

}
```

Selects every element.

---

## 2. Element Selector

```css
p{

}
```

Selects all paragraphs.

---

## 3. Class Selector

```css
.card{

}
```

Used multiple times.

---

## 4. ID Selector

```css
#header{

}
```

Should be unique.

---

## 5. Group Selector

```css
h1,p{

}
```

Select multiple elements.

---

## 6. Attribute Selector

```css
input[type="text"]{

}
```

Targets elements by attribute.

---

## 7. Descendant Selector

```css
.card p{

}
```

Selects paragraphs inside `.card`.

---

## 8. Child Selector

```css
.card > h2{

}
```

Selects direct children only.

---

## 9. Pseudo Classes

```css
button:hover
```

Examples:

- :hover
- :focus
- :active
- :first-child
- :last-child
- :nth-child()

---

## 10. Pseudo Elements

```css
h1::after
```

Examples:

- ::before
- ::after
- ::first-letter
- ::first-line

---

# Practice

✔ Style different paragraphs.

✔ Style buttons.

✔ Style list items.

✔ Create different card designs.
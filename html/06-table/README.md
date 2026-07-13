# Chapter 06 - HTML Tables

## Learning Objectives

Learn how to display structured data using HTML tables.

---

# Basic Table Structure

```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>John</td>
        <td>22</td>
    </tr>
</table>
```

---

# Table Tags

| Tag | Description |
|------|-------------|
| `<table>` | Creates a table |
| `<tr>` | Table row |
| `<th>` | Table header cell |
| `<td>` | Table data cell |

---

# Table Headers

```html
<th>Name</th>
```

Header cells are bold and centered by default.

---

# Table Data

```html
<td>Shakib</td>
```

Stores the actual content.

---

# Border Attribute

```html
<table border="1">
```

Adds a visible border.

> Note: In modern websites, borders are usually styled with CSS instead of the `border` attribute.

---

# colspan

Merge columns.

```html
<th colspan="3">
Employee Information
</th>
```

---

# rowspan

Merge rows.

```html
<td rowspan="2">
Shakib
</td>
```

---

# Example Applications

- Student results
- Product catalogs
- Timetables
- Invoices
- Employee records
- Price lists

---

# Best Practices

✅ Use `<th>` for headings.

✅ Keep each row with the same number of columns (unless using `colspan` or `rowspan`).

✅ Use tables for tabular data, not page layout.

---

# Practice

Create:

- Student marks table
- Employee table
- Weekly class routine
- Product price list
- Cricket scorecard

---

# Mini Project

Create a "Student Management" table containing:

- ID
- Name
- Department
- Semester
- CGPA
- Email

Include at least five students.

---

# Summary

You learned:

- `<table>`
- `<tr>`
- `<th>`
- `<td>`
- `border`
- `colspan`
- `rowspan`

---

## Next Chapter

**07-forms**
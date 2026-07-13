# Chapter 07 - HTML Forms

## Learning Objectives

Learn how to collect user input using HTML forms.

---

# Basic Form

```html
<form>

</form>
```

The `<form>` element contains all form controls.

---

# Text Input

```html
<input type="text">
```

Used for names, usernames, and short text.

---

# Password

```html
<input type="password">
```

Hides typed characters.

---

# Email

```html
<input type="email">
```

Validates email addresses.

---

# Number

```html
<input type="number">
```

Accepts numeric values only.

---

# Date

```html
<input type="date">
```

Displays a date picker.

---

# Time

```html
<input type="time">
```

Allows time selection.

---

# Color Picker

```html
<input type="color">
```

Lets users choose a color.

---

# File Upload

```html
<input type="file">
```

Allows users to upload files.

---

# Radio Buttons

```html
<input type="radio" name="gender">
```

Allows selecting one option from a group.

---

# Checkboxes

```html
<input type="checkbox">
```

Allows selecting multiple options.

---

# Dropdown

```html
<select>
    <option>Bangladesh</option>
    <option>Japan</option>
</select>
```

---

# Textarea

```html
<textarea></textarea>
```

Used for multi-line text.

---

# Buttons

```html
<button>Submit</button>

<input type="submit">

<input type="reset">
```

---

# Useful Attributes

```html
required
placeholder
value
min
max
readonly
disabled
```

Example:

```html
<input
    type="text"
    placeholder="Enter your name"
    required>
```

---

# Best Practices

- Use `<label>` for every input.
- Group related fields together.
- Use meaningful placeholders.
- Validate required fields.
- Keep forms simple and user-friendly.

---

# Practice

Build:

- Login Form
- Registration Form
- Contact Form
- Job Application Form
- Student Admission Form

---

# Mini Project

Create a "University Admission Form" including:

- Full Name
- Email
- Phone Number
- Date of Birth
- Gender
- Department
- Skills
- Photo Upload
- Address
- Submit Button

---

# Summary

You learned:

- `<form>`
- `<input>`
- `<label>`
- `<textarea>`
- `<select>`
- `<option>`
- `<button>`
- `required`
- `placeholder`
- `type`
- `min`
- `max`

---

## Next Chapter

**08-semantic-html**
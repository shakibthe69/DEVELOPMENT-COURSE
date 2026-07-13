# Chapter 04 - HTML Links & Images

## Learning Objectives

Learn how to create hyperlinks and display images on a webpage.

---

# Hyperlinks

The `<a>` tag creates hyperlinks.

```html
<a href="https://google.com">
Google
</a>
```

---

# Open in a New Tab

```html
<a href="https://github.com" target="_blank">
GitHub
</a>
```

`target="_blank"` opens the link in a new browser tab.

---

# Email Link

```html
<a href="mailto:someone@example.com">
Send Email
</a>
```

---

# Phone Link

```html
<a href="tel:+8801700000000">
Call
</a>
```

Useful on mobile devices.

---

# Internal Link

Link to another page in your project.

```html
<a href="../01-introduction/index.html">
Chapter 01
</a>
```

---

# Images

Display images using the `<img>` tag.

```html
<img
    src="images/photo.jpg"
    alt="Photo"
>
```

---

# Image Attributes

## src

Image location.

```html
src="images/photo.jpg"
```

---

## alt

Alternative text shown if the image cannot load.

```html
alt="Profile Photo"
```

---

## width

```html
width="300"
```

---

## height

```html
height="200"
```

---

# Clickable Image

```html
<a href="https://github.com">

<img src="logo.png">

</a>
```

---

# Download Attribute

```html
<a href="resume.pdf" download>

Download Resume

</a>
```

---

# Relative Path

```text
images/photo.jpg
```

Points to files inside your project.

---

# Absolute URL

```text
https://example.com/photo.jpg
```

Loads a resource from the internet.

---

# Best Practices

✅ Always provide an `alt` attribute.

✅ Organize images inside an `images/` folder.

✅ Use meaningful file names.

Example:

```
student-profile.jpg
```

instead of

```
IMG12345.jpg
```

---

# Practice

Create a webpage containing:

- Three images
- Two external links
- One internal link
- One email link
- One phone link
- One downloadable file
- One clickable image

---

# Mini Project

Create your own portfolio homepage.

Include:

- Profile photo
- Name
- About Me
- GitHub link
- LinkedIn link
- Email
- Phone number
- Favorite landscape image

---

# Summary

You learned:

- `<a>`
- `<img>`
- `href`
- `src`
- `alt`
- `width`
- `height`
- `target`
- `download`
- Relative paths
- Absolute URLs

---

## Next Chapter

**05-lists**
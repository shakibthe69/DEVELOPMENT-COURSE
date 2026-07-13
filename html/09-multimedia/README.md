# Chapter 09 - HTML Multimedia

## Learning Objectives

Learn how to embed audio, video, YouTube videos, maps, and other external content into HTML pages.

---

# Audio

```html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
</audio>
```

### Common Attributes

- `controls`
- `autoplay`
- `muted`
- `loop`

---

# Video

```html
<video controls width="600">
    <source src="movie.mp4" type="video/mp4">
</video>
```

### Common Attributes

- `controls`
- `autoplay`
- `muted`
- `loop`
- `poster`
- `width`
- `height`

---

# Poster Image

```html
<video poster="poster.jpg">
```

Displays an image before the video starts.

---

# Captions

```html
<track
    src="captions.vtt"
    kind="subtitles"
    srclang="en"
    label="English">
```

Improves accessibility by providing subtitles.

---

# iframe

The `<iframe>` element embeds another webpage inside your page.

Example:

```html
<iframe src="https://example.com"></iframe>
```

---

# Embedding YouTube

1. Open a YouTube video.
2. Click **Share** → **Embed**.
3. Copy the generated `<iframe>` code.

Example:

```html
<iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    allowfullscreen>
</iframe>
```

---

# Embedding Google Maps

1. Open Google Maps.
2. Select a location.
3. Click **Share** → **Embed a map**.
4. Copy the `<iframe>` code.

---

# Best Practices

✅ Use the correct media format (`.mp3`, `.mp4`).

✅ Always provide fallback text inside `<audio>` and `<video>`.

✅ Add captions (`<track>`) when possible.

✅ Use descriptive titles for `<iframe>` elements.

---

# Practice

Create a webpage containing:

- One audio player
- One video player
- One poster image
- One embedded YouTube video
- One embedded Google Map
- One embedded website using `<iframe>`

---

# Mini Project

Create a multimedia portfolio page with:

- Introduction video
- Favorite music
- Embedded YouTube playlist
- Office or university location on Google Maps

---

# Summary

You learned:

- `<audio>`
- `<video>`
- `<source>`
- `<track>`
- `<iframe>`
- `controls`
- `autoplay`
- `muted`
- `loop`
- `poster`
- `allowfullscreen`

---

## Next Chapter

**10-meta-seo**
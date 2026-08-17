---
layout: page
title: Playing with Code(s)
permalink: /Tutorials/00_procedural_experiments/
---


<style>
/* Button styling */
#focusToggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  padding: 0.2em .5em;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  opacity: .5;
}

/* Hide button on small screens */
@media (max-width: 767.9px) {
  #focusToggle {
    display: none;
  }
}

/* Focus mode styles */
.focus-mode .section-content,
.focus-mode h2 {
  display: none; /* hide all by default in focus mode */
}

.focus-mode .section-content.active,
.focus-mode h2.active {
  display: block; /* show only active section */
}
</style>

<button id="focusToggle">Focus</button>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("focusToggle");
  let focusEnabled = false;

  // Wrap content after each h2
  const headings = document.querySelectorAll("h2");
  headings.forEach(h2 => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("section-content");

    let sibling = h2.nextElementSibling;
    while (sibling && sibling.tagName !== "H2") {
      const next = sibling.nextElementSibling;
      wrapper.appendChild(sibling);
      sibling = next;
    }
    h2.insertAdjacentElement("afterend", wrapper);
  });

  const sections = document.querySelectorAll(".section-content");

  function showSectionById(id) {
    sections.forEach(wrapper => {
      const h2 = wrapper.previousElementSibling;
      if (h2.id === id) {
        wrapper.classList.add("active");
        h2.classList.add("active");
      } else {
        wrapper.classList.remove("active");
        h2.classList.remove("active");
      }
    });
  }

  // Default section
  if (location.hash) {
    showSectionById(location.hash.substring(1));
  } else if (headings.length) {
    showSectionById(headings[0].id);
  }

  window.addEventListener("hashchange", () => {
    showSectionById(location.hash.substring(1));
  });

  // Toggle focus mode
  function toggleFocusMode(enable) {
    focusEnabled = enable;
    document.body.classList.toggle("focus-mode", focusEnabled);
    button.textContent = focusEnabled ? "Exit Focus" : "Focus";
  }

  button.addEventListener("click", () => {
    toggleFocusMode(!focusEnabled);
  });

  // Disable focus mode on small screens
  function checkScreenWidth() {
    if (window.innerWidth <= 767.9) {
      toggleFocusMode(false); // automatically turn off
      button.style.display = "none"; // hide button
    } else {
      button.style.display = "block"; // show button
    }
  }

  window.addEventListener("resize", checkScreenWidth);
  checkScreenWidth(); // initial check
});
</script>


# Playing with Code(s)

Code can be approached as a conceptual framework.
We could also consider here substituting the word code for conditions or instructions.

To make code is to make the conditions for something to be generated.

In this class, we'll be considering code in a literal sense, as computer code. However, the history of code in art has been informed by a long relationship between instructions, art, and games.

## Rules as Code: Danish Clapping Game

Play in pairs

Instructions:

- Face your partner and clap your thighs at the same time.

- Choose an arm position randomly: Both arms up, both arms to the left, both arms to the right.

- If you choose the same position, after you clap your thighs, clap your partners hands and repeat from the top If you choose different positions, repeat from the top.

## Code and Art

### Vera Molnar

<figure> <img src = "/assets/images/code_00_molar.jpg" ><figcaption>Vera Molnar. Lettres de ma Mère (“Letter from my Mother”). 1987. Courtesy of The Anne and Michael Spalter Digital Art Collection</figcaption></figure>

## Loose Codes of Art

### Robert Barry

<figure> <img src = "/assets/images/code_00_barry.jpg" ><figcaption>Robert Barry. ART WORK. 1970.</figcaption></figure>

### Yoko Ono

<figure> <img src = "/assets/images/code_00_ono_00.jpg" ><figcaption>Yoko Ono. Cut Piece. 1964.</figcaption></figure>

<figure> <img src = "/assets/images/code_00_ono_02.jpg" ><figcaption>Yoko Ono. Grapefruit. 1964. </figcaption></figure>

<figure> <img src = "/assets/images/code_00_ono_01.jpg" ><figcaption>Yoko Ono. DOLLAR PIECE. 1963. </figcaption></figure>

Instructions:
```
DOLLAR PIECE

Select an amount of dollar.
Imagine all the things that
you can buy with that amount.(a)
Imagine all the things that
you cannot buy with that amount.(b)
Write it on a piece of paper.


1963 spring
```

## Strict Codes of Art

### Mel Bochner

<figure> <img src = "/assets/images/code_00.jpg" ><figcaption>Mel Bochner. Measurement Room: No Vantage Point. 2019–2020.</figcaption></figure>

---

### Sol LeWitt

<figure> <img src = "/assets/images/code_01_lewitt_01.jpg" ><figcaption>Sol LeWitt. Wall Drawing #260 (1975) </figcaption></figure>

**Wall Drawing #260 (1975)**

Instructions:

“On black walls, all two-part combinations of white arcs from corners and sides, and white straight, not-straight, and broken lines.”

---

**Wall Drawing #118. 1971**

Instructions:

“On a wall surface, any continuous stretch of
wall, using a hard pencil, place fifty points at
random. The points should be evenly distributed
over the area of the wall. All of the points should
be connected by straight lines.”

[Sol LeWitt: A Wall Drawing Retrospective - MASS MoCA](https://www.youtube.com/embed/c4cgB4vJ2XY?si=qiUEQj92Rs8d8plU)

Modified version of #118 for paper:

```
On a pieces of paper, using a pencil,
pen, or other writing utensil,
place twenty points at random.
The points should be evenly distributed
over the area of one of the paper's sides.
All of the points should be connected
with straight lines.
```
[Code Version, Moving](https://editor.p5js.org/pickpanpuck/sketches/vzDHYyFav)

## Game Codes: Dots & Boxes

Instructions:
```
Draw a three by three  grid of dots

Each player takes turns drawing a horizontal
or vertical line that connects two dots

The player who completes the fourth
side of a 1×1 box earns one point 
and takes another turn (mark initials in the box)

The player with the most boxes at the end wins
```






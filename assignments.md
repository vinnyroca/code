---
layout: page
title: Assignments
permalink: /assignments/
---
# Assignments

## Exercises

<ol class="exercisel-list"> {% for Exercise in site.Exercises %} <li> <a href="{{ Exercise.url | relative_url }}">{{ Exercise.title }}</a> </li> {% endfor %} </ol>

## Responses

<ol class="responses-list"> {% for response in site.Responses %} <li> <a href="{{ response.url | relative_url }}">{{ response.title }}</a> </li> {% endfor %} </ol>

## Projects

<ol class="projects-list"> {% for project in site.Projects %} <li> <a href="{{ project.url | relative_url }}">{{ project.title }}</a> </li> {% endfor %} </ol>

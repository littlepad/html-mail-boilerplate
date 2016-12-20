# html-mail-boilerplate

Development environment boilerplate for html mail.

## Gulp Tasks

### development

sass + stylelint + jade + inlineCss + server + watch

```
$ gulp
```

### build

sass + stylelint + jade + inlineCss

```
$ gulp build
```

### stylelint

The stylelint rule is defined based on css which is [universally supported by the most common e-mail clients](http://www.emailology.org/#3).

#### base rules

- background
- background-color
- border
- border-bottom
- border-bottom-color
- border-bottom-style
- border-bottom-width
- border-color
- border-left
- border-left-color
- border-left-style
- border-left-width
- border-right
- border-right-color
- border-right-style
- border-right-width
- border-style
- border-top
- border-top-color
- border-width
- color
- font
- font-family
- font-size
- font-style
- font-variant
- font-weight
- height
- line-height
- list-style-type
- padding
- padding-bottom
- padding-left
- padding-right
- padding-top
- table-layout
- text-align
- text-decoration
- text-indent
- text-transform
- vertical-align
- width

#### additional rules 

- max-width
- text-size-adjust
  

### server

The local server is configured to refer to the media server's path to `/html-mail/media`.

```
server: [PATH.html, PATH.media],
rewriteRules: [
  {
    match: /https:\/\/example\.com/g,
    replace: ''
  }
]
```

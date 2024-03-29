// ==UserScript==
// @name        Stackoverflow-like custom CSS
// @description Custom CSS for Stackoverflow-like
// @run-at      document-end
// @include *stackoverflow.com*
// @include *askubuntu.com*
// @include *mathoverflow.net*
// @include *serverfault.com*
// @include *stackapps.com*
// @include *stackexchange.com.*
// @include *stackmod.com*
// @include *superuser.com*
// ==/UserScript==

(function () {
	'use strict';

	const style = document.createElement('style');
	document.body.appendChild(style);
	style.innerHTML = `
--white: #282a36 !important;
--black: #f8f8f2 !important;
--orange: #ffb86c !important;
--yellow: #f1fa8c !important;
--green: #50fa7b !important;
--blue: #bd93f9 !important;
--powder: #6272a4 !important;
--red: #ff5555 !important;
--black-025: #343746 !important;
--black-050: #343746 !important;
--black-075: #343746 !important;
--black-100: #373a46 !important;
--black-150: #50525c !important;
--black-200: #5c6071 !important;
--black-300: #6a6e86 !important;
--black-350: #868ca8 !important;
--black-400: #abb1ce !important;
--black-500: #c0c6e3 !important;
--black-600: #d9dfff !important;
--black-700: #e3e8ff !important;
--black-750: #f0f2ff !important;
--black-800: #ebeefd !important;
--black-900: #f3f4fb !important;
--orange-050: #19120b !important;
--orange-100: #4c3720 !important;
--orange-200: #805c36 !important;
--orange-300: #b3814c !important;
--orange-400: #ffb86c !important;
--orange-500: #ffb86c !important;
--orange-600: #ffb86c !important;
--orange-700: #ffbf7b !important;
--orange-800: #ffdcb6 !important;
--orange-900: #ffead3 !important;
domain("stackmod.blog"),
domain("stackoverflow.blog"),
domain("stackoverflowbusiness.com"),
domain("stackoverflowteams.com"),
domain("superuser.com"),
domain("tex-talk.net"),
domain("thesffblog.com") 
/* ==========================================================================
Base Colors
========================================================================== */
body {
--white: #282a36 !important;
--black: #f8f8f2 !important;
--orange: #ffb86c !important;
--yellow: #f1fa8c !important;
--green: #50fa7b !important;
--blue: #bd93f9 !important;
--powder: #6272a4 !important;
--red: #ff5555 !important;
--black-025: #343746 !important;
--black-050: #343746 !important;
--black-075: #343746 !important;
--black-100: #373a46 !important;
--black-150: #50525c !important;
--black-200: #5c6071 !important;
--black-300: #6a6e86 !important;
--black-350: #868ca8 !important;
--black-400: #abb1ce !important;
--black-500: #c0c6e3 !important;
--black-600: #d9dfff !important;
--black-700: #e3e8ff !important;
--black-750: #f0f2ff !important;
--black-800: #ebeefd !important;
--black-900: #f3f4fb !important;
--orange-050: #19120b !important;
--orange-100: #4c3720 !important;
--orange-200: #805c36 !important;
--orange-300: #b3814c !important;
--orange-400: #ffb86c !important;
--orange-500: #ffb86c !important;
--orange-600: #ffb86c !important;
--orange-700: #ffbf7b !important;
--orange-800: #ffdcb6 !important;
--orange-900: #ffead3 !important;
--blue-050: #5f4a7d !important;
--blue-100: #715895 !important;
--blue-200: #8467ae !important;
--blue-300: #9776c7 !important;
--blue-400: #aa84e0 !important;
--blue-500: #bd93f9 !important;
--blue-600: #c49efa !important;
--blue-700: #d7befb !important;
--blue-800: #e5d4fd !important;
--blue-900: #f2e9fe !important;
--powder-050: #272e42 !important;
--powder-100-transparent: #3b446250;
--powder-100: #3b4462 !important;
--powder-200: #6272a4 !important;
--powder-300: #4e5b83 !important;
--powder-400: #586794 !important;
--powder-500: #6272a4 !important;
--powder-600: #6272a4 !important;
--powder-700: #8ea2e0 !important;
--powder-800: #acb8df !important;
--powder-900: #dadde7 !important;
--green-025: #206431 !important;
--green-050: #287d3e !important;
--green-100: #30964a !important;
--green-200: #38af56 !important;
--green-300: #40c862 !important;
--green-400: #48e16f !important;
--green-500: #50fa7b !important;
--green-600: #62fb88 !important;
--green-700: #73fb95 !important;
--green-800: #85fca3 !important;
--green-900: #a8fdbd !important;
--yellow-050: #585a46 !important;
--yellow-100: #6e7150 !important;
--yellow-200: #a9af62 !important;
--yellow-300: #c1c870 !important;
--yellow-400: #d9e17e !important;
--yellow-500: #f1fa8c !important;
--yellow-600: #f2fb98 !important;
--yellow-700: #f5fcaf !important;
--yellow-800: #f8fdc6 !important;
--yellow-900: #fbfedd !important;
--red-050: #662222 !important;
--red-100: #802b2b !important;
--red-200: #993333 !important;
--red-300: #cc4444 !important;
--red-400: #e64d4d !important;
--red-500: #ff5555 !important;
--red-600: #ff7777 !important;
--red-700: #ff9999 !important;
--red-800: #ffaaaa !important;
--red-900: #ffcccc !important;
--gold: hsl(48, 100%, 50%) !important;
--gold-lighter: hsl(48, 22%, 30%) !important;
--gold-darker: hsl(45, 100%, 47%) !important;
--silver: hsl(210, 6%, 72%) !important;
--silver-lighter: hsl(0, 0%, 26%) !important;
--silver-darker: hsl(210, 3%, 61%) !important;
--bronze: hsl(28, 38%, 67%) !important;
--bronze-lighter: hsl(28, 13%, 27%) !important;
--bronze-darker: hsl(28, 31%, 52%) !important;
--bc-lightest: var(--black-025) !important;
--bc-lighter: var(--black-050) !important;
--bc-light: var(--black-075) !important;
--bc-medium: var(--black-100) !important;
--bc-dark: var(--black-150) !important;
--bc-darker: var(--black-200) !important;
--fc-dark: var(--black-900) !important;
--fc-medium: var(--black-700) !important;
--fc-light: var(--black-500) !important;
--focus-ring-success: hsla(140, 40%, 75%, 0.4) !important;
--focus-ring-warning: hsla(47, 79%, 58%, 0.4) !important;
--focus-ring-error: hsla(358, 62%, 52%, 0.3) !important;
--focus-ring-muted: hsla(0, 0%, 100%, 0.1) !important;
--bs-sm: 0 1px 2px hsla(0, 0%, 0%, 0.1),
0 1px 4px hsla(0, 0%, 0%, 0.1),
0 2px 8px hsla(0, 0%, 0%, 0.1) !important;
--bs-md: 0 1px 3px hsla(0, 0%, 0%, 0.11),
0 2px 6px hsla(0, 0%, 0%, 0.11),
0 3px 8px hsla(0, 0%, 0%, 0.14) !important;
--bs-lg: 0 1px 4px hsla(0, 0%, 0%, 0.14),
0 3px 8px hsla(0, 0%, 0%, 0.14),
0 4px 13px hsla(0, 0%, 0%, 0.18) !important;
--scrollbar: hsla(0, 0%, 100%, 0.2) !important;
--highlight-bg: hsl(0, 2%, 11%) !important;
--highlight-color: var(--black) !important;
--highlight-comment: #6272a4 !important;
--highlight-punctuation: #ff79c6 !important;
--highlight-namespace: #ff79c6 !important;
--highlight-attribute: #50fa7b !important;
--highlight-literal: #50fa7b !important;
--highlight-symbol: #ff79c6 !important;
--highlight-keyword: #ff79c6 !important;
--highlight-variable: #bd93f9 !important;
--highlight-addition: var(--green-600) !important;
--highlight-deletion: var(--red-700) !important;
}

/* ==========================================================================
CSS Fixes
========================================================================== */
/**
* Footer color fix
*/
body {
--theme-footer-background-color: #343746 !important;
--theme-footer-title-color: #a1aac8 !important;
--theme-footer-text-color: #8c9bca !important;
--theme-footer-link-color: #818eb6 !important;
--theme-footer-link-color-hover: #a1aac8 !important;
--theme-footer-link-color-active: hsl(27, 90%, 55%) !important;
--theme-footer-link-caret-color: var(--theme-footer-background-color) !important;
--theme-footer-divider-color: hsl(210, 8%, 25%) !important;
}


/**
* Logo fix for light mode users
*/
.s-topbar .s-topbar--logo .-img {
filter: invert(.5) brightness(2);
}

/**
* For places that have a background color
*/
.s-post-summary--stats .s-post-summary--stats-item.has-answers.has-accepted-answer,
.status.answered-accepted,
.status.answered-accepted .mini-counts,
.status.answered-accepted .minicounts span,
.show-votes .sidebar-linked .spacer > a:first-child .answer-votes.answered-accepted,
.show-votes .sidebar-related .spacer > a:first-child .answer-votes.answered-accepted,
body.theme-dark .s-btn__primary:not(.is-selected),
.theme-dark__forced .s-btn__primary:not(.is-selected),
.bounty-indicator-tab {
color: button-text-color;
}


/**
* This will make the default UI elements such as scrollbars dark
* Taken from https://stackoverflow.com/a/66097469/13123877
*/
:root {
color-scheme: dark;
}
/**
* Adds a blackground color and border to codeblocks
*/
pre.s-code-block,
.s-prose pre:not(.s-code-block) {
background-color: #282a36;
border: 5px double var(--black-025);
}
/**
* Fixes string color, by default stack overflow uses the same color as variables
*/
code[class*="language-"] .hljs-string,
pre.s-code-block > code .hljs-string {
color: #f1fa8c;
}
/**
* Fixes the hover card shown when hovering over a user's profile picture
*/
#user-menu {
background-color: var(--black-100);
color: var(--black);
border: none;
}
/**
* Fixes text color for elements with black background color
* --black means white, this behavior is same as stack overflow's default dark mode
*/
#user-menu .um-header-info .mod-flair,
#user-menu .um-header-info .um-user-link,
#user-menu .um-header-info .um-flair .badgecount,
#user-menu .um-header-info .um-flair .reputation-score {
color: var(--black) !important;
}
/**
* Fixes the owner card shown below the post
* By default this is a color made for the light mode, 
* so dark mode doesn't suit that color so we change it
*/
.owner {
background-color: var(--black-100);
}
/**
* Fixes the close button on hover for message tooltips
*/
.message.message-config .message-close:hover,
.message.message-info.contributor-dropdown .message-close:hover {
background-color: var(--black-150);
border-color: var(--black-150);
color: var(--black) !important;
}

/**
* Fixes the lack on contrast on tags and other UI elements for all the accent colors
*/
.post-tag,
.geo-tag,
.container .chosen-choices .search-choice,
.container .chosen-container-multi .chosen-choices li.search-choice {
background-color: var(--theme-tag-background-color, var(--blue-050));
}
/**
* Fixes the lack on contrast on tags and other UI elements for all the accent colors
*/

/**
* Slightly increases the contrast for code blocks
*/
.s-prose *:not(.s-code-block) > code {
background-color: var(--black-150);
}

/**
* Slightly increases the contrast for code blocks containing hyperlinks
* For red, purple, white, (comment) accent colors
*/

.s-prose *:not(.s-code-block) > a code {
background-color: #444651;
}

/**
* Fixes the spam indicator for posts marked as spam
*/
.bounty-indicator-tab.flagbg {
background-color: var(--red) !important;
color: white;
}

#user-menu,
.owner {
overflow: hidden;
border-radius: 10px
}
/* For sidebar widgets */
.s-sidebarwidget {
overflow: hidden;
border-radius: 10px;
}


/* ==========================================================================
Custom Syntax Highlighting CSS
========================================================================== */
/* CodeMirror theme by Michael Kaminsky (https://github.com/mkaminsky11)
========================================================================== */
.cm-s-default .CodeMirror-gutters,
.cm-s-default.CodeMirror {
background-color: #282a36!important;
color: #f8f8f2!important;
border: none
}
.cm-s-default .CodeMirror-gutters {
color: #282a36!important
}
.cm-s-default .CodeMirror-cursor {
border-left: solid thin #f8f8f0!important
}
.cm-s-default .CodeMirror-linenumber {
color: #6d8a88!important
}
.cm-s-default .CodeMirror-selected {
background: rgba(255, 255, 255, .1)!important
}
.cm-s-default .CodeMirror-line::selection,
.cm-s-dracula .CodeMirror-line > span::selection,
.cm-s-dracula .CodeMirror-line > span > span::selection {
background: rgba(255, 255, 255, .1)!important
}
.cm-s-default .CodeMirror-line::-moz-selection,
.cm-s-dracula .CodeMirror-line > span::-moz-selection,
.cm-s-dracula .CodeMirror-line > span > span::-moz-selection {
background: rgba(255, 255, 255, .1)!important
}
.cm-s-default span.cm-comment {
color: #6272a4!important
}
.cm-s-default span.cm-string,
.cm-s-dracula span.cm-string-2 {
color: #f1fa8c!important
}
.cm-s-default span.cm-number {
color: #bd93f9!important
}
.cm-s-default span.cm-variable {
color: #50fa7b!important
}
.cm-s-default span.cm-variable-2 {
color: #fff!important
}
.cm-s-default span.cm-def {
color: #50fa7b!important
}
.cm-s-default span.cm-operator {
color: #ff79c6!important
}
.cm-s-default span.cm-keyword {
color: #ff79c6!important
}
.cm-s-default span.cm-atom {
color: #bd93f9!important
}
.cm-s-default span.cm-meta {
color: #f8f8f2!important
}
.cm-s-default span.cm-tag {
color: #ff79c6!important
}
.cm-s-default span.cm-attribute {
color: #50fa7b!important
}
.cm-s-default span.cm-qualifier {
color: #50fa7b!important
}
.cm-s-default span.cm-property {
color: #66d9ef!important
}
.cm-s-default span.cm-builtin {
color: #50fa7b!important
}
.cm-s-default span.cm-variable-3,
.cm-s-dracula span.cm-type {
color: #ffb86c!important
}
.cm-s-default .CodeMirror-activeline-background {
background: rgba(255, 255, 255, .1)!important
}
.cm-s-default .CodeMirror-matchingbracket {
text-decoration: underline;
color: #fff!important
}
/* HighlightJS theme by Denis Ciccale <dciccale@gmail.com>
========================================================================== */
.hljs {
display: block;
overflow-x: auto;
background: #282a36
}
.hljs-built_in,
.hljs-link,
.hljs-section,
.hljs-selector-tag {
color: #8be9fd
}
.hljs-keyword {
color: #ff79c6
}
.hljs,
.hljs-subst {
color: #f8f8f2
}
.hljs-attr,
.hljs-meta-keyword,
.hljs-title {
font-style: italic;
color: #50fa7b
}
.hljs-addition,
.hljs-bullet,
.hljs-meta,
.hljs-name,
.hljs-string,
.hljs-symbol,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
color: #f1fa8c
}
.hljs-comment,
.hljs-deletion,
.hljs-quote {
color: #6272a4
}
.hljs-doctag,
.hljs-keyword,
.hljs-literal,
.hljs-name,
.hljs-section,
.hljs-selector-tag,
.hljs-strong,
.hljs-title,
.hljs-type {
font-weight: 700
}
.hljs-literal,
.hljs-number {
color: #bd93f9
}
.hljs-emphasis {
font-style: italic
}

/**
* Adaptation for StackExchange sites without a dark theme
**/
body {
background: none !important;
--theme-primary-color: var(--blue-400)!important;

--theme-primary-025: var(--blue-050)!important;
--theme-primary-050: var(--blue-050)!important;
--theme-primary-075: var(--blue-050)!important;
--theme-primary-100: var(--blue-100)!important;
--theme-primary-150: var(--blue-200)!important;
--theme-primary-200: var(--blue-200)!important;
--theme-primary-300: var(--blue-300)!important;
--theme-primary-350: var(--blue-300)!important;
--theme-primary-400: var(--blue-400)!important;
--theme-primary-500: var(--blue-500)!important;
--theme-primary-600: var(--blue-600)!important;
--theme-primary-700: var(--blue-700)!important;
--theme-primary-800: var(--blue-800)!important;
--theme-primary-900: var(--blue-900)!important;

--theme-background-color: var(--white)!important;
--theme-content-background-color: var(--white)!important;
--theme-content-border-color: var(--white)!important;

--theme-tag-background-color: var(--powder-400)!important;
--theme-tag-color: var(--powder-700)!important;
--theme-tag-border-color: var(--powder-100)!important;

--theme-link-color: var(--blue-400)!important;
--theme-post-title-color: var(--blue-400)!important;
}

/**
* Additional improvements of the SE theme
**/
body,
header,
.left-sidebar--sticky-container {
background: var(--white)!important;
}

.s-topbar {
box-shadow: 0px 0px var(--su8) black!important;
}

.s-btn {
--_bu-filled-bs: none!important;
}

/* Turning the yellow of watched tags int a color less violent */
.s-post-summary__watched {
background: var(--blue-050)!important;
}

.s-post-summary__ignored {
--black-500: var(--blue-100)!important;
background-color: var(--powder-100-transparent)!important;
}

.s-sidebarwidget--content .s-btn__link {
background-color: var(--_bu-filled-bg) !important;
border: 1px solid var(--_bu-filled-bc) !important;

border-radius: var(--su2)!important;
padding: var(--su8)!important;

margin-left: auto;
margin-right: auto;
}

.s-sidebarwidget--content .s-btn__link:active {
--theme-button-filled-active-border-color: var(--theme-primary-600);
}

.s-sidebarwidget--content .s-btn__link:selected {
--theme-button-filled-selected-color: var(--theme-primary-900);
--theme-button-filled-selected-background-color: var(--theme-primary-200);
--theme-button-filled-selected-border-color: var(--theme-primary-800);
}
.s-sidebarwidget--content .s-btn__lin:hover {
--theme-button-filled-hover-background-color: var(--theme-primary-100);
}

/* Removing the noisy yellow from Featured Meta */
.s-sidebarwidget.s-sidebarwidget__yellow {
--_sw-bc: var(--theme-background-color) !important;
background-color: var(--theme-background-color) !important;
}

.s-sidebarwidget.s-sidebarwidget__yellow .s-sidebarwidget--header {
background-color: var(--black-025)!important;
}

/* Marking Overlaying Elements */
body {
--popover-box-shadow: var(--su1) var(--su1) var(--su16) var(--theme-primary-color) !important;
}

.s-popover,
.message,
#onetrust-banner-sdk,
.topbar-dialog .s-modal--dialog {
box-shadow: var(--popover-box-shadow)!important;
border: none!important;
}
`;

})();

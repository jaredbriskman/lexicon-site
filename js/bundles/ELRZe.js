var pageComponent=webpackJsonppageComponent([13],{206:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=i(s),u=n(1),c=i(u);n(4),n(5),n(3),n(2),n(7),n(6),n(8),n(9),n(10),n(11),n(12),n(13);var p=n(207),h=i(p),f=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(r.default);c.default.register(f,h.default),t.default=f},207:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.ELRZe=void 0;var s,r=n(0),u=i(r),c=n(1),p=i(c);goog.loadModule(function(e){function t(e,t,i){var s=function(){l("p"),l("a",null,null,"class","label-link label label-warning","href","https://clayui.com/docs/components/list.html","target","_blank"),a("CLAY"),o("a"),o("p"),l("h3",null,null,"id","description"),a("Description"),o("h3"),l("p");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),o("p"),l("h3",null,null,"id","usage"),a("Usage"),o("h3"),l("p"),l("img",null,null,"srcset","../../../images/ListViewDefault@2x.png 2x","src","../../../images/ListViewDefault.png","alt","list entry in default state"),o("img"),o("p"),l("p"),a("A list view is useful for comparing entries among them that do not need exhaustive comparison. In case you need exhaustive comparison use the table view."),o("p"),l("p"),a("A list allows you a free way of displaying information. While the table isn't meant to have several text labels in a column, list is the pattern for doing that, as you can see in the following examples."),o("p"),l("p"),a("Not all the element in a list entry are mandatory, feel free to delete and include the ones you need."),o("p"),l("p"),a("When a list is used together with management bar, the list entries must include the checkbox, as the selection and actions are reflected in the management bar."),o("p"),l("h3",null,null,"id","row-states"),a("Row states"),o("h3"),l("h4"),a("Default states"),o("h4"),l("p"),l("img",null,null,"srcset","../../../images/ListViewDefault@2x.png 2x","src","../../../images/ListViewDefault.png","alt","list entry in default state"),o("img"),o("p"),l("h4"),a("Hover state"),o("h4"),l("p"),l("img",null,null,"srcset","../../../images/ListViewHover@2x.png 2x","src","../../../images/ListViewHover.png","alt","list entry in hover state"),o("img"),o("p"),l("h4"),a("Selected state"),o("h4"),l("p"),l("img",null,null,"srcset","../../../images/ListViewActive@2x.png 2x","src","../../../images/ListViewActive.png","alt","list entry in selected state"),o("img"),o("p"),l("h3",null,null,"id","row-interactions"),a("Row interactions"),o("h3"),l("ul"),l("li"),a("A list entry can have a checkbox, a radio or none of them."),o("li"),l("li"),a("Selecting a row is only possible by using the checkbox or radio depending on the selection type desired in the list. An interaction with the background does not produce row selection."),o("li"),l("li"),a("Text elements in the row can be configured as links to navigate."),o("li"),l("li"),a("A row can have none or several actions associated. When there is only one action and it can be represented by an icon, you don't need to make use of the actions menu. Otherwise, use the actions menu on the right side of the row."),o("li"),l("li"),a("The main text is usually used as an action:"),l("ul"),l("li"),a("In case of:"),l("ul"),l("li"),a("Folder: it navigates to the next level."),o("li"),l("li"),a("File: it navigates to its detail view."),o("li"),o("ul"),o("li"),l("li"),a("Do never use it for preview. Preview is always a secondary action placed in the row action menu."),o("li"),o("ul"),o("li"),l("li"),a("If the link drives the user out of the site, please identify visually that this link will open in a new page."),o("li"),o("ul"),l("h3",null,null,"id","content-format-and-alignment"),a("Content format and alignment"),o("h3"),l("ul"),l("li"),a("Main text must be always in semibold."),o("li"),l("li"),a("In order to favor legibility an easiest way to identify content within a list item, the width of the main content won’t go further than the 50% of the row on wide screens."),o("li"),l("li"),a("Inside the main content group there won’t be more than three elements stacked. However, the row can grow vertically if the elements need more vertical space, but never more than two lines."),o("li"),l("li"),a("In those cases when a short description is needed this would be placed, as said before, aligned on the right of the main content and will extend until the tools. This description won’t be more than two lines long."),o("li"),l("li"),a("Text elements can’t fill more than two lines. In the case that a text element is longer, we will use an ellipsis."),o("li"),o("ul"),l("h3",null,null,"id","sections"),a("Sections"),o("h3"),l("p"),a("List sections help to separate different contents by a certain categorization or typology."),o("p"),l("p"),l("img",null,null,"srcset","../../../images/ListViewGroupSeparator@2x.png 2x","src","../../../images/ListViewGroupSeparator.png","alt","List section"),o("img"),o("p"),l("h4"),a("Example of use"),o("h4"),l("p"),l("img",null,null,"srcset","../../../images/ListViewExample@2x.png 2x","src","../../../images/ListViewExample.png","alt","list view example with 3 different states in different entries"),o("img"),o("p"),l("p"),a("More examples can be found in "),l("a",null,null,"href","./Templates/datasetTemplate.html"),a("dataset template"),o("a"),a("."),o("p"),l("h3",null,null,"id","responsive"),a("Responsive"),o("h3"),l("ul"),l("li"),a("Text elements can’t fill more than two lines."),o("li"),l("li"),a("Ellipsis will be used to suggest more content available when is impossible to show all in a small screen. These ellipsis won’t be actionable. They are only indicative. The whole content will be showed on the item full description state."),o("li"),l("li"),a("In case a list row has tags they can’t occupy more than one line. In the case that a tags row is longer, use an ellipsis."),o("li"),o("ul"),l("h2",null,null,"id","notifications"),a("NOTIFICATIONS"),o("h2"),l("p"),l("span",null,null,"class","label label-info"),a("PORTAL"),o("span"),o("p"),l("p"),a("List entries may need support for notifications. This is solved visually by placing a 8px width line on the left side of the row."),o("p"),l("p"),l("img",null,null,"srcset","../../../images/ListNotificationDefault@2x.png 2x","src","../../../images/ListNotificationDefault.png","alt","list notification default state has a blue line on the left side of the row"),o("img"),l("img",null,null,"srcset","../../../images/ListNotificationActive@2x.png 2x","src","../../../images/ListNotificationActive.png","alt","list notification active state has a blue line on the left side of the row"),o("img"),o("p"),l("input",null,null,"type","hidden","value",e.page.title),o("input"),l("input",null,null,"type","hidden","value",e.site.title),o("input")};r(n.$$assignDefaults({content:s},e),null,i)}goog.module("ELRZe.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var i=goog.require("incrementaldom"),l=i.elementOpen,o=i.elementClose,a=(i.elementVoid,i.elementOpenStart,i.elementOpenEnd,i.text),r=(i.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="ELRZe.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var h=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(h,s),t.ELRZe=h,t.templates=s,t.default=s}},[206]);
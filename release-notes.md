# Release notes

## Release V5.1 - July 07, 2019

- Brand compliance - Updated font stack and typography docs to use 'font-family: Arial,Helvetica,sans-serif;'
- Fix - Updated jquery CDN link to include HTTPS//: to work locally
- Fix - fixed favicons not showing on doc pages
- Enhancement - Added favicon page detailing usage and examples of how to include
- Brand compliance - updated logo on the homepage to be compliant colour and alignment in corner
- Enhancement - New side navigation to allow for easy navigation around pages inc active states for the current page
- Redundant - Removed graphic.html
- Redundant -  Removed headers-and-footers.html
- Updated index.html to use the small single column layout for compliant line-length and added more useful about content.
- Grouped doc HTML files into category-specific folders for easier navigation
- Updated navigation items to remove duplicates or incorrect categorisation i.e removed articles from layout
- Added new accessability.css file with an sr-only class for screen reader only text
- New global folder to create separation between global styles and info/set-up pages
- Added new accessibility page detailing standards, resources and utility classes
- Removed content-media,content-form and content-video as these were not linked to and duplicates
- Added 'text-rendering: optimize legibility; and -webkit-font-smoothing: antialiased; on body to enhance text legibility
- Updated body copy grey colour from #222 to #4d4d4d to be compliant
- Updated small element colour from #666 to #737373 to be accessible and brand-compliant
- Removed ‘del’ and ‘s’ tags from typography page due to known accessibility issues.
- Updated info on using the em tag to reflect the proper semantic meaning
- Added info on using ‘i ‘tag to Italicize text with no semantic meaning
- Added ‘a’ tag to the inline section on typography page
- Updated link colour #039 to #0e56a7 to be brand compliant
- Updated link:visited colour from #9F2563 to #e21481 to be brand compliant
- Updated mark tag off-brand yellow #FFD400 to use turquoise (lead) #068293 and white text to be brand compliant
- Added new release notes page to keep track of changes
- Updated OU ice code snipped colours off-brand/unaccessible orange #D13E34 to use a dark grey background #262626 and white text to be brand compliant
- Added code styling in for native styling without JS
- Added reference to pre/code element within the typography page
- Updated code icon buttons to be on-brand pink / consistent with interactive buttons
- Updated red #B5002E to #cd2041 to be brand compliant - categorised as UI
- Updated pink #E80074 to #e21481 to be brand compliant
- Updated dark blue #003366 to #072b54 to be brand compliant
- Updated dark grey #333333 to #262626 to be brand compliant
- Updated blue (lead) #0b55a8 to #0e56a7 to be brand compliant
- Updated grey #A7A9AC to #4d4d4d  to be brand compliant
- Updated light grey #e7eff7 to #737373  to be brand compliant
- Updated turquoise #00B0AC to #068293  to be brand compliant
- Updated orange #C5540A to #d34616  to be brand compliant
- Updated purple #4E247B to #716fb3  to be brand compliant - categorised as reserved
- Updated yellow #F4C400 to #ffd400  to be brand compliant - categorised as reserved
- Updated green #539d3c to #008A00 to be brand compliant - categorised as UI
- Updated beige #D1D1A5 to #f8f6ed to be brand compliant - categorised as UI
- Added depreciated message on non-brand compliant text and background colours
- Updated light red (used on warnings and validations) #fedbdb to #fdf0f2 to be brand compliant - categorised as UI

### Noticeable design changes

- Updated mark tag off-brand yellow #FFD400 to use turquoise (lead) #068293 and white text to be brand compliant


### Developer update notes

- 'Del' element depreciated with a warning - the recommendation is to  remove del elements where used and replace with an alternative solution - see typography page for details
- Several colours have been made redundant as they are no longer brand-compliant, appropriate action should be taken to remove or replace from sites which use these colours. See colours page for details
- Several colours have been categorised as reserved, appropriate action should be taken to ensure colours are not used unless allowed under the guidance for reserved colours. See colours page for details
- Several colours have been categorised as UI colours, appropriate action should be taken to ensure colours are not used in ways not recommended as per the new guidance. See colours page for details


## Release V5.2 - July 12, 2019

- Article.html moved from layout to content folder
- Updated article date element colour #777 to #737373 to be brand compliant and accessible
- Updated article border-bottom colour #ddd to #e9eaea to be brand compliant
- Deleted colour and background CSS for ou-articles--smaller class variation as redundant/non-brand compliant
- Information noticed added to articles.html instructing on the correct use of alt text
- Added border, padding and margin to component previews to add clearer separation between docs and component previews
- Removed all 'see all' buttons from article examples
- Added new component example 'Pattern - Articles with see all button'
- Updated example heading 'Filter: A-Z' to 'Pattern - Article with filter: A-Z'
- Updated example heading 'Filter: another example' to 'Pattern - Articles with ‘see all button'
- Added alt text to images which describes the links in all linked article examples
- Removed 'text-decoration: none' from links within article headings to meet accessibility best practises.
- Removed CSS on objects.various.css that removed underline from all heading elements.
- Removed additional elements in article examples to more clearly demonstrate component in question i.e For 'Standard, no image' the articles with images have been removed.
- Added infobox regarding adding meaningful descriptive text to links on the article page
- Updated light blue background #e7eff7 on stripped articles to #eef3f9 to be brand compliant
- Updated light blue background #e7eff7 references within theme--ou-blue class to #eef3f9 to be brand compliant
- Updated arrow colour on 'ou-list--arrows' #999 to #737373 to be brand compliant
- Removed colour off-brand #222 on .ou-creative
- Removed colour off-brand #666; on .ou-creative__wording
- Removed #000 colour on ou-creative__title as headings are #000 by default
- Added '.ou-ice-full-preview' class to allow full-width component previews within the OI ice docs
- Clear examples with the code for each variation of the creative component on creative.html - standard, with wording, wording top and wording bottom. Added TOC component for easier navigation on-page.
- Updated ou-creative background colour #f5f5f5 to #E9EAEA to be brand compliant
- Added new separate full-page examples for the 3 layouts, removing unnecessary components and providing clear labels for the regions
- Restructured layout pages so they work like other pages, complete with individual code examples and image previews

### Noticeable design changes

- Headings which act as links now have an underline to meet accessibility best practises. This has been done to ensure colour blind users can identify links easily.

### Developer update notes

- Article alt text - Ensure meaningful alt text that describes the link NOT the image is used whenever an image is wrapped within a tag

## Release V5.3 - July 19, 2019

- Updated ou-top link arrow colour #ccc to #737373 to be brand compliant
- Updated ou-top colour ou-to-top link colour #039 to #0E56A7 to be brand compliant
- Removed back to top link code example as duplicated above
- Updated #ou-site-footer .ou-to-top icon colours #999 to #737373 to be brand compliant
- Increased size of footer back to top button from 24px X 24px to 44px X 44px to meet accessibility best practises.
- Split back to top page to create two separate 'back to top link' and ' Footer back to top button' pages
- Provided updated code examples for both component examples include relevant warnings and usage info for each.
- Added new into the text to breadcrumbs explaining the purpose.
- Updated breadcrumb arrow colour #ddd to #737373 to be brand compliant
- Updated breadcrumb current item colour #777 to #737373 to be brand compliant
- Updated breadcrumb link visited colour #039 to #0E56A7 to be brand compliant
- Updated breadcrumb page so breadcrumb sits in own code example box
- Added nav element wrapped around breadcrumbs
- Added link on breadcrumb page to show region 0 in layouts
- Breadcrumb schema information and example added to breadcrumb page
- Adding 'aria-label="Breadcrumb"' and 'aria-current="page" to breadcrumb code example
- Added new intro text and link to layouts page on context nav page
- Updated .ou-context-nav background colour / text colour #036 to #0E56A7 to be brand compliant
- Updated context nav expanded background colour #f5f5f5 to #EEF3F9 to be brand compliant
- Updated context nav border colour #ddd to #E9EAEA to be brand compliant
- Removed article list from filter examples
- Added aria-current="page" to filter 'tab' example for current page your on
- Updated ou-nav-filter link and active background colour #036 to #0E56A7 to be brand compliant
- Reverted heading a tag underline removal so links as heading now don't display an underline
- Updated ou-filter li display table-cell to inline and removed margin from a tag to fix mobile wrapping issue
- Updated pagination page colour #777 to #737373  to be brand compliant
- Updated pagination next/prev arrow colour #999 to #999 #737373 to be brand compliant
- Updated pagination active state #036 to #0E56A7 to be brand compliant;
- Updated pagination button border color #ccc to #E9EAEA to be brand compliant
- Wrapped pagination UL with a nav element

### Developer update notes

- 'icon-to-top' image has changed in size, so when updating CSS of sites, the new image assets must be included.
- Breadcrumb example has been updated to include nav element - Recommend adding nav element to breadcrumbs 
- Breadcrumb example has been updated to include schema - Recommend adding schema to breadcrumbs 
- Breadcrumb example has been updated to include 'aria-label="Breadcrumb"' and 'aria-current="page" - Recommend adding aria attributes to breadcrumbs
- Pagination examples has been updated to include nav element - Recommend adding nav element to pagination

## Release V5.4 - July 31, 2019

- Added aria-labels to the pagination  nav element
- Updated sections page to have separate preview/examples boxes
- Included sections with bar variation on same section page and deleted section with bar page and from the navigation
- Added link on section page to an example page
- Added relevant information on 'rel=next' and rel=previous' for paginated pages
- Updated sections link, border colour #036 to #0e56a7 to be brand compliant
- Updated sections bar variation background colour #eaeaf4 to #e9eae to be brand compliant
- Updated sections link hover border colour #777 to #737373 to be accessible and brand-compliant
- Added 'aria-label="Current Page, Overview" aria-current="true"' to current/active page link in section bars code example
- Restructured site ident page so it includes its own preview and code example
- Removed 'sections' on-site ident from code example and included information regarding combine site ident with sections and link to see an example.
- Updated site ident description colour #777 to #737373 to be accessible and brand-compliant
- Updated Table of contents border colour #ddd to #E9EAEA to be brand compliant
- Added introduction copy to Table of contents component page
- Added information regarding IDs to elements on Table of contents component page
- Wrapped Table of contents example in the nav element
- Added aria-label on  Table of contents component
- Updated table of contents arrow colour #ddd to #737373 to be brand compliant
- Added note regarding depreciated colours on boxes pages
- Removed burgundy from colour example
- Updated side nav 'Boxes' to 'Boxes and Notifications'
- Added usage notes on boxes page
- Updated boxes background colour #eee to #e9eaea to be brand compliant
- Updated boxes colour #222 to #4D4D4D to be brand compliant
- Updated note box border colour #ffd400 to #FFD400 to be brand compliant
- Updated note box border colour #fdf6cd to #F8F6ED to be brand compliant


### Developer update notes

- Pagination example has been updated to include aria labels - Recommend adding these to any pagination elements
- Sections bars example has been updated to include aria-label and aria-current attributes - Recommend adding these to any section elements with links for the current page
- Table of contents component has been updated to include wrapping nav element and aria-label - Recommend adding this to any existing table of contents components


## Release V5.5 - August 09, 2019

- Updated carousel arrow colour #cecece to #737373 to be brand compliant
- Updated carousel dots from using 0.25 opacity of black to a hex value #737373 to be brand compliant
- Updated OU hero wording colour #E21481 / rgba(181,0,46, 0.8); to #e21481 / rgba(226, 20, 129, 0.8) to be brand compliant
- Removed non-brand compliant exampled of hero component on carousel page.
- Added info box and link to slick.js docs on carousel page
- Added alt text to images within the carousel of images example
- Updated carousel dots to 40px font size to improve readability/click area size
- Updated events nav colour #eee to #E9EAEA to be brand compliant
- Updated events nav border-left/right #ddd to #737373 to be brand compliant
- Updated events nav left/right arrow colour #999 to #737373 to be brand compliant
- Updated events day border colour #eee to #E9EAEA to be brand compliant
- Updated events time, location, link details colour #777 to #737373 to be accessible and brand-compliant
- Updated events date background colour #eee to #E9EAEA to be brand compliant
- Updated events markup to replace em with abbr tag for dates and use time tag for dates/dates in the event listing
- Added relevant example and info/link regarding event schema on the events page.
- Increased the font size of the event location, date etc from 0.9em to standard body font size.
- Updated ou-events__nav mark-up from a div to use nav.
- Updated form descriptive text colour #77 to #737373 to be brand compliant
- Refactored form page so each form element has an individual section and code example
- Added new 'descriptive' text example to form page
- Updated email and tel input fields to use correct input types i.e type=" email"
- Updated button text on form page to be more descriptive i.e 'Submit' is now 'Send information' or 'Sign-up'
- Added 'Fields marked with an asterisk (*) are required.' copy on form page examples to explain required fields
- Updated required asterisk span element on form page to use abbr tag for improved accessibility 
- Fixed issue with select not having a label on the form page
- Added legend to form examples with fieldsets on the form page
- Added information regarding left-aligned labels under the 'form grid' example on the form page
- Updated Inline form elements example to be a simple login with one field and button and provide usage information as to when to use the inline form field.
- Added form error message under error invalid form field on the form page
- Added aria-invalid="true" to invalid input on form page
- Added additional form elements to validation section on the form page
- Added information regarding disabled states on forms on the form page
- Updated form disabled background colour #eee to #E9EAEA to be brand compliant
- Updated form disabled text colour #999 to #737373 to be brand compliant
- Removed/updated deprecated colour examples in the hero and added depreciated colours warnings for non-brand colours
- Added infobox regarding ensuring adding an empty alt tag on decorative images within the hero component
- Added info box to icon page regarding best practices
- Added info box to icon page regarding using icons as links without a text label
- An added info box with a link to asset bank on images page
- Updated 'grass' image on images to use more on brand 'people' type photography
- Improved and updated alt text on images page
- Image caption/credit colour #777/#555 updated to #737373 to be brand compliant
- Updated image caption example to use figure + figcaption elements on an image page
- Updated OU list link colour #039 to #0E56A7 to be brand compliant
- Removed 'text-decoration: none' styling on list links
- Added further information regarding browser support of 'Lists split into columns' on the lists page
- Removed opacity from OU quote cite element
- Removed non-brand-compliant examples from quote page and added a deprecated warning for old colours
- Fixed 'pull right' and 'pull-left' code examples on the quote page, also updated heading to use 'align'
- Updated table border colour #ddd to #E9EAEA to be brand compliant
- Updated table stripe background colour #eee to #E9EAEA to be brand compliant
- Removed non-compliant colour examples of table headings
- Added inner shadow to scrolling table on mobile
- Updated timeline mark-up from UL to OL
- Updated timeline border/dot colour #CCE2F1 to #C3D5E9 to be brand compliant
- Updated video toggle colour #777 to #737373 to be brand compliant
- Updated small print text colour #666 to #737373 to be brand compliant
- Updated standard button colour #888 to #4D4D4D to be brand compliant
- Updated button disabled background colour #ccc to #E9EAEA to be brand compliant
- Updated button warning colour #b52a1e to #CD2041 to be brand compliant
- Updated button more border colour #ccc to #737373 to be brand compliant

### Developer update notes

- The events example mark-up has been updated. Not updating won't break the design but recommend updating instances of the events component with improved accessible/semantic HTML. See code examples and notes on of events page for details.
- Form input examples for email and telephone numbers now include the correct type. Ensure form inputs use the correct type attribute as per code examples.
- Form 'required' fields have been updated to use abbr tag and additional messaging explaining Asterix. Ensure forms are correctly using this approach.
- Updated information and guidance has been provided on the form field as to when to use inline or grid form example. Recommended reviewing guidance and updating any forms that violate this best practice.
- A new error message element for error states on form fields has been added. Recommend adding this to error states on forms where appropriate.
- Updated image caption example to use figure + figcaption elements on the image page. Recommend updating any image + caption components to use this more semantic mark-up.

## Release V5.6 - November 28, 2019

- Improved code example alignmnet
- Updated hero colour examples / warnings
- Typo fixes
- Updated quote icon colour
- Updated href exmples to be unqiue
- Updated disbaled button state colour

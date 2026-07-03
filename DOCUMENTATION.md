# MHP Website V2 Documentation
## Purpose
More thorough documentation aimed to guide future developers on how and where to make implementation changes; especially common changes (e.g. updating leads/team pages)

## Updating Leads/Team Pages
All leads and team member info is stored in `public/JSONs/teams.json`. This is treated as the single source of truth and TypeScript pulls information straight from here.

Take a look at the current JSON structure to get an idea of how to add a new member to a team. 

## Adding A New Page
If you want to add/remove a new page to the top NavBar, go to the file at `app/components/Navbar/navBar.tsx` and edit the functions `mobileNavigation` and `desktopNavigation`. 

Take a look at the current structure to get an idea of how to add a new page.

If you want to add a dropdown menu (e.g. how Teams drops down to show Members and Leads), the dropdown pages should be stored as a list in the "dropdownItems" prop.

Additionally, take a look at how the dropdown for Teams is implemented and copy.

## Fade-In Animation
For (almost) every UI component, it fades in when it becomes visible. To change how the fade animation works, modify `tailwind.config.js`; line 40 has "animation" where you can edit it.

To change when it fades, go to `PageSection.tsx`
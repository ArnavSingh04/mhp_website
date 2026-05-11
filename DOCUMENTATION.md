# MHP Website V2 Documentation
## Purpose
More thorough documentation aimed to guide future developers on how and where to make implementation changes; especially common changes (e.g. updating leads/team pages)

## Updating Leads/Team Pages
All leads and team member info is stored in `public/JSONs/teams.json`. This is treated as the single source of truth and TypeScript pulls information straight from here.

Take a look at the current JSON structure to get an idea of how to add a new member to a team. 
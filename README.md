# Project REST-Rant

REST-Rant is an app where users can review restaurants.

As a foodie I need an app so I can allow other foodies to upload information (name, location, pictures, reviews etc.) making the info uploaded easily accessible. The two primay colors will be Hex: #81A594 (light, leafy green) and Hex: #E6E6DC (neutral tone/grey).

| Method | Path | Purpose |
| ------------ | ------------------------- | ----------------------------- |
| GET | / | Home Page |
| GET | /places | Places Index Page |
| POST | /places | Create New Places |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

data for places
| Field | Type |
| -------- | ------- |
| name | string |
| city | string |
| state | string |
| cuisines | string |
| pic | string |
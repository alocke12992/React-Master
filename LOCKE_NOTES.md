---
topic: Project Notes
workTime: 7 hours
---

## Successes

### Side bar updating
I was successfully able to update the sidebar navigation to include all harbors being rendered on the leafletjs map.  

### Filtering by harbor type
This took up a majority of my time. Initially I had planned to filter in Redux, after the initial request had been made to the server to get the harbors. But, I was unable to create a custom action filter since I was unfamiliar with the way redux was being implemented. Ultimately I realized after looking at the backend request routes I found that I could filter results by modifying my request on the front end. So, you can now filter the harbors by toggling the buttons in the sidebar. 

### Harbor View
Although I was unable to figure out how to toggle a popup on the map, I was able to isolate a single harbor inorder to render a "details" screen. On a click in the sidebar, a user can view the details screen inplace of the map, then navigate back to the map. There is a bug here though, as using the "back" button simply toggles the map view and does not rerender the port icons.

## Challenges

There were a number of challenges I faced with this project that prevented me from completing the full project within the given time.

### Project Structure
I found it difficult to navigate/edit the project given the legacy project stucture. I noticed that I ended up spending more time trying to understand the layout of the code than actually writing my own. 

### Leaflet JS
Admidately, this library was confusing at first. I spent a good amount of time digging through the leafletJs Docs to understand how the layers were being rendered. I attempted to incorporate React-Leaflet, but was unsuccessful. 


Despite the challenges I faced, and the uncertanty of how this project structure worked I am proud to say I was able to implement the basic functionality reuqested in such a short time. 



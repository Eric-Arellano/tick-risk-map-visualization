# Tick Risk Visualization
Second place project from Hello Social World hackathon at Tec de Monterrey 
Guadalajara to visualize high risk zones for tick infestations in 
Mexico using the Google Maps API.

Won $250 and office space/mentorship in Changemaker Hub.

See[site](https://eric-arellano.github.io/tick-risk-map-visualization/index.html)
 
# Modeling Tick Infestation
## The problem
The mayor of the agricultural community we partnered with said a huge issue 
they face is a tick infection destroying their livestock.

In particular, they don't know where to focus their very limited resources to
 fight back.

## Biological model
Our project was to predict and visualize these high risk zones.

The biologist in our group used an Ecological Niche model, fed with data 
about Mexican environmental variables and historical tick reports, to develop
 a rudimentary model that predicts risk for tick infections in Mexico.
 
I then layered this biological model onto Google Maps.

# Technology

## Google Maps API
The main site's feature is an embedded Google Maps API that visualizes the 
KML geographic data layer created through GIS software from my biologist 
team member. Also added auto-fill search box to map.

## Responsive web site
This Google Maps app is embedded into a responsive website I made with HTML5 
and CSS3. Also includes page on suggestions to fight ticks.

# Comments

## What I learned
- Google Maps API
- Geographic data and KML 
- Building site under time pressure
- Leveraging an interdisciplinary team (one biologist, one finance student, and 
me with computer science)
- Understanding end user - for example, was key to make site responsive 
because most users would access site with Android

## Problems
- Built quickly to prove MVP for hackathon
- Potentially boring design - just went for clean, simple, and responsive

## Improvements
- Visualize different types of risk zones. Currently only showing high risk, 
but can add toggle to switch between low, medium, high; or show all 
concurrently.
- Allow users to submit reports of tick infections. We could then feed this 
data to update our model.
- Automatically locate the user
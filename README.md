# Aquarium

This App is developed using pure vanilla JavaScript and [SASS](http://sass-lang.com/) for the CSS by [Mireia Sangalo](http://mireiasangalo.com/) ([@mypitit](https://github.com/MyPitit)).

## My task
An aquarium owner has bought a new fish tank and wants to fill it with fish they’ll buy from a fish shop.

As the old aquarium owner phrase goes ­ t he more fish in the tank, the more monies in the bank.
The owner needs to decide if all the fish can live together harmoniously (without eating each other).

Luckily you have an [API](http://docs.fishshop.apiary.io/#reference/0/fish-compatibility) that determines if a group of fish can live together happily.

## Steps Taken
### Step One
Create an `static` object with the name of the fish + the corresponding image.

#### Example
``` javascript
var fish = [
{'id': 'salmon',
 'name': 'Salmon',
 'href': 'http://imageblablah.com/salmon.jpg'},
{'id': 'tuna',
 'name': 'Tuna',
 'href': 'http://dhsadhsahds.com/tuna.jpg'},
]
```
### Step Two
Generate the `html dynamically` with all the content from **Step One**.

Then the user will be able to select the fish to check the compatibility.
Once the user has selected all the fish, she/he will click on the `button` to send the request to the the `API`.

### Step Three
`Click event`: Generate a `API Request` to check if the fish selected by the user on **Step Two** is `true` or `false`.  

### Step Four
Show the results in a new `div` generated dynamically.

## Style guides

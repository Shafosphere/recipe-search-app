// information based on id (511728) from search
const data_information = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 24,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 1,
    "healthScore": 27,
    "creditsText": "Pick Fresh Foods",
    "license": "CC BY 3.0",
    "sourceName": "Pick Fresh Foods",
    "pricePerServing": 274.82,
    "extendedIngredients": [
        {
            "id": 2044,
            "aisle": "Produce",
            "image": "fresh-basil.jpg",
            "consistency": "SOLID",
            "name": "basil",
            "nameClean": "fresh basil",
            "original": "¼ cup fresh basil, thinly sliced",
            "originalName": "fresh basil, thinly sliced",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "fresh",
                "thinly sliced"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 6.0,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 2044,
            "aisle": "Produce",
            "image": "basil.jpg",
            "consistency": "SOLID",
            "name": "basil",
            "nameClean": "fresh basil",
            "original": "¼ cup fresh basil, thinly sliced",
            "originalName": "fresh basil, thinly sliced",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "fresh",
                "thinly sliced"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 6.0,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 1021026,
            "aisle": "Cheese",
            "image": "mozzarella.png",
            "consistency": "SOLID",
            "name": "mozzarella cheese",
            "nameClean": "fresh mozzarella",
            "original": "12 ounces fresh mozzarella cheese, cut into ½-inch cubes",
            "originalName": "fresh mozzarella cheese, cut into ½-inch cubes",
            "amount": 12.0,
            "unit": "ounces",
            "meta": [
                "fresh",
                "cut into ½-inch cubes"
            ],
            "measures": {
                "us": {
                    "amount": 12.0,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 340.194,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 10211215,
            "aisle": "Produce",
            "image": "garlic.jpg",
            "consistency": "SOLID",
            "name": "garlic clove",
            "nameClean": "whole garlic cloves",
            "original": "1 garlic clove, pressed",
            "originalName": "garlic clove, pressed",
            "amount": 1.0,
            "unit": "",
            "meta": [
                "pressed"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 10111529,
            "aisle": "Produce",
            "image": "cherry-tomatoes.png",
            "consistency": "SOLID",
            "name": "grape tomatoes",
            "nameClean": "grape tomato",
            "original": "10 oz grape tomatoes, cut in half lengthwise",
            "originalName": "grape tomatoes, cut in half lengthwise",
            "amount": 10.0,
            "unit": "oz",
            "meta": [
                "cut in half lengthwise"
            ],
            "measures": {
                "us": {
                    "amount": 10.0,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 283.495,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 1082047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "kosher salt",
            "nameClean": "kosher salt",
            "original": "½ tsp kosher salt",
            "originalName": "kosher salt",
            "amount": 0.5,
            "unit": "tsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 1034053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "LIQUID",
            "name": "olive oil",
            "nameClean": "extra virgin olive oil",
            "original": "¼ cup extra-virgin olive oil",
            "originalName": "extra-virgin olive oil",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "extra-virgin"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 54.0,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 20420,
            "aisle": "Pasta and Rice",
            "image": "fusilli.jpg",
            "consistency": "SOLID",
            "name": "linguine pasta",
            "nameClean": "pasta",
            "original": "1 pound linguine pasta",
            "originalName": "linguine pasta",
            "amount": 1.0,
            "unit": "pound",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "lb",
                    "unitLong": "pound"
                },
                "metric": {
                    "amount": 453.592,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        }
    ],
    "id": 511728,
    "title": "Pasta Margherita",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://pickfreshfoods.com/pasta-margherita/",
    "image": "https://img.spoonacular.com/recipes/511728-556x370.jpg",
    "imageType": "jpg",
    "taste": {
        "sweetness": 100.0,
        "saltiness": 57.22,
        "sourness": 90.33,
        "bitterness": 53.66,
        "savoriness": 99.63,
        "fattiness": 97.31,
        "spiciness": 0.0
    },
    "summary": "You can never have too many main course recipes, so give Pasta Margheritan a try. One serving contains <b>809 calories</b>, <b>34g of protein</b>, and <b>34g of fat</b>. This recipe serves 4. For <b>$2.75 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. It is brought to you by Pick Fresh Foods. 1 person were glad they tried this recipe. A mixture of kosher salt, mozzarella cheese, grape tomatoes, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 67%</b>, which is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/pasta-margherita-1372947\">Pasta Margherita</a>, <a href=\"https://spoonacular.com/recipes/pasta-margherita-with-rhubarb-and-apple-compote-613006\">Pasta margherita with rhubarb and apple compote</a>, and <a href=\"https://spoonacular.com/recipes/margherita-pizza-with-pesto-pasta-salad-31919\">Margherita Pizza With Pesto Pasta Salad</a>.",
    "cuisines": [],
    "dishTypes": [
        "side dish",
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [],
    "occasions": [],
    "winePairing": {
        "pairedWines": [],
        "pairingText": "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
        "productMatches": []
    },
    "instructions": "Whisk oil, garlic, basil, salt together in large bowl. Add tomatoes and mozzarella then gently toss to combine; set aside.Cook pasta according to package directions for al dente. Drain well.Add pasta to tomato mixture and gently toss to combine.Serve immediately.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Whisk oil, garlic, basil, salt together in large bowl.",
                    "ingredients": [
                        {
                            "id": 11215,
                            "name": "garlic",
                            "localizedName": "garlic",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                        },
                        {
                            "id": 2044,
                            "name": "basil",
                            "localizedName": "basil",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/basil.jpg"
                        },
                        {
                            "id": 2047,
                            "name": "salt",
                            "localizedName": "salt",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                        },
                        {
                            "id": 4582,
                            "name": "cooking oil",
                            "localizedName": "cooking oil",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404661,
                            "name": "whisk",
                            "localizedName": "whisk",
                            "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                        },
                        {
                            "id": 404783,
                            "name": "bowl",
                            "localizedName": "bowl",
                            "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Add tomatoes and mozzarella then gently toss to combine; set aside.Cook pasta according to package directions for al dente.",
                    "ingredients": [
                        {
                            "id": 1026,
                            "name": "mozzarella",
                            "localizedName": "mozzarella",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/mozzarella.png"
                        },
                        {
                            "id": 11529,
                            "name": "tomato",
                            "localizedName": "tomato",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
                        },
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/fusilli.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "Drain well.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 4,
                    "step": "Add pasta to tomato mixture and gently toss to combine.",
                    "ingredients": [
                        {
                            "id": 11529,
                            "name": "tomato",
                            "localizedName": "tomato",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
                        },
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/fusilli.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Serve immediately.",
                    "ingredients": [],
                    "equipment": []
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularScore": 65.9770736694336,
    "spoonacularSourceUrl": "https://spoonacular.com/pasta-margherita-511728"
}
export default data_information;
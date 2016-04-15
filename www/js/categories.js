angular.module('starter.categories', [])
    .controller("Category", function($scope, $ionicModal, $timeout, $state) {

        $scope.tabs = [{
            "id": 1,
            "text": "CUISINE"
        }, {
            "id": 2,
            "text": "DISH"
        }];
        $scope.listProducts = [];

        $scope.onSlideMove = function(data) {
            //alert("You have selected " + data.id + " tab");
            if (data.index == 0) {
                this.listProducts = [{
                    "id": 4,
                    "name": "American",
                    "dishes": 555,
                    "description": "Rustle up famous dishes from American popular culture, from burgers and ribs to soul food.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/american_16x9.jpg"
                }, {
                    "id": 1,
                    "name": "Mexican",
                    "dishes": 950,
                    "description": "Mexican food is so fresh and easy - think hot quesadillas, piles of nachos and spicy beans and crunchy tacos.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/mexican_16x9.jpg"
                }, {
                    "id": 2,
                    "name": "Italian",
                    "dishes": 432,
                    "description": "Enjoy traditional Italian dishes with classics such as lasagne, and regional specialities.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/italian_16x9.jpg"
                }, {
                    "id": 3,
                    "name": "British",
                    "dishes": 555,
                    "description": "Enjoy classic British dishes such as fish and chips as well as authentic regional specialities.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/british_16x9.jpg"
                }, {
                    "id": 5,
                    "name": "Caribean",
                    "dishes": 555,
                    "description": "Shake up the kitchen experimenting with jerk seasoning or classics such as curried goat.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/caribbean_16x9.jpg"
                }, {
                    "id": 6,
                    "name": "Chinese",
                    "dishes": 12,
                    "description": "Beat the takeaway with recipes from Chinese cookery master Ken Hom and other BBC chefs.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/chinese_16x9.jpg"
                }, {
                    "id": 7,
                    "name": "French",
                    "dishes": 555,
                    "description": "Show off your culinary skills with regional and traditional French treats such as coq au vin",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/french_16x9.jpg"
                }, {
                    "id": 8,
                    "name": "Indian",
                    "dishes": 555,
                    "description": "Make easy vegetarian, vegan and meaty curries using spices such as saffron, cardamom and hot chillies.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/indian_16x9.jpg"
                }, {
                    "id": 9,
                    "name": "Japanese",
                    "description": "Create your own traditional bento box or try homemade sushi with wasabi and Japanese rice.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/japanese_16x9.jpg"
                }, {
                    "id": 10,
                    "name": "Thai",
                    "description": "Recipes for classic Thai green curry and pad Thai, plus traditional dishes from Singapore and Vietnam.",
                    "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/thai_and_south-east_asian_16x9.jpg"
                }];
            }
            if (data.index == 1) {
                this.listProducts = [{
                    "id": 12,
                    "name": "Pizza",
                    "dishes": 250,
                    "image": "http://www.citypassguide.com/media/uploads/frank-blogs/best-pizza-saigon/burrata-pizza-4ps-ho-chi-minh-city.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Cheese"
                    }, {
                        "id": 13,
                        "name": "Seafood"
                    }, {
                        "id": 14,
                        "name": "Chicken"
                    }, {
                        "id": 12,
                        "name": "Salmon"
                    }, {
                        "id": 12,
                        "name": "Special"
                    }]
                }, {
                    "id": 12,
                    "name": "Soups",
                    "dishes": 432,
                    "image": "http://www.gimmesomeoven.com/wp-content/uploads/2010/06/basil-chicken-orzo-soup1.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }, {
                    "id": 12,
                    "name": "Sandwiches",
                    "dishes": 555,
                    "image": "http://www.tom-sallys.de/uploads/tx_templavoila/6sp_4zu3_484x363px_sandwiches.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }, {
                    "id": 12,
                    "name": "Hamburgers",
                    "dishes": 555,
                    "image": "http://images.media-allrecipes.com/images/55484.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }, {
                    "id": 12,
                    "name": "Sushi",
                    "dishes": 555,
                    "image": "http://images.media-allrecipes.com/images/55484.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }, {
                    "id": 12,
                    "name": "Fish",
                    "dishes": 555,
                    "image": "http://images.media-allrecipes.com/images/55484.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }, {
                    "id": 12,
                    "name": "Tacos",
                    "dishes": 555,
                    "image": "http://images.media-allrecipes.com/images/55484.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }, {
                    "id": 12,
                    "name": "Pasta",
                    "dishes": 555,
                    "image": "http://images.media-allrecipes.com/images/55484.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }, {
                    "id": 12,
                    "name": "Salad",
                    "dishes": 555,
                    "image": "http://dinne.ru/wp-content/uploads/2015/05/978969887untitled.jpg",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }, {
                    "id": 12,
                    "name": "Dessert",
                    "dishes": 555,
                    "image": "http://www.pillsbury.com/-/media/pb/images/recipes-hero/desserts/frosted-red-velvet-sugar-cookies_hero.ashx?W=600",
                    "tates": [{
                        "id": 12,
                        "name": "Chicken"
                    }, {
                        "id": 13,
                        "name": "Beef"
                    }, {
                        "id": 14,
                        "name": "Vegetarian"
                    }, {
                        "id": 15,
                        "name": "Beans"
                    }, {
                        "id": 15,
                        "name": "Tomato"
                    }]
                }]
            }
            $scope.$apply();
        };
    });
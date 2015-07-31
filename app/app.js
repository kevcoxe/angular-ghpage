var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

	$scope.bread_types = ["Hard Roll", "Soft Roll"];

	$scope.topping_list = [
		["Lettuce","Tomato"],
		["Mayonnaise","Onion"],
		["Oil","Vinegar"],
		["Hot or Sweet Peppers","Deli Mustard"]
	];

    $scope.subs = {
    	"breakfast": {
    		"small": [
	    		{"name": "Ham", "price": 4.00},
	    		{"name": "Bacon", "price": 4.00},
	    		{"name": "Turkey", "price": 4.00},
	    		{"name": "Sausage", "price": 4.00},
    		],
    		"large": [
    			{"name": "Sausage & Cheese", "price": 6.00},
	    		{"name": "Ham & Cheese", "price": 6.00},
	    		{"name": "Pepperoni & Cheese", "price": 6.00},
    		]}
    	,
    	"lunch": [
    		{"name":"Cold Cut", "description":"ham, salami, mortadella, provolone cheese", "price":6.50},
    		{"name":'"G" Man', "description":"ham, salami, mortadella, pepperoni, fontina cheese, provolone cheese, oregano", "price":7.00},
    		{"name":"Super Sub", "description":"double meat double cheese of the cold cut", "price":8.50},
    		{"name":"Super Sub", "description":"double meat double cheese of the G-man", "price":9.50},
    		{"name":"Meatcall & Cheese", "description":"", "price":7.00},
    		{"name":"Pizza Sub", "description":"sause, cheese, pepperoni & oregano, heated up on a roll", "price":7.00},
    		{"name":"Roast Beef & Cheese", "description":"", "price":7.00},
    		{"name":"Corned Beef & Cheese", "description":"", "price":7.00},
    		{"name":"Pastrami & Cheese", "description":"", "price":7.00},
    		{"name":"Beef Combo", "description":"corn beef, pastrami, roast beef, provolone cheese", "price":8.50},
    		{"name":"Ham & Cheese", "description":"", "price":6.50},
    		{"name":"Turkey & Cheese", "description":"", "price":7.00},
    		{"name":"Chicken Salad & Cheese", "description":"", "price":7.00},
    		{"name":"Tuna Salad & Cheese", "description":"", "price":7.00},
    		{"name":"All Cheese", "description":"", "price":6.00},
    		{"name":"Cheese Combo", "description":"", "price":6.50},
    	]
    }
});
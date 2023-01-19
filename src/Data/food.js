function FoodItemData(name, cost, addons, veg, image, category) {
    this.name = name;
    this.cost = cost;
    this.addons = addons;
    this.veg = veg;
    this.image = image;
    this.category = category;
}

function category(name, image, foodItems) {
    this.name = name;
    this.image = image;
    this.foodItems = foodItems;
}

var categoryArray = [
    new category(
        "Italian",
        "https://picsum.photos/1000" + "?random=" + Math.random(),
        [
            new FoodItemData(
                "Pasta",
                200,
                [
                    { name: "Extra Cheese", cost: 50 },
                    { name: "Extra Sauce", cost: 50 },
                ],
                true,
                "https://picsum.photos/200" + "?random=" + Math.random(),
                "Italian"),
            new FoodItemData(
                "Margherrita Pizza with many toppings such as olives",
                500,
                [
                    { name: "Extra Cheese", cost: 50 },
                    { name: "Extra Sauce", cost: 50 },
                    { name: "Extra Toppings", cost: 100 },
                ],
                true,
                "https://picsum.photos/200" + "?random=" + Math.random(),
                "Italian"),
            new FoodItemData(
                "Speghetti Bolognese",
                200,
                [
                    { name: "Extra Cheese", cost: 50 },
                    { name: "Extra Sauce", cost: 50 },
                ],
                true,
                "https://picsum.photos/200" + "?random=" + Math.random(),
                "Italian",
            ),
        ]
    ),
    new category(
        "Starters",
        "https://picsum.photos/1000" + "?random=" + Math.random(),
        [
            new FoodItemData(
                "Paneer Chilli",
                300,
                [],
                true,
                "https://picsum.photos/200" + "?random=" + Math.random(),
                "Starters"
            ),
            new FoodItemData(
                "Chicken 65",
                400,
                [],
                false,
                "https://picsum.photos/200" + "?random=" + Math.random(),
                "Starters"
            )
        ]
    )
];


export default categoryArray;
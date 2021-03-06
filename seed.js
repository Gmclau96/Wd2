const nedb = require("nedb");
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
dotenv.config()
const menu = new nedb({ filename: "./databases/menu.db", autoload: true });
const staff = new nedb({ filename: "./databases/staff.db", autoload: true });
menu.insert([{
    name: 'Spicy chicken & avocado wraps',
    description: 'Chicken and avacado wraps with a kick of chilli',
    ingredients: [' Chicken breast ', ' Fresh lime juice ', ' Mild chilli powder ', ' Garlic ', ' Olive oil ', ' Seeded wraps ',
        ' Avacado ', ' Red pepper ', ' Fresh coriander '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'False',
        vegan: 'False'
    }],
    price: '£11.00',
    dish: [{
        itemType: 'Lunch',
        itemId: 1
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Oven-baked risotto',
    description: 'A wonderfully creamy risotto',
    ingredients: [' Smoked bacon ', ' Brown onion ', ' Butter ', ' Risotto rice ', ' White wine ', ' Cherry tomatoes ',
        ' Chicken stock ', ' Parmesan '],
    allergyInfo: [{
        allergies: [' Alchohol ', ' Dairy '],
        vegetarian: 'False',
        vegan: 'False'
    }],
    price: '£9.50',
    dish: [{
        itemType: 'Lunch',
        itemId: 1
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Masala omelette muffins',
    description: 'A fresh and creamy pesto sauce, served over wholemeal pasta',
    ingredients: [' Rapeseed oil ', ' Courgettes ', ' Large eggs ', ' Garlic cloves ', ' Red chilli ', ' Chilli powder ',
        ' Ground cumin ', ' Ground coriander ', ' Fresh coriander ', ' Fresh peas ', ' Feta cheese '],
    allergyInfo: [{
        allergies: [' Eggs ', ' Dairy '],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£9.50',
    dish: [{
        itemType: 'Lunch',
        itemId: 1
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Falafel burgers',
    description: "A healthy burger that's filling too. These are great for anyone after a satisfying bite low in calories.",
    ingredients: [' Chickpeas ', ' Red onion ', ' Garlic ', ' Fresh parsley ', ' Ground cumin ', ' Ground coriander ',
        ' Chilli paste ', ' Plain flour ', ' Sunflour oil ', ' Pitta bread ', ' Tomato salsa ' ],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£10.00',
    dish: [{
        itemType: 'Lunch',
        itemId: 1
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Crunchy bulgur salad',
    description: 'A vibrant summer salad with radishes, edamame beans, peppers, almonds and herbs, drizzled with a citrus dressing',
    ingredients: [' Bulgur wheat ', ' Edammame peas ', ' Romano peppers ', ' Radishes ', ' Whole blanched almonds ', ' Fresh mint ',
        ' Fresh parsley ', ' Oranges ', ' Olive oil '],
    allergyInfo: [{
        allergies: [' Nuts '],
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£10.00',
    dish: [{
        itemType: 'Lunch',
        itemId: 1
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Sausage ragu',
    description: 'A comforting dinner that checks in at under 600 calories',
    ingredients: [' Olive oil ', ' Brown onion ', ' Garlic ', ' Chilli flakes ', ' Rosemary sprigs ', ' Chopped tomatoes ',
        ' Brown sugar ', ' Pork sausgaes ', ' Whole milk ', ' Lemon ', ' Rigatoni pasta ', ' Parmesan ', ' Fresh parsley '],
    allergyInfo: [{
        allergies: [' Dairy '],
        vegetarian: 'False',
        vegan: 'False'
    }],
    price: '£12.50',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Beef stroganoff',
    description: 'A classic beef stroganoff with steak and mushroom served with fresh parsley over pappardelle pasta',
    ingredients: [' Olive oil ', ' Brown onion ', ' Garlic ', ' Butter ', ' Mushrooms ', ' Fresh parsley ',
        ' Plain flour ', ' Fillet steak ', ' Crème fraîche ', ' English mustard ', ' Beef stock '],
    allergyInfo: [{
        allergies: [' Dairy ', ' Mustard '],
        vegetarian: 'False',
        vegan: 'False'
    }],
    price: '£12.50',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: 'True',
    available: 'False'
}, {
    name: "Sweet potato & peanut curry",
    description: "With spinach and sweet potato, it boasts two of your five-a-day and it’s under 400 calories",
    ingredients: [' Coconut oil ', ' Brown onion ', ' Garlic ', ' Ginger ', ' Thai red curry paste ', ' Peanut butter  ', ' Sweet potato ',
        ' Coconut milk ', ' Spinach ', ' Lime ', ' Rice ', ' Dry roasted peanuts '],
    allergyInfo: [{
        allergies: [' Nuts '],
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£12.45',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: 'True',
    available: 'False'
}, {
    name: "Ultimate spaghetti carbonara",
    description: 'This cheesy pasta dish is an Italian favourite',
    ingredients: [' Pancetta ', ' Pecorino cheese ', ' Parmesan ', ' Large eggs ', ' Spaghetti ', ' Garlic  ', ' Butter ',
        ' Sea salt ', ' Black pepper '],
    allergyInfo: [{
        allergies: [' Dairy ', 'Eggs'],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£11.50',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: 'True',
    available: 'False'
}, {
    name: "Veggie shepherd's pie with sweet potato mash",
    description: 'A warming and hearty shepher pie with sweet potato',
    ingredients: [' Olive oil ', ' Brown onion ', ' Carrot ', ' Fresh thyme ', ' Red wine ', ' Chopped tomatoes ', ' Vegetable stock ',
        ' Green lentils ', ' Sweet potatoes ', ' Butter ', ' Mature cheddar '],
    allergyInfo: [{
        allergies: [' Dairy ', 'Alchohol'],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£10.50',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Vegan chickpea curry jacket potatoes',
    description: 'Get some protein into a vegan diet with this tasty chickpea curry jacket',
    ingredients: [' Sweet potatoes ', ' Coconut oil ', ' Cumin seeds ', ' Brown onion ', ' Garlic ', ' Fresh ginger ',
        ' Green chilli ', ' Garam masala ', ' Ground coriander ', ' Turmeric  ', ' Tikka masala paste ', ' Chopped tomatoes ',
        ' Chickpeas ', ' Lemon ', ' Fresh coriander '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£11.00',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Chips',
    description: 'A side portion of chips',
    ingredients: [' Potatoes '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£2.00',
    dish: [{
        itemType: 'Side',
        itemId: 3
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Cauliflower cheese',
    description: 'A classic side dish ',
    ingredients: [' Cauliflower ', ' Butter ', ' Milk ', ' Flour ', ' Strong cheddar ', ' Breadcrumbs '],
    allergyInfo: [{
        allergies: [' Dairy '],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£2.20',
    dish: [{
        itemType: 'Side',
        itemId: 3
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Garlic & basil ciabatta',
    description: 'Perfect as a starter or as a side dish ',
    ingredients: [' Mayonnaise ', ' Butter ', ' Fresh basil ', ' Ciabatta bread ', ' Parmigiano reggiano ', ' Garlic '],
    allergyInfo: [{
        allergies: [' Eggs ', ' Dairy '],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£2.00',
    dish: [{
        itemType: 'Side',
        itemId: 3
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Spicy nduja arancini',
    description: 'Moreish rice balls with spicy nduja sausage, gooey mozzarella filling and crunchy breadcrumb coating',
    ingredients: [' Olive oil ', ' Brown onion ', ' Garlic ', ' Fennel seeds ', ' Risotto rice ', ' Chopped tomatoes ', ' Chicken stock ',
        ' Parmigiano reggiano ', ' Nduja sausage ', ' Mozzarella ', ' Plain flour ', ' Medium eggs ', ' Panko breadcrumbs ', ' Vegetable oil '],
    allergyInfo: [{
        allergies: [' Dairy ', ' Eggs '],
        vegetarian: 'False',
        vegan: 'False'
    }],
    price: '£3.50',
    dish: [{
        itemType: 'Side',
        itemId: 3
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Lemon cheesecake',
    description: 'A zingy cheesecake slice with creamy lemon',
    ingredients: [' Digestive biscuits ', ' Butter ', ' Light brown soft sugar ', ' Mascarpone ', ' Caster sugar ', ' Lemon Zest & juice '],
    allergyInfo: [{
        allergies: [' Dairy '],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£3.50',
    dish: [{
        itemType: 'Dessert',
        itemId: 4
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Rhubarb crumble',
    description: 'A stunning dessert using in season rhubarb',
    ingredients: [' Rhubarb ', ' Butter ', ' Golden caster sugar ', ' Self-raising flour ', ' Light brown muscovado sugar '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£2.90',
    dish: [{
        itemType: 'Dessert',
        itemId: 4
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Mango sorbet',
    description: "Low in fat, it's the perfect dessert for warm, balmy days",
    ingredients: [' Ripe mangoes ', ' Caster sugar ', ' Lime juice '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£2.50',
    dish: [{
        itemType: 'Dessert',
        itemId: 4
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Raspberry ripple blondies',
    description: "Treat the family to this simple but gorgeous traybake.",
    ingredients: [' Raspberries ', ' Light brown soft sugar ', ' Unsalted butter, ', ' Caster sugar ', ' Plain flour ', ' Eggs ', ' Vanilla extract ', ' Dark chocolate ', ' White chocolate '],
    allergyInfo: [{
        allergies: ['Eggs', 'Dairy'],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£3.99',
    dish: [{
        itemType: 'Dessert',
        itemId: 4
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Peach melba pavlova',
    description: "No summer soirée is complete without a perfect pavlova",
    ingredients: [' Egg whitess ', ' Icing sugar ', ' Cornflour ', ' Vanilla extract ', ' Vinegar ', ' Raspberries ', ' Caster sugar ', ' Peaches ', ' Double Cream '],
    allergyInfo: [{
        allergies: ['Eggs', 'Dairy'],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£3.75',
    dish: [{
        itemType: 'Dessert',
        itemId: 4
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Caramel iced latte',
    description: 'A refreshing boost of caffeiene',
    ingredients: [' Espresso shots ', ' Sugar ', ' Ice ', ' Caramel syrup ', ' Whole milk '],
    allergyInfo: [{
        allergies: [' Dairy '],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£2.20',
    dish: [{
        itemType: 'Drink',
        itemId: 5
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Carrot and orange smoothie',
    description: 'A smoothie that counts towards your 5 a day and packed with Vitamin C',
    ingredients: [' Carrot ', ' Orange ', ' Fresh ginger ', ' Oats ', ' Ice '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£2.40',
    dish: [{
        itemType: 'Drink',
        itemId: 5
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Honey and lemon tea',
    description: 'A simple mug of honey and lemon tea for a warming drink',
    ingredients: [' Lemon ', ' Honey '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£0.95',
    dish: [{
        itemType: 'Drink',
        itemId: 5
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Watermelon smoothie',
    description: "Enjoy a watermelon smoothie on a warm summer's day. Blended with banana and apple juice, this drink is packed with vitamin C",
    ingredients: [' Banana ', ' Watermelon ', 'Apple juice'],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£1.95',
    dish: [{
        itemType: 'Drink',
        itemId: 5
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Fruit punch',
    description: " With fresh fruit, mint, juice and lemonade, it's wonderfully refreshing",
    ingredients: [' Strawberries ', ' Orange ', ' Lemon ', ' Fresh mint ', ' Ice ', ' Pineapple juice ', ' Orange Juice ', ' Lemonade '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'True',
        vegan: 'True'
    }],
    price: '£1.50',
    dish: [{
        itemType: 'Drink',
        itemId: 5
    }],
    special: 'True',
    available: 'False'
}, {
    name: 'Blueberry milkshakes',
    description: "Enjoy in retro glasses with colourful straws for added fun factor",
    ingredients: [' Blueberries ', ' Maple syrup ', ' Vanilla extract ', ' Milk ', ' Vanilla ice cream '],
    allergyInfo: [{
        allergies: ['Dairy'],
        vegetarian: 'True',
        vegan: 'False'
    }],
    price: '£2.50',
    dish: [{
        itemType: 'Drink',
        itemId: 5
    }],
    special: 'True',
    available: 'False'
}
]);
menu.find({}).sort({ itemType: 1 }).exec(function (err, specials) {
    console.log("Chef Specials:", specials);
});

bcrypt.hash(process.env.GordonPassword, 10, function (err, hash) {
    // Store hash in your password DB.
    staff.insert({
        user: "Gordon",
        password: hash
    });
});

console.log("Staff member Gordon added");
staff.find({}, function (err, staff) {
    console.log(staff);//all docs
});
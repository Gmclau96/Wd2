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
        vegetarian: null,
        vegan: null
    }],
    price: '£11.00',
    dish: [{
        itemType: 'Lunch',
        itemId: 1
    }],
    special: true,
    available: false
}, {
    name: 'Masala omelette muffins',
    description: 'A fresh and creamy pesto sauce, served over wholemeal pasta',
    ingredients: [' Rapeseed oil ', ' Courgettes ', ' Large eggs ', ' Garlic cloves ', ' Red chilli ', ' Chilli powder ',
        ' Ground cumin ', ' Ground coriander ', ' Fresh coriander ', ' Fresh peas ', ' Feta cheese '],
    allergyInfo: [{
        allergies: [' Eggs ', ' Dairy '],
        vegetarian: 'Vegetarian friendly',
        vegan: null
    }],
    price: '£9.50',
    dish: [{
        itemType: 'Lunch',
        itemId: 1
    }],
    special: true,
    available: false
}, {
    name: 'Crunchy bulgur salad',
    description: 'A vibrant summer salad with radishes, edamame beans, peppers, almonds and herbs, drizzled with a citrus dressing',
    ingredients: [' Bulgur wheat ', ' Edammame peas ', ' Romano peppers ', ' Radishes ', ' Whole blanched almonds ', ' Fresh mint ',
        ' Fresh parsley ', ' Oranges ', ' Olive oil '],
    allergyInfo: [{
        allergies: [' Nuts '],
        vegetarian: 'Vegetarian friendly',
        vegan: 'Vegan Friendly'
    }],
    price: '£10.00',
    dish: [{
        itemType: 'Lunch',
        itemId: 1
    }],
    special: true,
    available: false
}, {
    name: 'Beef stroganoff',
    description: 'A classic beef stroganoff with steak and mushroom served with fresh parsley over pappardelle pasta',
    ingredients: [' Olive oil ', ' Brown onion ', ' Garlic ', ' Butter ', ' Mushrooms ', ' Fresh parsley ',
        ' Plain flour ', ' Fillet steak ', ' Crème fraîche ', ' English mustard ', ' Beef stock '],
    allergyInfo: [{
        allergies: [' Dairy ', ' Mustard '],
        vegetarian: null,
        vegan: null
    }],
    price: '£12.50',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: true,
    available: false
}, {
    name: "Veggie shepherd's pie with sweet potato mash",
    description: 'A warming and hearty shepher pie with sweet potato',
    ingredients: [' Olive oil ', ' Brown onion ', ' Carrot ', ' Fresh thyme ', ' Red wine ', ' Chopped tomatoes ', ' Vegetable stock ',
        ' Green lentils ', ' Sweet potatoes ', ' Butter ', ' Mature cheddar '],
    allergyInfo: [{
        allergies: [' Dairy '],
        vegetarian: 'Vegetarian friendly',
        vegan: null
    }],
    price: '£10.50',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: true,
    available: false
}, {
    name: 'Vegan chickpea curry jacket potatoes',
    description: 'Get some protein into a vegan diet with this tasty chickpea curry jacket',
    ingredients: [' Sweet potatoes ', ' Coconut oil ', ' Cumin seeds ', ' Brown onion ', ' Garlic ', ' Fresh ginger ',
        ' Green chilli ', ' Garam masala ', ' Ground coriander ', ' Turmeric  ', ' Tikka masala paste ', ' Chopped tomatoes ',
        ' Chickpeas ', ' Lemon ', ' Fresh coriander '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'Vegetarian friendly',
        vegan: 'Vegan Friendly'
    }],
    price: '£11.00',
    dish: [{
        itemType: 'Dinner',
        itemId: 2
    }],
    special: true,
    available: false
}, {
    name: 'Chips',
    description: 'A side portion of chips',
    ingredients: [' Potatoes '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'Vegetarian friendly',
        vegan: 'Vegan Friendly'
    }],
    price: '£2.00',
    dish: [{
        itemType: 'Side',
        itemId: 3
    }],
    special: true,
    available: false
}, {
    name: 'Garlic & basil ciabatta',
    description: 'Perfect as a starter or as a side dish ',
    ingredients: [' Mayonnaise ', ' Butter ', ' Fresh basil ', ' Ciabatta bread ', ' Parmigiano reggiano ', ' Garlic '],
    allergyInfo: [{
        allergies: [' Eggs ', ' Dairy '],
        vegetarian: 'Vegetarian friendly',
        vegan: null
    }],
    price: '£2.00',
    dish: [{
        itemType: 'Side',
        itemId: 3
    }],
    special: true,
    available: false
}, {
    name: 'Spicy nduja arancini',
    description: 'Moreish rice balls with spicy nduja sausage, gooey mozzarella filling and crunchy breadcrumb coating',
    ingredients: [' Olive oil ', ' Brown onion ', ' Garlic ', ' Fennel seeds ', ' Risotto rice ', ' Chopped tomatoes ', ' Chicken stock ',
        ' Parmigiano reggiano ', ' Nduja sausage ', ' Mozzarella ', ' Plain flour ', ' Medium eggs ', ' Panko breadcrumbs ', ' Vegetable oil '],
    allergyInfo: [{
        allergies: [' Dairy ', ' Eggs '],
        vegetarian: null,
        vegan: null
    }],
    price: '£3.50',
    dish: [{
        itemType: 'Side',
        itemId: 3
    }],
    special: true,
    available: false
}, {
    name: 'Lemon cheesecake',
    description: 'A zingy cheesecake slice with creamy lemon',
    ingredients: [' Digestive biscuits ', ' Butter ', ' Light brown soft sugar ', ' Mascarpone ', ' Caster sugar ', ' Lemon Zest & juice '],
    allergyInfo: [{
        allergies: [' Dairy '],
        vegetarian: 'Vegetarian friendly',
        vegan: null
    }],
    price: '£3.50',
    dish: [{
        itemType: 'Dessert',
        itemId: 4
    }],
    special: true,
    available: false
}, {
    name: 'Rhubarb crumble',
    description: 'A stunning dessert using in season rhubarb',
    ingredients: [' Rhubarb ', ' Butter ', ' Golden caster sugar ', ' Self-raising flour ', ' Light brown muscovado sugar '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'Vegetarian friendly',
        vegan: null
    }],
    price: '£2.90',
    dish: [{
        itemType: 'Dessert',
        itemId: 4
    }],
    special: true,
    available: false
}, {
    name: 'Mango sorbet',
    description: "Low in fat, it's the perfect dessert for warm, balmy days",
    ingredients: [' Ripe mangoes ', ' Caster sugar ', ' Lime juice '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'Vegetarian friendly',
        vegan: 'Vegan Friendly'
    }],
    price: '£2.50',
    dish: [{
        itemType: 'Dessert',
        itemId: 4
    }],
    special: true,
    available: false
}, {
    name: 'Caramel iced latte',
    description: 'A refreshing boost of caffeiene',
    ingredients: [' Espresso shots ', ' Sugar ', ' Ice ', ' Caramel syrup ', ' Whole milk '],
    allergyInfo: [{
        allergies: [' Dairy '],
        vegetarian: 'Vegetarian friendly',
        vegan: null
    }],
    price: '£2.20',
    dish: [{
        itemType: 'Drink',
        itemId: 5
    }],
    special: true,
    available: false
}, {
    name: 'Carrot and orange smoothie',
    description: 'A smoothie that counts towards your 5 a day and packed with Vitamin C',
    ingredients: [' Carrot ', ' Orange ', ' Fresh ginger ', ' Oats ', ' Ice '],
    allergyInfo: [{
        allergies: null,
        vegetarian: 'Vegetarian friendly',
        vegan: 'Vegan Friendly'
    }],
    price: '£2.40',
    dish: [{
        itemType: 'Drink',
        itemId: 5
    }],
    special: true,
    available: false
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
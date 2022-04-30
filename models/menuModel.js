const nedb = require("nedb");
class MenuDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    //this function populates chefs specials
    init() {
        this.db.insert([{
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
            itemType: 'Lunch',
            special: true
        }, {
            name: 'Beef stroganoff',
            description: 'A classic beef stroganoff with steak and mushroom served with fresh parsley over pappardelle pasta',
            ingredients: [' Olive oil ', ' Brown onion ', ' Garlic ', ' Butter ', ' Mushrooms ', ' Fresh parsley ',
                ' Plain flour ', ' Fillet steak ', ' Crème fraîche ', ' English mustard ', ' Beef stock '],
            allergyInfo: [{
                allergies: [' Crème fraîche ', ' English mustard '],
                vegetarian: null,
                vegan: null
            }],
            price: '£12.50',
            itemType: 'Dinner',
            special: true
        }, {
            name: 'Masala omelette muffins',
            description: 'A fresh and creamy pesto sauce, served over wholemeal pasta',
            ingredients: [' Rapeseed oil ', ' Courgettes ', ' Large eggs ', ' Garlic cloves ', ' Red chilli ', ' Chilli powder ',
                ' Ground cumin ', ' Ground coriander ', ' Fresh coriander ', ' Fresh peas ', ' Feta cheese '],
            allergyInfo: [{
                allergies: [' Large eggs ', ' Feta cheese '],
                vegetarian: 'Vegetarian friendly',
                vegan: null
            }],
            price: '£9.50',
            itemType: 'Lunch',
            special: true
        }, {
            name: "Veggie shepherd's pie with sweet potato mash",
            description: 'A warming and hearty shepher pie with sweet potato',
            ingredients: [' Olive oil ', ' Brown onion ', ' Carrot ', ' Fresh thyme ', ' Red wine ', ' Chopped tomatoes ', ' Vegetable stock ',
                ' Green lentils ', ' Sweet potatoes ', ' Butter ', ' Mature cheddar '],
            allergyInfo: [{
                allergies: [' Mature cheddar '],
                vegetarian: 'Vegetarian friendly',
                vegan: null
            }],
            price: '£10.50',
            itemType: 'Dinner',
            special: true
        }, {
            name: 'Crunchy bulgur salad',
            description: 'A vibrant summer salad with radishes, edamame beans, peppers, almonds and herbs, drizzled with a citrus dressing',
            ingredients: [' Bulgur wheat ', ' Edammame peas ', ' Romano peppers ', ' Radishes ', ' Whole blanched almonds ', ' Fresh mint ',
                ' Fresh parsley ', ' Oranges ', ' Olive oil '],
            allergyInfo: [{
                allergies: ['Whole blanched almonds '],
                vegetarian: 'Vegetarian friendly',
                vegan: 'Vegan Friendly'
            }],
            price: '£10.00',
            itemType: 'Lunch',
            special: true
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
            itemType: 'Dinner',
            special: true
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
            itemType: 'Side',
            special: true
        }, {
            name: 'Garlic & basil ciabatta',
            description: 'Perfect as a starter or as a side dish ',
            ingredients: [' Mayonnaise ', ' Butter ', ' Fresh basil ', ' Ciabatta bread ', ' Parmigiano reggiano ', ' Garlic '],
            allergyInfo: [{
                allergies: [' Mayonnaise ', ' Parmigiano reggiano '],
                vegetarian: 'Vegetarian friendly',
                vegan: null
            }],
            price: '£2.00',
            itemType: 'Side',
            special: true
        }, {
            name: 'Spicy nduja arancini',
            description: 'Moreish rice balls with spicy nduja sausage, gooey mozzarella filling and crunchy breadcrumb coating',
            ingredients: [' Olive oil ', ' Brown onion ', ' Garlic ', ' Fennel seeds ', ' Risotto rice ', ' Chopped tomatoes ', ' Chicken stock ',
                ' Parmigiano reggiano ', ' Nduja sausage ', ' Mozzarella ', ' Plain flour ', ' Medium eggs ', ' Panko breadcrumbs ', ' Vegetable oil '],
            allergyInfo: [{
                allergies: [' Parmigiano reggiano ', ' Mozzarella ', ' Medium eggs '],
                vegetarian: null,
                vegan: null
            }],
            price: '£3.50',
            itemType: 'Side',
            special: true
        }, {
            name: 'Caramel iced latte',
            description: 'A refreshing boost of caffeiene',
            ingredients: [' Espresso shots ', ' Sugar ', ' Ice ', ' Caramel syrup ', ' Whole milk '],
            allergyInfo: [{
                allergies: [' Whole milk '],
                vegetarian: 'Vegetarian friendly',
                vegan: null
            }],
            price: '£2.20',
            itemType: 'Drink',
            special: true
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
            itemType: 'Drink',
            special: true
        }, {
            name: 'Lemon cheesecake',
            description: 'A zingy cheesecake slice with creamy lemon',
            ingredients: [' Digestive biscuits ', ' Butter ', ' Light brown soft sugar ', ' Mascarpone ', ' Caster sugar ', ' Lemon Zest & juice '],
            allergyInfo: [{
                allergies: [' Mascarpone '],
                vegetarian: 'Vegetarian friendly',
                vegan: null
            }],
            price: '£3.50',
            itemType: 'Dessert',
            special: true
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
            itemType: 'Dessert',
            special: true
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
            itemType: 'Dessert',
            special: true
        }
        ]);
        this.db.find({}).sort({ itemType: 1 }).exec(function (err, docs) {
            console.log(docs);
        });

    }
    getMenu() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}).sort({ itemType: -1 }).exec(function (err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', entries);
                }
            })
        })
    }
    addMenuItem(name, description, ingredients, allergies, vegetarian, vegan, itemType, price, special) {
        var item = {
            name: name,
            description: description,
            ingredients: [ingredients],
            allergyInfo: [{
                allergies: [allergies],
                vegetarian: vegetarian,
                vegan: vegan
            }],
            price: price,
            itemType: itemType,
            special: Boolean
        }
        console.log("Menu item created", item);
        this.db.insert(item, function (err, doc) {
            if (err) {
                console.log("Could not add ", name);
            } else {
                console.log("Menu item added into the database ", doc)
            }
        })
    }
}
module.exports = MenuDAO;
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
            ingredients: ['Chicken breast', 'Fresh lime juice', 'Mild chilli powder', 'Garlic', 'Olive oil', 'Seeded wraps',
                'Avacado', 'Red pepper', 'Fresh coriander'],
            allergies: null,
            vegetarian: false,
            vegan: false,
            price: '£11.00',
            itemType: 'Lunch',
            special: true
        }, {
            name: 'Beef stroganoff',
            description: 'A classic beef stroganoff with steak and mushroom served with fresh parsley over pappardelle pasta',
            ingredients: ['Olive oil', 'Brown onion', 'Garlic', 'Butter', 'Mushrooms', 'Fresh parsley',
                'Plain flour', 'Fillet steak', 'Crème fraîche', 'English mustard', 'Beef stock'],
            allergies: ['Fillet steak', 'Crème fraîche', 'English mustard', 'Beef stock'],
            vegetarian: false,
            vegan: false,
            price: '£12.50',
            itemType: 'Dinner',
            special: true
        }, {
            name: 'Masala omelette muffins',
            description: 'A fresh and creamy pesto sauce, served over wholemeal pasta',
            ingredients: ['Rapeseed oil', 'Courgettes', 'Large eggs', 'Garlic cloves', 'Red chilli', 'Chilli powder',
                'Ground cumin', 'Ground coriander', 'Fresh coriander', 'Fresh peas', 'Feta cheese'],
            allergies: ['Large eggs', 'Feta cheese'],
            vegetarian: true,
            vegan: false,
            price: '£9.50',
            itemType: 'Lunch',
            special: true
        }, {
            name: "Veggie shepherd's pie with sweet potato mash",
            description: 'A warming and hearty shepher pie with weet potato',
            ingredients: ['Olive oil', 'Brown onion', 'Carrot', 'Fresh thyme', 'Red wine', 'Chopped tomatoes', 'vegetable stock',
                'Green lentils', 'Sweet potatoes', 'Butter', 'Mature cheddar'],
            allergies: ['Mature cheddar'],
            vegetarian: true,
            vegan: false,
            price: '£10.50',
            itemType: 'Dinner',
            special: true
        }, {
            name: 'Crunchy bulgur salad',
            description: 'A vibrant summer salad with radishes, edamame beans, peppers, almonds and herbs, drizzled with a citrus dressing',
            ingredients: ['Bulgur wheat', 'Edammame peas', 'Romano peppers', 'Radishes', 'Whole blanched almonds', 'Fresh mint',
                'Fresh parsley', 'Oranges', 'Olive oil'],
            allergies: ['Whole blanched almonds'],
            vegetarian: true,
            vegan: true,
            price: '£10.00',
            itemType: 'Lunch',
            special: true
        }, {
            name: 'Vegan chickpea curry jacket potatoes',
            description: 'Get some protein into a vegan diet with this tasty chickpea curry jacket',
            ingredients: ['Sweet potatoes', 'Coconut oil', 'Cumin seeds', 'Brown onion', 'Garlic', 'Fresh ginger',
                'Green chilli', 'Garam masala', 'Ground coriander', 'Turmeric', 'Tikka masala paste', 'Chopped tomatoes', 'Chickpeas', 'Lemon', 'Fresh coriander'],
            allergies: null,
            vegetarian: true,
            vegan: true,
            price: '£11.00',
            itemType: 'Dinner',
            special: true
        }, {
            name: 'Chips',
            description: 'A side portion of chips',
            ingredients: ['Potatoes'],
            allergies: null,
            vegetarian: true,
            vegan: true,
            price: '£2.00',
            itemType: 'Side',
            special: true
        }, {
            name: 'Garlic & basil ciabatta',
            description: 'Perfect as a starter or as a side dish ',
            ingredients: ['Mayonnaise', 'Butter', 'Fresh basil', 'Ciabatta bread', 'Parmigiano reggiano', 'Garlic'],
            allergies: ['Mayonnaise', 'Parmigiano reggiano'],
            vegetarian: true,
            vegan: false,
            price: '£2.00',
            itemType: 'Side',
            special: true
        }, {
            name: 'Spicy nduja arancini',
            description: 'Moreish rice balls with spicy nduja sausage, gooey mozzarella filling and crunchy breadcrumb coating',
            ingredients: ['Olive oil', 'Brown onion', 'Garlic', 'Fennel seeds', 'Risotto rice', 'Chopped tomatoes', 'Chicken stock',
                'Parmigiano reggiano', 'Nduja sausage', 'Mozzarella', 'Plain flour', 'Medium eggs', 'Panko breadcrumbs', 'Vegetable oil'],
            allergies: ['Chicken stock', 'Parmigiano reggiano', 'Nduja sausage', 'Mozzarella', 'Medium eggs'],
            vegetarian: false,
            vegan: false,
            price: '£3.50',
            itemType: 'Side',
            special: true
        }, {
            name: 'Caramel iced latte',
            description: 'A refreshing boost of caffeiene',
            ingredients: ['Espresso shots', 'Sugar', 'Ice', 'Caramel syrup', 'Whole milk'],
            allergies: ['Whole milk'],
            vegetarian: true,
            vegan: false,
            price: '£2.20',
            itemType: 'Drink',
            special: true
        }, {
            name: 'Carrot and orange smoothie',
            description: 'A smoothie that counts towards your 5 a day and packed with Vitamin C',
            ingredients: ['Carrot', 'Orange', 'Fresh ginger', 'Oats', 'Ice'],
            allergies: null,
            vegetarian: true,
            vegan: true,
            price: '£2.40',
            itemType: 'Drink',
            special: true
        }
        ])
        this.db.find({}).sort({ name: 1 }).exec(function (err, docs) {
            console.log(docs);
        });
        
    }
    getMenu() {
        return new promise((resolve, reject) => {
            this.db.find({}, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('Menu: ', entries);
                }
            })
        })
    }
    addMenuItem(name, description, ingredients, price, itemType, special) {
        var item = {
            name: name,
            description: description,
            ingredients: [ingredients],
            allergies: [allergies],
            vegetarian: Boolean,
            vegan: Boolean,
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
const dao = new MenuDAO();
dao.init();
module.exports = dao;
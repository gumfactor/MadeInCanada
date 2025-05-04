// A first-draft example of how you might organize your categories.
// Each "label" corresponds to a top-level or sub-level category. 
// You can rename or shuffle items around as you wish.

const categoriesData = [
  {
    label: "Food & Beverages",
    subcategories: [
      {
        label: "Baked Goods & Bakery",
        subcategories: [
          { label: "Bagels" },
          { label: "Cakes" },
          { label: "Cookies" },
          { label: "Snack Cakes" },
          { label: "English Muffins" },
          { label: "Hotdog/hamburger buns" },
          { label: "Waffles" },
        ]
      },
      {
        label: "Beverages",
        subcategories: [
          { label: "Bottled Water" },
          { label: "Cola Beverages" },
          { label: "Coffee" },
          { label: "Cream Sodas" },
          { label: "Energy Drink" },
          { label: "Fruit-Flavored Sodas" },
          { label: "Ginger Ales" },
          { label: "Iced Teas" },
          { label: "Lemon-Lime Sodas" },
          { label: "Orange Juice" },
          { label: "Other Notable Soft Drinks" },
          { label: "Root Beers" },
          { label: "Sparkling Water" },
          { label: "Tea" },
          { label: "Tonic Waters and Seltzers" }
        ]
      },
      {
        label: "Breads, Flour & Grains",
        subcategories: [
          { label: "Flour" },
          { label: "Oatmeal" },
          { label: "Pasta" },
          { label: "Quinoa" },
          { label: "Rice" },
          { label: "Cereal" },
          { label: "Tortillas and Flatbreads" }
        ]
      },
      {
        label: "Canned & Packaged Foods",
        subcategories: [
          { label: "Broth" },
          { label: "Canned Beans" },
          { label: "Canned Seafood" },
          { label: "Canned Tomatoes" },
          { label: "Canned Tuna" },
          { label: "Canned Vegetables" },
          { label: "Soup" },
          { label: "Soup Mixes / Boullion" },
          { label: "Pickled Vegetables" },
          { label: "Fermented Vegetables" },
          { label: "Jerky" },
          { label: "Deli Meats" }
        ]
      },
      {
        label: "Condiments, Sauces & Oils",
        subcategories: [
        {
            label: "Oils",
            subcategories: [
            { label: "Avocado Oil" },
            { label: "Canola Oil" },
            { label: "Coconut Oil" },
            { label: "Corn Oil" },
            { label: "Grapeseed Oil" },
            { label: "Olive Oil" },
            { label: "Sunflower Oil" },
            { label: "Vegetable Oil" },
            { label: "Oil - Other" },
            ]
        },
        {
            label: "Condiments",
            subcategories: [
            { label: "Granulated Sugars" }, 
            { label: "Honey" },
            { label: "Hot Sauce" },
            { label: "Ketchup" },
            { label: "Mayonnaise" },
            { label: "Mustard" },
            { label: "Peanut Butter" },
            { label: "Peanut Butter Alternative" },
            { label: "Salad Dressing" },
            { label: "Soy Sauce" },
            { label: "Spaghetti Sauce" },
            ]
          },
          {
            label: "Vinegars",
            subcategories: [
              { label: "Apple Cider Vinegar" },
              { label: "Balsamic Vinegar" },
              { label: "Ginger & Turmeric Vinegar" },
              { label: "Malt Vinegar" },
              { label: "Red Wine Vinegar" },
              { label: "Rice Vinegar" },
              { label: "White Vinegar" },
              { label: "White Wine Vinegar" },
              { label: "Specialty Vinegar" }
            ]
          }
        ]
      },
      {
        label: "Dairy & Dairy Alternatives",
        subcategories: [
          { label: "Cheese" },
          { label: "Cottage Cheese" },
          { label: "Cream Cheese" },
          { label: "Milk" },
          { label: "Sour Cream" },
          { label: "Plant-Based Milk" },
          { label: "Plant-Based Sour Cream Alternative" },
          { label: "Yogurt" }
        ]
      },
      {
        label: "Frozen Foods",
        subcategories: [
          { label: "Frozen Fish" },
          { label: "Frozen French Fries" },
          { label: "Frozen Fruit" },
          { label: "Frozen Fruits" },
          { label: "Frozen Meals" },
          { label: "Frozen Pizza" },
          { label: "Frozen Vegetables" },
          { label: "Ice Cream" },
          { label: "Gelato" }
        ]
      },
      {
        label: "Snacks & Sweets",
        subcategories: [
          { label: "Bars" },
          { label: "Candy" },
          { label: "Chocolate" },
          { label: "Chocolate Bar" },
          { label: "Crackers" },
          { label: "Fruit Snacks" },
          { label: "Granola" },
          { label: "Granola Bars" },
          { label: "Gum" },
          { label: "Jam/Jelly" }, // Consider moving
          { label: "Nuts" },
          { label: "Popcorn" },
          { label: "Potato Chips"},
          { label: "Pretzels" },
          { label: "Protein Bar" },
          { label: "Snack Cakes" },
          { label: "Snack Mix" },
          { label: "Trail Mix" }
        ]
      },
    ]
  },
  {
    label: "Health & Personal Care",
    subcategories: [
      {
        label: "Baby & Child Care",
        subcategories: [
          { label: "Baby Diapers" },
          { label: "Baby Food" },
          { label: "Baby Products" },
          { label: "Cloth Diapers" },
          { label: "Diaper Accessories" },
          { label: "Diaper Disposal" },
        ]
      },
            {
        label: "Feminine Hygiene",
        subcategories: [
          { label: "Maxi Pad" },
          { label: "Maxi Pad Alternative" },
          { label: "Tampon" },
          { label: "Menstrual Cup/Accessories" }
        ]
      },
      {
        label: "Medications & Remedies",
        subcategories: [
          { label: "Allergy Meds" },
          { label: "Acetaminophen" },
          { label: "ASA" },
          { label: "Antacid" },
          { label: "Antihistamine" },
          { label: "Cold Medicine" },
          { label: "Cough Drops" },
          { label: "Decongestant" },
          { label: "Ibuprofen" },
          { label: "Topical Pain Reliever" },
          { label: "Vitamins" }
        ]
      },
      {
        label: "Personal Care",
        subcategories: [
          { label: "Bandaids" },
          { label: "Bugspray" },
          { label: "Condom" },
          { label: "Deodorant" },
          { label: "Fragrances/Personal Care" },
          {label: "Incontinence",
              subcategories: [
              { label: "Adult Incontinence" },
              { label: "Incontinence Pad" },
              { label: "Incontinence Products" }
            ]
          },
          { label: "Lip Balm" },
          { label: "Moisturizing Lotion" },
          { label: "Mouthwash" },
          { label: "Razor" },
          { label: "Razor (Women)" },
          { label: "Razor Blades" },
          { label: "Shampoo" },
          { label: "Shaving Cream" },
          { label: "Soap" },
          { label: "Sunscreen" },
          { label: "Toothbrush" },
          { label: "Toothpaste" },
          { label: "Vitamins" }
        ]
      },
      {
        label: "Makeup & Cosmetics",
        subcategories: [
          { label: "Makeup / Cosmetics" },
          { label: "Nail Polish" },
          { label: "Perfume" }
        ]
      }
    ]
  },
  {
    label: "Household Supplies & Cleaning",
    subcategories: [
      {
        label: "Air Fresheners & Fragrance",
        subcategories: [
          { label: "Air Fresheners/Deodorizers" },
          { label: "Candles" },
          { label: "Home Fragrances" },
        ]
      },
      {
        label: "Cleaning Products",
        subcategories: [
          { label: "All-Purpose Cleaners" },
          { label: "Bathroom Cleaners" },
          { label: "Dish Soap" },
          { label: "Disinfectant Sprays and Wipes" },
          { label: "Fabric Softener" },
          { label: "Floor Cleaners" },
          { label: "Glass and Window Cleaners" },
          { label: "Household Cleaning Products​" },
          { label: "Kitchen Cleaners and Degreasers" },
          { label: "Laundry Detergent" },
          { label: "Odor Control" },
          { label: "Cleaning Vinegar" }
        ]
      },
      {
        label: "Paper & Disposable Items",
        subcategories: [
          { label: "Aluminum Foil" },
          { label: "Disposable Napkins" },
          { label: "Paper Towels" },
          { label: "Plastic Wrap/Bags" },
          { label: "Tableware" },
          { label: "Toilet Paper" },
          { label: "Facial Tissue" },
          { label: "Cloth Napkins" }
        ]
      },
    ]
  },
  {
    label: "Apparel, Footwear & Accessories",
    subcategories: [
      {
        label: "Clothing & Outerwear",
        subcategories: [
          { label: "Children's Clothing" },
          { label: "Unisex Clothing" },
          { label: "Women's Clothing"},
          { label: "Men's Clothing"},
          { label: "Outdoor Gear & Apparel" },
          { label: "Winter Coats" },
          { label: "Clothing Stores" }
        ]
      },
      {
        label: "Footwear",
        subcategories: [
          { label: "Children's Footwear" },
          { label: "Footwear Retailer" },
          { label: "Orthotics" },
          { label: "Shoes" },
          { label: "Shoe Care" },
          { label: "Socks",
          subcategories: [
            { label: "Socks" },
            { label: "Winter and Thermal Socks" },
            { label: "Compression and Medical Socks" }
            ]
           },
        ]
      },
    ]
  },
  {
    label: "Automotive & Tools",
    subcategories: [
        {
        label: "Automobiles",
        subcategories: [
          { label: "Cars"},
          { label: "Trucks"}
        ]
      },
      {
        label: "Automotive Parts & Systems",
        subcategories: [
          { label: "Automotive - Battery" },
          { label: "Belts and Hoses" },
          { label: "Braking System" },
          { label: "Cooling System" },
          { label: "Drivetrain Components" },
          { label: "Engine Components" },
          { label: "Exhaust and Emission Control" },
          { label: "Filters" },
          { label: "Fluids and Lubricants" },
          { label: "Performance Parts" },
          { label: "Suspension and Steering" },
          { label: "Tires" },
          { label: "Transmission System" },
          { label: "Wiper Blades" }
        ]
      },
    ]
  },
  {
    label: "Electronics & Appliances",
    subcategories: [
      {
        label: "Appliances & Kitchenware",
        subcategories: [
          { label: "Appliances" },
          { label: "Kitchenware" },
          { label: "Cookware" },
          { label: "Kitchen Utensils" }
        ]
      },
      {
        label: "Electronics & Tech",
        subcategories: [
          { label: "Batteries" },
          { label: "Batteries - Hearing Aid" },
          { label: "Electrical and Lighting" },
          { label: "Electronics/Appliance Store" }
        ]
      }
    ]
  },
  {
    label: "Sports & Fitness",
    subcategories: [
      {
        label: "Exercise Equipment",
        subcategories: [
          { label: "Barbells and Weight Plates" },
          { label: "Dumbbells" },
          { label: "Kettlebells" },
          { label: "Elliptical Machines" },
          { label: "Rowing Machines" },
          { label: "Ski Machines" },
          { label: "Stationary Bikes" },
          { label: "Treadmills" }
        ]
      },
    ]
  },
  {
    label: "Entertainment & Leisure",
    subcategories: [
        { label: "Books" },
        { label: "Board games" }
        ]
  },
  {
    label: "Stores & Retailers",
    subcategories: [
      {
        label: "Brick & Mortar",
        subcategories: [
          { label: "Clothing Stores" },
          { label: "Convenience Store" },
          { label: "Department Store" },
          { label: "Discount and Variety Stores" },
          { label: "Furniture Stores" },
          { label: "Gas Station" },
          { label: "Online Retailer"},
          { label: "Pharmacy" },
          { label: "Sports Retailers" },
          { label: "Supermarket" },
        ]
      },
    ]
  },
  {
    label: "Restaurants and Bakeries",
    subcategories: [
      {
        label: "Restaurants",
        subcategories: [
          { label: "Casual Dining and Family Restaurant" },
          { label: "High-end Restaurant" },
        ]
      },
      {
        label: "Bakeries and Coffee Shops",
        subcategories: [
          { label: "Bakery" },
          { label: "Bakery-Café" },
          { label: "Coffee Shop" },
          { label: "Tea Shop" }
        ]
      },
    ]
  },
  {
    label: "Home Improvement & Decor",
    subcategories: [
      {
        label: "Home Improvement",
        subcategories: [
          { label: "Home Improvement Stores"},
          { label: "Hand Tools" },
          { label: "Lawn Mowers" },
          { label: "Power Tools" }

        ]
      },
    ]
  },
];

export const restaurant = {
  name: "Rangoli Sweets & Chaats",
  description: "Authentic North Indian Mithai & Street Food Since 1987",
  logo: "/images/peacocklogo.webp",
  heroImage: "/images/sweets.webp",
};

export const categories = [
  { id: "short-eats", name: "Short Eats" },
  { id: "extras", name: "Extras" },
  { id: "snacks", name: "Snacks" },
  { id: "desserts", name: "Desserts" },
  { id: "chaats", name: "Chaats" },
  { id: "hot-drinks", name: "Hot Drinks" },
  { id: "fresh-juice", name: "Fresh Juice" },
  { id: "drinks", name: "Drinks" },
  { id: "shakes", name: "Shakes" },
  { id: "mojitos", name: "Mojitos" },
];

export const items = [

  // ─── SHORT EATS ─────────────────────────────────────────────────────────
  { id: "se1", categoryId: "short-eats", name: "Vada Pav", description: "Spicy potato fritter in a soft bun with garlic & green chutneys.", price: 50, image: "/images/VADAPAV.jpg", tags: ["Bestseller"] },
  { id: "se2", categoryId: "short-eats", name: "Samosa Pav", description: "Crispy samosa stuffed in a pav with chutneys.", price: 60, image: "/images/SAMOSAPAV.jpg", tags: ["Popular"] },
  { id: "se3", categoryId: "short-eats", name: "Pav Bhaji", description: "Buttery mashed vegetable curry served with toasted pav.", price: 90, image: "/images/PAVBHAJI.jpg", tags: ["Bestseller"] },
  { id: "se4", categoryId: "short-eats", name: "Pav Bhaji (With Cheese)", description: "Classic pav bhaji topped with a generous layer of melted cheese.", price: 110, image: "/images/PAVBHAJICHEESE.jpg", tags: ["Cheese"] },
  { id: "se5", categoryId: "short-eats", name: "Chole Bhature", description: "Fluffy deep-fried bhature served with spiced chickpea curry.", price: 150, image: "/images/CHOLEBHATURE.jpg", tags: ["Filling"] },
  { id: "se6", categoryId: "short-eats", name: "Plain Paratha", description: "Flaky layered whole wheat paratha, golden and buttery.", price: 50, image: "/images/PLAINPARATHA.jpeg", tags: [] },
  { id: "se7", categoryId: "short-eats", name: "Aloo Paratha", description: "Stuffed with spiced mashed potatoes, served with curd & pickle.", price: 80, image: "/images/ALOOPARATHA.jpg", tags: ["Popular"] },
  { id: "se8", categoryId: "short-eats", name: "Cheese Paratha", description: "Paratha loaded with melted cheese, crispy on the outside.", price: 120, image: "/images/CHEESEPAROTHA.jpg", tags: ["Cheese"] },
  { id: "se9", categoryId: "short-eats", name: "Paneer Paratha", description: "Stuffed with crumbled paneer and mild spices.", price: 120, image: "/images/PANEERPARATHA.jpg", tags: ["Protein Rich"] },

  // ─── EXTRAS ─────────────────────────────────────────────────────────────
  { id: "ex1", categoryId: "extras", name: "Extra Pav", description: "Soft toasted pav bun.", price: 15, image: "/images/img/ExtraPav.webp", tags: [] },
  { id: "ex2", categoryId: "extras", name: "Extra Paratha", description: "Additional flaky layered paratha.", price: 40, image: "/images/img/ExtraParatha.jpg", tags: [] },
  { id: "ex3", categoryId: "extras", name: "Extra Bhature", description: "Additional fluffy deep-fried bhatura.", price: 40, image: "/images/img/ExtraBhature.jpg", tags: [] },
  { id: "ex4", categoryId: "extras", name: "Extra Bhaji", description: "Additional portion of buttery pav bhaji.", price: 40, image: "/images/img/ExtraBhaji.jpg", tags: [] },
  { id: "ex5", categoryId: "extras", name: "Extra Chole", description: "Additional serving of spiced chickpea curry.", price: 40, image: "/images/img/ExtraChole.jpg", tags: [] },

  // ─── SNACKS ─────────────────────────────────────────────────────────────
  { id: "sn1", categoryId: "snacks", name: "Punjabi Samosa", description: "Crispy pastry cone stuffed with spiced potatoes and peas.", price: 20, image: "/images/PunjabiSamosa.jpg", tags: ["Bestseller"] },
  { id: "sn2", categoryId: "snacks", name: "Aloo Bonda (Batata Vada)", description: "Spiced potato ball coated in besan batter and deep fried.", price: 15, image: "/images/AlooBonda.jpg", tags: ["Popular"] },
  { id: "sn3", categoryId: "snacks", name: "Aloo Kachori", description: "Flaky deep-fried pastry with spiced potato filling.", price: 20, image: "/images/AlooKachori.jpg", tags: [] },
  { id: "sn4", categoryId: "snacks", name: "Paneer Pakoda", description: "Thick paneer cubes in a seasoned besan batter, golden fried.", price: 25, image: "/images/PaneerPakoda.jpg", tags: ["Protein Rich"] },
  { id: "sn5", categoryId: "snacks", name: "Veg Cutlet", description: "Mixed vegetable patty, crumb-coated and shallow fried.", price: 15, image: "/images/VegCutlet.jpg", tags: [] },
  { id: "sn6", categoryId: "snacks", name: "Chilli Bhaji", description: "Long green chillies dipped in spiced batter and fried crisp.", price: 15, image: "/images/ChilliBaji.jpg", tags: ["Spicy"] },
  { id: "sn7", categoryId: "snacks", name: "Veg Sandwich", description: "Layered veggie sandwich with mint chutney, grilled to perfection.", price: 30, image: "/images/VegSandwich.jpg", tags: [] },

  // ─── DESSERTS ───────────────────────────────────────────────────────────
  { id: "d1", categoryId: "desserts", name: "Rasgulla", description: "Spongy chenna balls soaked in light sugar syrup.", price: 35, image: "/images/Rasagulla.jpg", tags: [] },
  { id: "d2", categoryId: "desserts", name: "Gulab Jamun", description: "Soft milk-solid dumplings soaked in cardamom sugar syrup.", price: 35, image: "/images/Gulabjamun.jpg", tags: ["Bestseller"] },
  { id: "d3", categoryId: "desserts", name: "Kala Jamun", description: "Dark, rich variant of gulab jamun with deeper caramel flavour.", price: 40, image: "/images/KalaJamun.jpg", tags: [] },
  { id: "d4", categoryId: "desserts", name: "Rasmalai", description: "Delicate chenna discs in rich saffron milk with pistachios.", price: 45, image: "/images/Rasmalai.jpg", tags: ["Premium"] },
  { id: "d5", categoryId: "desserts", name: "Malai Sandwich", description: "Creamy malai layered between soft chenna slices.", price: 45, image: "/images/MalaiSandwich.jpg", tags: [] },
  { id: "d6", categoryId: "desserts", name: "Mawa Sandwich", description: "Rich mawa filling sandwiched between milk cake layers.", price: 45, image: "/images/MawaSandwich.jpg", tags: [] },
  { id: "d7", categoryId: "desserts", name: "Chum Chum", description: "Oval-shaped chenna sweet coated with coconut or mawa.", price: 45, image: "/images/ChumChum.jpg", tags: [] },
  { id: "d8", categoryId: "desserts", name: "Rabdi (100 gm)", description: "Thick, slow-reduced sweetened milk with cardamom and saffron.", price: 55, image: "/images/Rabidi.jpg", tags: ["Rich"] },
  { id: "d9", categoryId: "desserts", name: "Mango Malai", description: "Fresh mango pulp blended with creamy rabdi.", price: 65, image: "/images/MangoMalai.jpg", tags: ["Seasonal"] },
  { id: "d10", categoryId: "desserts", name: "Dry Fruit Malai", description: "Rich malai loaded with crushed almonds, pistachios, and cashews.", price: 65, image: "/images/DryFruitMalai.jpg", tags: ["Premium"] },
  { id: "d11", categoryId: "desserts", name: "Carrot Halwa (100 gm)", description: "Slow-cooked grated carrots in ghee, milk, and dry fruits.", price: 68, image: "/images/Carrothalwa.jpg", tags: ["Warm"] },

  // ─── CHAATS ─────────────────────────────────────────────────────────────
  { id: "ch1", categoryId: "chaats", name: "Pani Puri", description: "Crispy puris filled with spiced water, tamarind, and potato.", price: 70, image: "/images/PANIPURI.png", tags: ["Bestseller"] },
  { id: "ch2", categoryId: "chaats", name: "Bhel Puri", description: "Tangy toss of puffed rice, sev, onion, and chutneys.", price: 70, image: "/images/BHELPURI.jpg", tags: ["Light"] },
  { id: "ch3", categoryId: "chaats", name: "Sev Puri", description: "Flat puris topped with potato, onion, chutneys, and sev.", price: 80, image: "/images/SEVPURI.jpg", tags: [] },
  { id: "ch4", categoryId: "chaats", name: "Dahi Puri", description: "Puris filled with potato, topped with chilled dahi and chutneys.", price: 90, image: "/images/DAHIPURI.jpg", tags: ["Refreshing"] },
  { id: "ch5", categoryId: "chaats", name: "Samosa Chaat", description: "Crushed samosa topped with chole, dahi, and tangy chutneys.", price: 80, image: "/images/SAMOSACHAAT.jpg", tags: ["Popular"] },
  { id: "ch6", categoryId: "chaats", name: "Kachori Chaat", description: "Crushed kachori loaded with chutneys, dahi, and sev.", price: 80, image: "/images/KACHORICHAAT.jpg", tags: [] },
  { id: "ch7", categoryId: "chaats", name: "Aloo Papdi Chaat", description: "Crispy papdi with potatoes, chickpeas, dahi, and chutneys.", price: 80, image: "/images/ALOOPAPDICHAAT.jpg", tags: [] },
  { id: "ch8", categoryId: "chaats", name: "Samosa Chole Chaat", description: "Samosa served on a bed of spiced chole with all the toppings.", price: 90, image: "/images/SAMOSACHOLECHAAT.jpg", tags: ["Filling"] },
  { id: "ch9", categoryId: "chaats", name: "Kachori Chole Chaat", description: "Kachori paired with hearty chole, dahi, and fresh chutneys.", price: 90, image: "/images/KACHORICHOLECHAAT.png", tags: ["Filling"] },

  // ─── HOT DRINKS ─────────────────────────────────────────────────────────
  { id: "hd1", categoryId: "hot-drinks", name: "Tea", description: "Classic Indian chai brewed with milk and sugar.", price: 15, image: "/images/TEA.jpg", tags: [] },
  { id: "hd2", categoryId: "hot-drinks", name: "Black Tea", description: "Light black tea without milk, clean and refreshing.", price: 10, image: "/images/BLACKTEA.jpg", tags: [] },
  { id: "hd3", categoryId: "hot-drinks", name: "Black Coffee", description: "Strong black coffee, hot and bold.", price: 12, image: "/images/BLACKCOFFEE.jpg", tags: [] },
  { id: "hd4", categoryId: "hot-drinks", name: "Ginger Tea (Black)", description: "Black tea infused with fresh ginger.", price: 15, image: "/images/GINGERTEABLACK.jpg", tags: [] },
  { id: "hd5", categoryId: "hot-drinks", name: "Lemon Tea (Black)", description: "Black tea with a squeeze of fresh lemon.", price: 15, image: "/images/LEMONTEABLACK.png", tags: [] },
  { id: "hd6", categoryId: "hot-drinks", name: "Mint Tea (Black)", description: "Black tea with fresh mint leaves.", price: 15, image: "/images/MINTTEABLACK.jpg", tags: [] },
  { id: "hd7", categoryId: "hot-drinks", name: "Ginger Tea (Milk)", description: "Milk tea brewed with crushed ginger.", price: 20, image: "/images/GINGERTEAMILK.jpg", tags: ["Popular"] },
  { id: "hd8", categoryId: "hot-drinks", name: "Coffee", description: "Hot milk coffee, smooth and creamy.", price: 20, image: "/images/COFFEE.jpg", tags: [] },
  { id: "hd9", categoryId: "hot-drinks", name: "Masala Tea", description: "Spiced chai with cardamom, cloves, and cinnamon.", price: 25, image: "/images/MASALATEA.jpg", tags: ["Bestseller"] },
  { id: "hd10", categoryId: "hot-drinks", name: "Boost", description: "Hot Boost milk drink, rich and chocolatey.", price: 25, image: "/images/BOOST.png", tags: [] },
  { id: "hd11", categoryId: "hot-drinks", name: "Horlicks", description: "Hot Horlicks malted milk drink.", price: 25, image: "/images/HORLICKS.png", tags: [] },

  // ─── FRESH JUICE ────────────────────────────────────────────────────────
  { id: "fj1", categoryId: "fresh-juice", name: "Watermelon Juice", description: "Freshly squeezed watermelon, naturally sweet and hydrating.", price: 60, image: "/images/img/WatermelonJuice.jpg", tags: ["Refreshing"] },
  { id: "fj2", categoryId: "fresh-juice", name: "Orange Juice", description: "Freshly pressed orange juice, tangy and vitamin-rich.", price: 80, image: "/images/img/OrangeJuice.jpg", tags: [] },
  { id: "fj3", categoryId: "fresh-juice", name: "Pineapple Juice", description: "Fresh pineapple juice, tropical and refreshing.", price: 80, image: "/images/img/PineappleJuice.jpg", tags: [] },
  { id: "fj4", categoryId: "fresh-juice", name: "Grape Juice", description: "Fresh grape juice, naturally sweet.", price: 80, image: "/images/img/GrapeJuice.jpg", tags: [] },
  { id: "fj5", categoryId: "fresh-juice", name: "Mango Juice", description: "Fresh mango pulp juice, thick and luscious.", price: 80, image: "/images/img/MangoJuice.webp", tags: ["Seasonal"] },
  { id: "fj6", categoryId: "fresh-juice", name: "Guava Juice", description: "Fresh guava juice with a hint of pink salt.", price: 80, image: "/images/img/GuavaJuice.avif", tags: [] },
  { id: "fj7", categoryId: "fresh-juice", name: "Apple Juice", description: "Freshly pressed apple juice, crisp and clean.", price: 80, image: "/images/img/AppleJuice.webp", tags: [] },

  // ─── DRINKS ─────────────────────────────────────────────────────────────
  { id: "dr1", categoryId: "drinks", name: "Lime Soda", description: "Fresh lime with sparkling soda, sweet or salted.", price: 30, image: "/images/img/LimeSoda.jpg", tags: [] },
  { id: "dr2", categoryId: "drinks", name: "Lime", description: "Classic fresh lime juice with water.", price: 30, image: "/images/img/Lime.jpg", tags: [] },
  { id: "dr3", categoryId: "drinks", name: "Ginger Lime", description: "Fresh lime with a kick of ginger.", price: 40, image: "/images/img/GingerLime.jpg", tags: [] },
  { id: "dr4", categoryId: "drinks", name: "Grape Lime", description: "Refreshing grape and lime fusion.", price: 40, image: "/images/img/GrapeLime.webp", tags: [] },
  { id: "dr5", categoryId: "drinks", name: "Mint Lime", description: "Cool mint blended with tangy lime.", price: 40, image: "/images/img/MintLime.webp", tags: ["Refreshing"] },
  { id: "dr6", categoryId: "drinks", name: "Pineapple Lime", description: "Tropical pineapple with fresh lime twist.", price: 50, image: "/images/img/PineappleLime.jpg", tags: [] },
  { id: "dr7", categoryId: "drinks", name: "Sweet Lassi", description: "Thick churned yogurt drink, lightly sweetened.", price: 50, image: "/images/img/SweetLassi.webp", tags: ["Popular"] },
  { id: "dr8", categoryId: "drinks", name: "Salt Lassi", description: "Traditional salted yogurt drink with roasted cumin.", price: 50, image: "/images/img/SaltLassi.jpg", tags: [] },
  { id: "dr9", categoryId: "drinks", name: "Strawberry Lassi", description: "Creamy yogurt blended with fresh strawberry.", price: 70, image: "/images/img/StrawberryLassi.webp", tags: [] },
  { id: "dr10", categoryId: "drinks", name: "Gulkand Lassi", description: "Rose petal preserve blended into chilled lassi.", price: 70, image: "/images/img/GulkandLassi.jpg", tags: ["Unique"] },
  { id: "dr11", categoryId: "drinks", name: "Mango Lassi", description: "Thick yogurt whipped with ripe Alphonso mango pulp.", price: 70, image: "/images/img/MangoLassi.jpg", tags: ["Bestseller"] },

  // ─── SHAKES ─────────────────────────────────────────────────────────────
  { id: "sh0", categoryId: "shakes", name: "Special Avil Milk", description: "Traditional Kerala avil milk with flattened rice and banana.", price: 60, image: "/images/img/SpecialAvilMilk.avif", tags: ["Special"] },
  { id: "sh1", categoryId: "shakes", name: "Chikku Shake", description: "Creamy sapota milkshake, naturally sweet.", price: 80, image: "/images/img/ChikkuShake.jpg", tags: [] },
  { id: "sh2", categoryId: "shakes", name: "Sharjha Shake", description: "Rich and aromatic Sharjha flavoured milkshake.", price: 80, image: "/images/img/SharjhaShake.jpg", tags: [] },
  { id: "sh3", categoryId: "shakes", name: "Mango Shake", description: "Thick mango milkshake with real mango pulp.", price: 80, image: "/images/img/MangoShake.jpg", tags: ["Seasonal"] },
  { id: "sh4", categoryId: "shakes", name: "Apple Shake", description: "Fresh apple blended into a smooth milkshake.", price: 80, image: "/images/img/AppleShake.avif", tags: [] },
  { id: "sh5", categoryId: "shakes", name: "Pista Shake", description: "Pistachio milkshake, rich and nutty.", price: 80, image: "/images/img/PistaShake.jpg", tags: [] },
  { id: "sh6", categoryId: "shakes", name: "Strawberry Shake", description: "Sweet strawberry milkshake, creamy and pink.", price: 80, image: "/images/img/StrawberryShake.jpg", tags: [] },
  { id: "sh7", categoryId: "shakes", name: "Vanilla Shake", description: "Classic vanilla bean milkshake, smooth and creamy.", price: 80, image: "/images/img/VanillaShake.jpg", tags: [] },
  { id: "sh8", categoryId: "shakes", name: "Chocolate Shake", description: "Rich chocolate milkshake, thick and indulgent.", price: 80, image: "/images/img/ChocolateShake.jpg", tags: ["Popular"] },
  { id: "sh9", categoryId: "shakes", name: "Oreo Shake", description: "Crushed Oreo cookies blended into a creamy milkshake.", price: 90, image: "/images/img/OreoShake.jpg", tags: ["Popular"] },
  { id: "sh10", categoryId: "shakes", name: "Cold Boost", description: "Chilled Boost milkshake, chocolatey and energising.", price: 100, image: "/images/img/ColdBoost.jpg", tags: [] },
  { id: "sh11", categoryId: "shakes", name: "Cold Coffee", description: "Iced coffee blended with milk and cream.", price: 100, image: "/images/img/ColdCoffee.webp", tags: ["Popular"] },
  { id: "sh12", categoryId: "shakes", name: "Dry Fruits Shake", description: "Premium milkshake loaded with almonds, cashews, and dates.", price: 120, image: "/images/img/DryFruitsShake.jpg", tags: ["Premium"] },
  { id: "sh13", categoryId: "shakes", name: "Apple & Dates Shake", description: "Apple and dates blended into a wholesome, naturally sweet shake.", price: 120, image: "/images/img/Apple&DatesShake.webp", tags: ["Healthy"] },

  // ─── MOJITOS ────────────────────────────────────────────────────────────
  { id: "mj1", categoryId: "mojitos", name: "Mint Mojito", description: "Classic mint and lime mocktail, fizzy and refreshing.", price: 80, image: "/images/img/MintMojito.jpg", tags: ["Bestseller"] },
  { id: "mj2", categoryId: "mojitos", name: "Blueberry Mojito", description: "Sweet blueberry with mint and sparkling soda.", price: 80, image: "/images/img/BlueberryMojito.jpg", tags: [] },
  { id: "mj3", categoryId: "mojitos", name: "Blue Curacao Mojito", description: "Vibrant blue curacao with mint and lime soda.", price: 80, image: "/images/img/BlueCuracaoMojito.jpg", tags: [] },
  { id: "mj4", categoryId: "mojitos", name: "Mango Mojito", description: "Tropical mango blended with mint and soda.", price: 80, image: "/images/img/MangoMojito.jpg", tags: ["Seasonal"] },
  { id: "mj5", categoryId: "mojitos", name: "Strawberry Mojito", description: "Sweet strawberry muddled with fresh mint.", price: 80, image: "/images/img/StrawberryMojito.jpg", tags: [] },
  { id: "mj6", categoryId: "mojitos", name: "Kiwi Mojito", description: "Tangy kiwi with mint and sparkling lime soda.", price: 80, image: "/images/img/KiwiMojito.jpg", tags: [] },
  { id: "mj7", categoryId: "mojitos", name: "Litchi Mojito", description: "Delicate litchi with mint, sweet and aromatic.", price: 80, image: "/images/img/LitchiMojito.jpg", tags: [] },
  { id: "mj8", categoryId: "mojitos", name: "Green Apple Mojito", description: "Crisp green apple with fresh mint and soda.", price: 80, image: "/images/img/GreenAppleMojito.jpg", tags: [] },
  { id: "mj9", categoryId: "mojitos", name: "Passion Fruit Mojito", description: "Exotic passion fruit with mint and lime soda.", price: 80, image: "/images/img/PassionFruitMojito.jpg", tags: [] },
  { id: "mj10", categoryId: "mojitos", name: "Pineapple Mojito", description: "Tropical pineapple with fresh mint and soda.", price: 80, image: "/images/img/PineappleMojito.jpg", tags: [] },
  { id: "mj11", categoryId: "mojitos", name: "Guava Mojito", description: "Fresh guava with mint and sparkling soda.", price: 80, image: "/images/img/GuavaMojito.jpg", tags: [] },
];

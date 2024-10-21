// data.ts

// in this interface i want to add null property 



export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  discount?: number;
  image: string;
  category?: string;
}


const products: Product[] = [
  {
    id: 1,
    name: "Old Monk",
    description: "Old Monk is a renowned dark rum brand from India, known for its unique taste and rich history. Launched in 1954, it has become a staple in many households and bars around the world. The rum is aged for a minimum of 12 years in oak barrels, which imparts a smooth, rich flavor profile with notes of caramel, vanilla, and a hint of spice. Old Monk is often enjoyed neat, on the rocks, or in a variety of cocktails, making it a versatile choice for any occasion.",
    price: 25.99,
    discount: 0,
    image: "https://www.oldmonk.com/images/old-monk-1000ml.jpg",
    category: "Rum, Dark Rum"
  },
  {
    id: 2,
    name: "Hennessy VS",
    description: "Hennessy VS (Very Special) is one of the most recognized cognacs globally. Produced in the Cognac region of France, this brandy is a blend of up to 40 different eaux-de-vie, aged for at least two years in oak barrels. The result is a rich, full-bodied spirit with flavors of fruit, vanilla, and a hint of oak. Hennessy VS is perfect for sipping neat or using in cocktails, adding a touch of sophistication to any drink. Its distinctive flavor and smooth finish make it a favorite among connoisseurs and casual drinkers alike.",
    price: 49.99,
    discount: 10,
    image: "https://www.hennessy.com/sites/default/files/styles/product_detail_image/public/2020-12/hennessy-vs.png",
    category: "Cognac, Brandy"
  },
  {
    id: 3,
    name: "Jack Daniel's Old No. 7",
    description: "Jack Daniel's Old No. 7 is an iconic Tennessee whiskey that has stood the test of time since its establishment in 1866. Known for its distinctive square bottle and black label, this whiskey is charcoal mellowed, a process known as the Lincoln County Process, which gives it a smooth character. With notes of vanilla, toasted oak, and caramel, Jack Daniel's is versatile, enjoyed neat, on the rocks, or in cocktails like the classic Whiskey Sour. Its bold yet smooth flavor profile makes it a staple in bars worldwide.",
    price: 32.99,
    discount: 5,
    image: "https://www.jackdaniels.com/Content/Images/Product-Page/jackdaniels-old-no7-700ml.png",
    category: "Whiskey, Tennessee Whiskey"
  },
  {
    id: 4,
    name: "Absolut Vodka",
    description: "Absolut Vodka is a premium vodka brand from Sweden, known for its purity and exceptional quality. Made from winter wheat and distilled using a unique process that preserves its natural flavors, Absolut offers a clean and smooth taste with a hint of fruitiness. The brand has a wide range of flavored vodkas, making it a popular choice for cocktails. Whether enjoyed straight, on the rocks, or mixed in a cocktail, Absolut's versatility and consistency have made it a favorite among vodka enthusiasts.",
    price: 28.99,
    discount: 0,
    image: "https://www.absolut.com/globalassets/images/products/absolut-vodka.png",
    category: "Vodka"
  },
  {
    id: 5,
    name: "Johnnie Walker Black Label",
    description: "Johnnie Walker Black Label is a premium blended Scotch whisky that represents the pinnacle of craftsmanship and quality. Aged for a minimum of 12 years, it offers a rich and complex flavor profile with notes of dried fruit, dark chocolate, and a hint of smoke. This whisky is carefully crafted from over 40 different whiskies, ensuring a smooth and sophisticated experience. Enjoy it neat, on the rocks, or in classic cocktails like the Rob Roy, making it a versatile choice for any whisky lover.",
    price: 54.99,
    discount: 15,
    image: "https://www.johnniewalker.com/globalassets/jwblacklabel.png",
    category: "Whiskey, Scotch"
  },
  {
    id: 6,
    name: "Chivas Regal 12",
    description: "Chivas Regal 12 Year Old is a renowned blended Scotch whisky, known for its smoothness and richness. Aged for a minimum of 12 years, this whisky is crafted from the finest malt and grain whiskies, creating a harmonious blend of flavors. With notes of honey, vanilla, and a hint of apple, Chivas Regal is perfect for sipping neat or mixing in cocktails. Its balanced profile and luxurious character make it a popular choice among whisky enthusiasts.",
    price: 48.99,
    discount: 10,
    image: "https://www.chivas.com/media/5153/chivas_regal_12_bottle.png",
    category: "Whiskey, Scotch"
  },
  {
    id: 7,
    name: "Captain Morgan Original Spiced Rum",
    description: "Captain Morgan Original Spiced Rum is a beloved spiced rum brand known for its distinctive flavor and adventurous spirit. This rum is blended with a variety of spices, including vanilla, cinnamon, and clove, resulting in a sweet and smooth taste. Perfect for mixing in cocktails like the classic Captain and Cola or enjoying on the rocks, Captain Morgan has become a staple in bars and homes alike. Its lively character and festive branding make it a favorite choice for parties and celebrations.",
    price: 26.99,
    discount: 5,
    image: "https://www.captainmorgan.com/sites/default/files/styles/product_detail_image/public/2020-12/captain-morgan-original-spiced-rum-700ml.png",
    category: "Rum, Spiced Rum"
  },
  {
    id: 8,
    name: "Grey Goose Vodka",
    description: "Grey Goose is a premium vodka brand that originated in France, celebrated for its exceptional quality and smoothness. Made from soft winter wheat and natural spring water, Grey Goose undergoes a meticulous distillation process to create a clean and crisp flavor. This vodka is perfect for sipping or mixing in cocktails, adding a touch of elegance to any drink. With its signature bottle design and reputation for excellence, Grey Goose is a favorite among vodka connoisseurs and casual drinkers alike.",
    price: 39.99,
    discount: 0,
    image: "https://www.greygoose.com/images/products/grey-goose-vodka.png",
    category: "Vodka"
  },
  {
    id: 9,
    name: "Don Julio Blanco",
    description: "Don Julio Blanco is a premium tequila that represents the pinnacle of quality in the tequila world. Produced in the highlands of Jalisco, Mexico, this tequila is made from 100% blue agave, resulting in a clean and crisp flavor profile. With notes of citrus, white pepper, and a hint of sweetness, Don Julio Blanco is perfect for sipping or using in cocktails like the classic Margarita. Its smooth finish and high-quality ingredients make it a favorite among tequila enthusiasts.",
    price: 49.99,
    discount: 10,
    image: "https://www.donjulio.com/globalassets/images/products/don-julio-blanco.png",
    category: "Tequila"
  },
  {
    id: 10,
    name: "The Glenlivet 12 Year Old",
    description: "The Glenlivet 12 Year Old is a classic single malt Scotch whisky, known for its smooth and floral character. Aged for 12 years in oak barrels, it offers a rich and complex flavor profile with notes of honey, citrus, and vanilla. The Glenlivet is perfect for sipping neat or enjoying on the rocks, making it a versatile choice for whisky lovers. Its heritage and craftsmanship have earned it a place among the finest single malts in the world.",
    price: 59.99,
    discount: 0,
    image: "https://www.glenlivet.com/globalassets/images/products/glenlivet-12.png",
    category: "Whiskey, Scotch"
  },
  {
    id: 11,
    name: "Martell VS",
    description: "Martell VS (Very Special) is a distinguished cognac from the renowned Martell house, known for its fruity and vibrant flavor. Aged for a minimum of two years, this cognac showcases notes of fresh fruit, spices, and a hint of oak, creating a smooth and harmonious taste. Perfect for sipping neat, on the rocks, or in cocktails, Martell VS offers versatility and elegance. Its legacy and quality make it a favored choice for both new and seasoned cognac drinkers.",
    price: 44.99,
    discount: 5,
    image: "https://www.martell.com/media/2221/martell-vs.png",
    category: "Cognac"
  },
  {
    id: 12,
    name: "Bacardi Superior Rum",
    description: "Bacardi Superior Rum is a classic white rum known for its light and smooth character. Produced in Puerto Rico, this rum is made from the finest sugarcane and aged for a minimum of one year, resulting in a clean and refreshing taste. With subtle notes of vanilla and almond, Bacardi Superior is perfect for cocktails like the Mojito or Pina Colada, making it a versatile choice for mixologists. Its storied history and commitment to quality have made Bacardi a leading rum brand worldwide.",
    price: 24.99,
    discount: 0,
    image: "https://www.bacardi.com/globalassets/images/products/bacardi-superior.png",
    category: "Rum, White Rum"
  },
  {
    id: 13,
    name: "Belvedere Vodka",
    description: "Belvedere Vodka is a premium Polish vodka that represents the epitome of quality and craftsmanship. Made from 100% Polish rye and distilled four times, Belvedere offers a rich and velvety texture with a clean, crisp taste. This vodka is perfect for sipping or in cocktails, known for its ability to elevate any drink. Belvedere's commitment to quality and luxury makes it a favorite among vodka aficionados.",
    price: 39.99,
    discount: 0,
    image: "https://www.belvederevodka.com/images/products/belvedere-vodka.png",
    category: "Vodka"
  },
  {
    id: 14,
    name: "Woodford Reserve Bourbon",
    description: "Woodford Reserve is a small-batch bourbon whiskey known for its rich flavor and craftsmanship. Produced in Kentucky, this bourbon is aged for a minimum of four years, resulting in a smooth, full-bodied taste with notes of dried fruit, vanilla, and toasted oak. Woodford Reserve is perfect for sipping neat or in cocktails, offering a luxurious experience for bourbon lovers. Its attention to detail and quality has earned it a place among the finest bourbons in the world.",
    price: 52.99,
    discount: 10,
    image: "https://www.woodfordreserve.com/globalassets/images/products/woodford-reserve.png",
    category: "Whiskey, Bourbon"
  },
  {
    id: 15,
    name: "Roku Gin",
    description: "Roku Gin is a Japanese craft gin that brings together traditional gin-making techniques with unique Japanese botanicals. Each of the six botanicals is harvested in Japan, adding a distinct character to the spirit. With notes of cherry blossom, yuzu citrus, and green tea, Roku Gin offers a refreshing and aromatic profile. It's perfect for cocktails or enjoyed simply with tonic water, providing a delightful twist on classic gin drinks.",
    price: 39.99,
    discount: 5,
    image: "https://www.roku-gin.com/globalassets/images/products/roku-gin.png",
    category: "Gin"
  },
  {
    id: 16,
    name: "Glenfiddich 12 Year Old",
    description: "Glenfiddich 12 Year Old is one of the most popular single malt Scotch whiskies worldwide. Aged for 12 years in American and European oak casks, it offers a fruity and floral aroma with notes of pear, honey, and a touch of oak. Glenfiddich 12 is perfect for those new to whisky as well as seasoned drinkers, enjoyed neat, on the rocks, or in classic cocktails. Its balanced flavor and accessibility have made it a favorite choice for whisky lovers.",
    price: 49.99,
    discount: 0,
    image: "https://www.glenfiddich.com/globalassets/images/products/glenfiddich-12.png",
    category: "Whiskey, Scotch"
  },
  {
    id: 17,
    name: "Pernod Ricard Pastis",
    description: "Pernod Ricard Pastis is an iconic French anise-flavored spirit that has been enjoyed since the late 19th century. Known for its distinctive licorice flavor, this pastis is often served diluted with water, which transforms its clear appearance into a milky white drink. Its refreshing taste makes it a popular choice in summer, especially in the Mediterranean regions. Pernod Ricard is perfect as an aperitif, providing a unique taste experience that embodies the spirit of France.",
    price: 29.99,
    discount: 5,
    image: "https://www.pernodricard.com/globalassets/images/products/pernod-pastis.png",
    category: "Liqueur"
  },
  {
    id: 18,
    name: "Sierra Tequila Silver",
    description: "Sierra Tequila Silver is a vibrant and lively tequila produced in Mexico. Made from 100% blue agave, this tequila is known for its crisp and clean flavor, making it perfect for cocktails or sipping. With notes of citrus and a smooth finish, Sierra Tequila Silver is often used in Margaritas and other refreshing cocktails. Its festive branding and quality have made it a favorite among tequila enthusiasts and casual drinkers alike.",
    price: 28.99,
    discount: 0,
    image: "https://www.sierratequila.com/globalassets/images/products/sierra-silver.png",
    category: "Tequila"
  },
  {
    id: 19,
    name: "Plymouth Gin",
    description: "Plymouth Gin is a unique gin that originates from the city of Plymouth, England. This gin is known for its slightly sweeter and more earthy profile compared to London Dry gin, with a rich history dating back to the 18th century. With a blend of seven botanicals, including juniper, coriander, and root herbs, Plymouth Gin offers a complex yet smooth flavor. It’s ideal for classic cocktails like the Martini or Gin and Tonic, bringing a touch of history and tradition to every sip.",
    price: 39.99,
    discount: 0,
    image: "https://www.plymouthgin.com/globalassets/images/products/plymouth-gin.png",
    category: "Gin"
  },
  {
    id: 20,
    name: "Balvenie DoubleWood 12 Year Old",
    description: "Balvenie DoubleWood 12 Year Old is a distinguished single malt Scotch whisky that undergoes a unique aging process. Matured in two types of wood—traditional oak and sherry casks—this whisky develops a rich and complex flavor profile with notes of vanilla, honey, and dried fruits. Balvenie is perfect for sipping neat or on the rocks, offering a luxurious experience for whisky enthusiasts. Its craftsmanship and exceptional quality have made it a beloved choice among whisky connoisseurs.",
    price: 64.99,
    discount: 10,
    image: "https://www.thebalvenie.com/globalassets/images/products/balvenie-12.png",
    category: "Whiskey, Scotch"
  }
  
]



export default products;

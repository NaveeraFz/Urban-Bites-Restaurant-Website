// ==========================================
// Urban Bites - products-data.js
// Shared product catalog used across pages
// ==========================================

var UB_PRODUCTS = [
  {
    id: 1,
    name: "Classic Smash Burger",
    shortDesc: "Beef patty, cheddar, lettuce",
    longDesc: "A juicy beef patty smashed thin on the grill for a crispy edge, layered with melted cheddar, crunchy lettuce, and our house sauce inside a toasted brioche bun. Served with a side of crispy fries.",
    price: 12,
    image: "https://images.unsplash.com/photo-1678110707289-ab14382a1625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWMlMjBzbWFzaCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    shortDesc: "Mozzarella, basil, tomato",
    longDesc: "A wood-fired classic topped with fresh mozzarella, ripe tomato sauce, and fragrant basil leaves. Simple ingredients, done right, on a thin and crispy crust.",
    price: 15,
    image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    name: "Garden Fresh Salad",
    shortDesc: "Mixed greens, vinaigrette",
    longDesc: "A crisp mix of seasonal greens, cherry tomatoes, cucumber, and red onion, tossed in a light house-made vinaigrette. A refreshing way to start any meal.",
    price: 9,
    image: "https://plus.unsplash.com/premium_photo-1690561082420-fad21ede2431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlaCUyMGdyZWVuJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "Creamy Carbonara",
    shortDesc: "Spaghetti, pancetta, parmesan",
    longDesc: "Al dente spaghetti tossed in a rich, creamy sauce with crispy pancetta and a generous shaving of parmesan. Finished with cracked black paper.",
    price: 14,
    image: "https://plus.unsplash.com/premium_photo-1723575632700-f58f9322db42?q=80&w=791&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Grilled Chicken Bowl",
    shortDesc: "Chicken, rice, avocado",
    longDesc: "Tender grilled chicken breast over seasoned rice with creamy avocado, roasted vegetables, and a drizzle of chipotle-lime sauce.",
    price: 13,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg09tYFAwMZYYPM_IbTSz17aTsuZliWd2kHqDKcwukxQ&s=10"
  },
  {
    id: 6,
    name: "Ribeye Steak",
    shortDesc: "Prime cut, herb butter, fries",
    longDesc: "A prime cut ribeye grilled to your liking, topped with herb butter and served alongside golden, crispy fries. A hearty choice for steak lovers.",
    price: 28,
    image: "https://images.unsplash.com/photo-1774806288349-3d910c6a9334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEElMjBwcmltZSUyMGN1dCUyMHJpYmV5ZSUyMGdyaWxsZWQlMjB0byUyMHlvdXIlMjBsaWtpbmclMkMlMjB0b3BwZWQlMjB3aXRoJTIwaGVyYiUyMGJ1dHRlciUyMGFuZCUyMHNlcnZlZCUyMGFsb25nc2lkZSUyMGdvbGRlbiUyQyUyMGNyaXNweSUyMGZyaWVzLiUyMEElMjBoZWFydHklMjBjaG9pY2UlMjBmb3IlMjBzdGVhayUyMGxvdmVycy58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 7,
    name: "Street Tacos",
    shortDesc: "Corn tortilla, beef, onion",
    longDesc: "Three soft corn tortillas filled with seasoned beef, chopped onion, cilantro, and a squeeze of fresh lime. Served with our signature salsa on the side.",
    price: 11,
    image: "https://images.unsplash.com/photo-1613591629320-40af6604bfed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRocmVlJTIwc29mdCUyMGNvcm4lMjB0b3J0aWxsYXMlMjBmaWxsZWQlMjB3aXRoJTIwc2Vhc29uZWQlMjBiZWVmJTJDJTIwY2hvcHBlZCUyMG9uaW9uJTJDJTIwY2lsYW50cm8lMkMlMjBhbmQlMjBhJTIwc3F1ZWV6ZSUyMG9mJTIwZnJlc2glMjBsaW1lLiUyMFNlcnZlZCUyMHdpdGglMjBvdXIlMjBzaWduYXR1cmUlMjBzYWxzYSUyMG9uJTIwdGhlJTIwc2lkZS58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    shortDesc: "Warm chocolate, ice cream",
    longDesc: "A warm chocolate cake with a molten center, served with a scoop of vanilla ice cream. The perfect finish to any meal.",
    price: 8,
    image: "https://images.unsplash.com/photo-1660652378762-5c791ceb2f6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QSUyMHdhcm0lMjBjaG9jb2xhdGUlMjBjYWtlJTIwd2l0aCUyMGElMjBtb2x0ZW4lMjBjZW50ZXIlMkMlMjBzZXJ2ZWQlMjB3aXRoJTIwYSUyMHNjb29wJTIwb2YlMjB2YW5pbGxhJTIwaWNlJTIwY3JlYW0uJTIwVGhlJTIwcGVyZmVjdCUyMGZpbmlzaCUyMHRvJTIwYW55JTIwbWVhbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 9,
    name: "Full English Breakfast",
    shortDesc: "Eggs, bacon, toast, beans",
    longDesc: "A hearty plate with eggs cooked to your liking, crispy bacon, grilled tomato, baked beans, and buttered toast. A morning classic done properly.",
    price: 10,
    image: "https://images.unsplash.com/photo-1712746786164-6bcf28c09cfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1bGwlMjBlbmdsaXNoJTIwYnJlYWtmYXN0fGVufDB8fDB8fHww"
  },
  {
    id: 10,
    name: "Sushi Platter",
    shortDesc: "Salmon, tuna, avocado rolls",
    longDesc: "A curated selection of fresh salmon, tuna, and avocado rolls, served with soy sauce, wasabi, and pickled ginger.",
    price: 22,
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGklMjBwbGF0dGVyfGVufDB8fDB8fHww"
  }
];

function ubGetProductById(id) {
  id = parseInt(id, 10);
  for (var i = 0; i < UB_PRODUCTS.length; i++) {
    if (UB_PRODUCTS[i].id === id) return UB_PRODUCTS[i];
  }
  return null;
}

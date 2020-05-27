const FOOD_DATA = {
    tacos : {
      id : 1 ,
      title : "tacos",
      subTitle : 'Tacos With Lime',
      routeName : 'Tacos',
      imageUrl : 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price : 12.25,
      reviews :"⭐⭐⭐⭐",
      more: "2 package 🎁🎁",
      extend : [
        {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 10
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 15
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 40
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 15
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 25
          }
      ]    
    },
    pancake: {
      id : 2 ,
      subTitle : 'Pancake with Sliced Strawberry',
      title: "pancake",
      routeName : 'Pancake',
      imageUrl : 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      price : 25,
      reviews : "⭐⭐⭐⭐",
      more: "2 package 🎁🎁",
      extend : [
        {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 5
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 10
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 15
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 20
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 20
          }
      ]
    },
    rice : {
      id : 3 ,
      title :"rice",
      subTitle : 'Plate of Rice and Cooked Meet',
      routeName : 'Rice',
      imageUrl : 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      price : 30, 
      reviews : "⭐⭐⭐⭐",
      more: "2 package 🎁🎁",
      extend : [
        {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 5
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 10
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 15
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 20
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 20
          }
      ]
    },
    beef: {
      id : 4 ,
      subTitle : 'Beef Steak with Sauce',
      title : "beef",
      routeName : 'Beef',
      imageUrl : 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      price : 25,
      reviews : "⭐⭐⭐⭐",
      more: "2 package 🎁🎁",
      extend : [
        {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 20
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 20
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 20
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 20
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 20
          }
      ]
    },
    pasta : {
      id : 5 ,
      subTitle : 'Cooked Pasta',
      title : "pasta",
      routeName : 'Pasta',
      imageUrl : 'https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      price : 25,
      reviews : "⭐⭐⭐⭐",
      more: "2 package 🎁🎁",
      extend : [
        {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 20
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 20
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 20
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 20
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 20
          }
      ]
    },
      palte: {
        id : 6 ,
        title : "palte",
        subTitle : 'Food In a plate',
        routeName : 'Plate',
        imageUrl : 'https://images.pexels.com/photos/1860204/pexels-photo-1860204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price : 25,
        reviews : "⭐⭐⭐⭐",
        more: "2 package 🎁🎁",
        extend : [
          {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 20
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 20
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 20
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 20
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 20
          }
        ]
      },
      pizza : {
        id : 7 ,
        subTitle : 'Pizza',
        title : "pizza",
        routeName : 'Pizza',
        imageUrl : 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        price : 25,
        reviews : "⭐⭐⭐⭐",
        more: "2 package 🎁🎁",
        extend : [
          {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 20
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 20
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 20
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 20
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 20
          }
        ]
      },
      whiteandbrowncooked : {
        id : 8 ,
        subTitle : 'White and Brown Cooked Dish',
        routeName : 'WhiteandBrownCooked',
        title : "WhiteandBrownCooked",
        imageUrl : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        price : 25,
        reviews : "⭐⭐⭐⭐",
        more: "2 package 🎁🎁",
        extend : [
          {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 20
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 20
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 20
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 20
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 20
          }
        ]
      },
      fires: {
        id : 9 ,
        subTitle : 'Fries and Burger',
        title : "fries",
        routeName : 'Fries',
        imageUrl : 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price : 25.99,
        reviews : "⭐⭐⭐⭐",
        more: "2 package 🎁🎁",
        extend : [
          {
              id : 1,
              photoUrl : 'https://i.postimg.cc/fyfY0fYG/tacos-1.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Al pastor",
              price: 25,
              type: "freeship",
              time: 20
          },
          {
              id : 2,
              photoUrl : 'https://i.postimg.cc/X7nf6tb4/tacos-2.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title:"Tacos árabes",
              price: 19,
              type: "freeship",
              time: 20
          },
          {
              id : 3,
              photoUrl : 'https://i.postimg.cc/dV1GLd3f/tacos-3.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title : "Barbacoa",
              price: 20,
              type:"freeship",
              time: 20
          },
          {
              id : 4,
              photoUrl : 'https://i.postimg.cc/wTFhqFqJ/taocos-4.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Birria",
              price: 12,
              type: "freeship",
              time: 20
          },
          {
              id : 5,
              photoUrl : 'https://i.postimg.cc/RC77842g/tacos-5.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Buche",
              price: 12.3,
              type: "freeship",
              time: 20
          },
          {
              id : 6,
              photoUrl : 'https://i.postimg.cc/8cZjSKRz/tacos-6.jpg',
              descriptionItem : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
              title: "Cabeza",
              price: 10,
              type:"freeship",
              time: 20
          }
        ]
      }
  }
export default   FOOD_DATA;
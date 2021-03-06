var express = require('express');
var router = express.Router();

var json = {
  "phones": [
      {
          "id": "samsung-galaxy-s9-plus",
          "productImage": "https://cdn.mos.cms.futurecdn.net/gYRnEP4TPEUeiSEkEALjVZ-650-80.jpg",
          "title": "Samsung Galaxy S9 Plus",
          "description": "The Samsung Galaxy S9 Plus is a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing, despite the strong competition on the following pages.",
          "color": "black",
          "price": "609.99€"
      },
      {
          "id": "samsung-galaxy-note-9",
          "productImage": "https://cdn.mos.cms.futurecdn.net/uagTHxGp2eQVBGijEpoTz3-650-80.jpg",
          "title": "Samsung Galaxy Note 9",
          "description": "The Samsung Galaxy Note 9 is one of the best phones we've ever tested - and also one of the most expensive. However, for that money you're getting an extraordinary spec list, including the first mainstream phone to offer 1TB of storage and an incredible screen.",
          "color": "black",
          "price": "796.80€"
      },
      {
          "id": "huawei-p20-pro",
          "productImage": "https://cdn.mos.cms.futurecdn.net/L4Bhtq2bQu43ZsgFQgvo2a-650-80.jpg",
          "title": "Huawei P20 Pro",
          "description": "The Huawei P20 Pro is easily the best phone that the brand has ever produced, and it's troubling the top of our charts. Even if you've never heard of this brand before, the P20 Pro is a phone that deserves its place among the very best brands out there.",
          "color": "black",
          "price": "619€"
      },
      {
          "id": "iphone-xs",
          "productImage": "https://cdn.mos.cms.futurecdn.net/p6c8cxtQdbQxaHdY699vpW-650-80.jpg",
          "title": "iPhone XS",
          "description": "iPhone XS and XS Max are the incremental upgrades to Apple's game-changing iPhone X from 2017. They build on the all-screen, notch-laden, almost bezel-free design with more power under the hood, improved cameras, a new storage option and, in the case of the XS Max, a huge screen and even huger price tag.",
          "color": "black",
          "price": "1252.11€"
      },
      {
          "id": "samsung-galaxy-s9",
          "productImage": "https://cdn.mos.cms.futurecdn.net/CCiwgv4ci8VtWiKKMHcGZb-650-80.jpg",
          "title": "Samsung Galaxy S9",
          "description": "The Samsung Galaxy S9 isn't quite the phone that the S9 Plus is - it's only got a single camera sensor, for one - but it's a more palm-friendly model that still packs the power and top screen quality of its sibling.",
          "color": "black",
          "price": "519€"
      },
      {
          "id": "lg-g7-thinq",
          "productImage": "https://cdn.mos.cms.futurecdn.net/cLeYFVnt3rWYqcsby8JMeW-650-80.jpg",
          "title": "LG G7 ThinQ",
          "description": "The LG G7 ThinQ is an impressive little phone from the brand (irritating name aside), bringing with it a strong package and a decent price in many regions. There's an attempt to right the wrongs of the LG G6 - and it's resulted in a good alternative to the traditional big hitters.",
          "color": "black",
          "price": "449€"
      },
      {
          "id": "huawei-mate-10-pro",
          "productImage": "https://cdn.mos.cms.futurecdn.net/QqnmDkTZ6dDQQcaaAm4eYK-650-80.jpg",
          "title": "Huawei Mate 10 Pro",
          "description": "The Huawei Mate 10 Pro is a phone that might not instantly be on your wish list, but the brand has made huge strides of late (just look at where the P20 Pro sits), and the battery life is something that outranks most on this list. If you're feeling that it's time for a change, this is worth checking out.",
          "color": "black",
          "price": "342€"
      },
      {
          "id": "iphone-x",
          "productImage": "https://cdn.mos.cms.futurecdn.net/tU2W5UFJpeonTcaonExKmV-650-80.jpg",
          "title": "iPhone X",
          "description": "The iPhone X (although it's pronounced 'ten') is the redesigned Apple phone that iFans have been crying out for - and it's vying for a place in our top list thanks to a drastic overhaul. It's got an all new shape, the notch at the top and higher price... but it's the best iPhone that's ever been made too (as long as you don't miss the headphone jack).",
          "color": "black",
          "price": "847.01€"
      },
      {
          "id": "google-pixel-2-xl",
          "productImage": "https://cdn.mos.cms.futurecdn.net/BG6rrscQ7SZvPF4stHnwnc-650-80.jpg",
          "title": "Google Pixel 2 XL",
          "description": "The Pixel 2 XL is all about the camera, with a wider frame and more expansive screen for watching all manner of content. You'll buy it for the pictures you can take, but the power and latest Android upgrades will impress too - Android P is here and bringing some nice to this phone before any other handset.",
          "color": "black",
          "price": "613.85€"
      },
      {
          "id": "samsung-galaxy-note-8",
          "productImage": "https://cdn.mos.cms.futurecdn.net/5X4NGvcQD6JU3VgnoHvARD-650-80.jpg",
          "title": "Samsung Galaxy Note 8",
          "description": "The Samsung Galaxy Note 8 was the first time the brand's phablet range was seen as a real rival for the Galaxy S phones - the larger screen and more power starting to resonate with the average phone buyer. However, it's no longer the best Note in our list thanks to the launch of the Note 9, so you might want to have a look at that one.",
          "color": "black",
          "price": "614€"
      },
      {
          "id": "oneplus-6",
          "productImage": "https://cdn.mos.cms.futurecdn.net/K7DANKzDACpVUDh6c5gUzS-650-80.jpg",
          "title": "OnePlus 6",
          "description": "The OnePlus 6 represents excellent value compared to its competitors, with a strong package put together for far less money than you might expect given the spec and performance of this thing.",
          "color": "black",
          "price": "538.75€"
      },
      {
          "id": "google-pixel-2",
          "productImage": "https://cdn.mos.cms.futurecdn.net/BG6rrscQ7SZvPF4stHnwnc-650-80.jpg",
          "title": "Google Pixel 2",
          "description": "If you want a smaller phone that's great to hold and has a brilliant camera, then you could do a lot worse than look at the thankfully-now-cheaper Google Pixel 2.",
          "color": "black",
          "price": "563€"
      },
      {
          "id": "samsung-galaxy-s8-plus",
          "productImage": "https://cdn.mos.cms.futurecdn.net/kobpEgLqAQ9kJZZSLNmrQF-650-80.jpg",
          "title": "Samsung Galaxy S8 Plus",
          "description": "The Galaxy S8 Plus might be a year old, but it's still impressive and the cost is lowering nicely these days. You can get incredible photos in many conditions, the screen is pin-sharp and it's just boosted a couple of places in this list thanks to a nifty price drop this week.",
          "color": "black",
          "price": "459€"
      },
      {
          "id": "iphone-8-plus",
          "productImage": "https://cdn.mos.cms.futurecdn.net/6EZttFFS2ygN5drXQGCCG4-650-80.jpg",
          "title": "iPhone 8 Plus",
          "description": "So the iPhone X is the phone to buy if you want the best from Apple right now, but if you're more of a traditionalist you'll love the familiar stylings of the 8 Plus. It's got a strong camera and all the power of the X, as well as an easier-to-understand interface if you're a long-time iOS user.",
          "color": "black",
          "price": "692.99€"
      },
      {
          "id": "samsung-galaxy-s8",
          "productImage": "https://cdn.mos.cms.futurecdn.net/csqh2KMsQdNL99duvVfenn-650-80.jpg",
          "title": "Samsung Galaxy S8",
          "description": "The Samsung Galaxy S8 looked space age when it was launched last year, and the Galaxy S9 apes it in many ways. It's not the top phone in Samsung's range any more, but it's jolly close and it seems that retailers are starting to discount it both SIM free and on contract, which is why it's jumped up our list.",
          "color": "black",
          "price": "396€"
      },
      {
          "id": "lg-v30",
          "productImage": "https://cdn.mos.cms.futurecdn.net/ZbPtMZwSf5miTyHv4bkWqf-650-80.jpg",
          "title": "LG V30",
          "description": "The LG V30 is a quietly impressive phone, jam-packed with all manner of tech. It's offering some of the top specs around and does it with a strong battery life, as well as being an audio marvel... perfect if you love listening to tunes on the go. ",
          "color": "black",
          "price": "438€"
      }
  ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET phones. */
router.get('/phones', function(req, res, next) {
  res.json(json.phones);
});

module.exports = router;

angular.module('search', [])
.controller('searchController', function($scope, LogOut, serverRequests) {

  $scope.businesses = dataYelp.businesses;
  
  $scope.logout = function () {
    LogOut();
  };

  $scope.yelpSearch = function (term, location) {
    console.log('got here')
    serverRequests.yelpSearch({
      term: term,
      location: location  
    }).then(function(result) {
        console.log(result);
    });
  };

  $scope.saveFavorite = function (business) {
    var bizCategories = [];
    business.categories.forEach(function(item) {
        bizCategories.push(item[0]);
    });
    var favBiz = {
      bizName: business.name,
      bizRating: business.rating_img_url_small,
      bizLocation: business.location.display_address.join(','),
      bizImage: business.image_url,
      bizCategories: bizCategories.join(',')
    };
    serverRequests.saveFavorite(favBiz);
  };



});



var dataYelp = {
    "region": {
        "span": {
            "latitude_delta": 0.0452361800000034,
            "longitude_delta": 0.039857083142806005
        },
        "center": {
            "latitude": 37.777908100000005,
            "longitude": -122.414888144026
        }
    },
    "total": 5995,
    "businesses": [
        {
            "is_claimed": true,
            "rating": 4.0,
            "mobile_url": "http://m.yelp.com/biz/marlowe-san-francisco-2?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 1959,
            "name": "Marlowe",
            "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/marlowe-san-francisco-2?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "American (New)",
                    "newamerican"
                ],
                [
                    "Brasseries",
                    "brasseries"
                ]
            ],
            "menu_date_updated": 1442067312,
            "phone": "4157771413",
            "snippet_text": "I live right across the street from here and that scares me given how good the food is and how large my appetite can be. \n\nThe service is lovely and no one...",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/uweSiOf0XBB4BPk_ibHVyg/ms.jpg",
            "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/NvaSVHQ-aRtZpERGYlg5zw/ms.jpg",
            "display_phone": "+1-415-777-1413",
            "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "marlowe-san-francisco-2",
            "is_closed": false,
            "location": {
                "cross_streets": "5th St & 4th St",
                "city": "San Francisco",
                "display_address": [
                    "500 Brannan St",
                    "SoMa",
                    "San Francisco, CA 94107"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "SoMa"
                ],
                "postal_code": "94107",
                "country_code": "US",
                "address": [
                    "500 Brannan St"
                ],
                "coordinate": {
                    "latitude": 37.7783200510611,
                    "longitude": -122.396771288052
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/tacorea-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 191,
            "name": "Tacorea",
            "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/tacorea-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "Asian Fusion",
                    "asianfusion"
                ],
                [
                    "Mexican",
                    "mexican"
                ],
                [
                    "Korean",
                    "korean"
                ]
            ],
            "menu_date_updated": 1469774987,
            "phone": "4158851325",
            "snippet_text": "We ate here tonight. South Bay-ers enjoying the city for a sort of stay cation. \n\nI had  the spicy pork rice bowl with a perfect egg. It was the bomb....",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/TNkHvAH9s6ctXYHG-gNViw/ms.jpg",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/O11vC8bhNZwEI4xKk2MA9w/ms.jpg",
            "display_phone": "+1-415-885-1325",
            "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "menu_provider": "single_platform",
            "id": "tacorea-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Taylor St & Mason St",
                "city": "San Francisco",
                "display_address": [
                    "809 Bush St",
                    "Union Square",
                    "San Francisco, CA 94108"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Union Square",
                    "Lower Nob Hill"
                ],
                "postal_code": "94108",
                "country_code": "US",
                "address": [
                    "809 Bush St"
                ],
                "coordinate": {
                    "latitude": 37.7897959388507,
                    "longitude": -122.410720065236
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": false,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/hopwater-distribution-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 470,
            "name": "Hopwater Distribution",
            "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/hopwater-distribution-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "American (Traditional)",
                    "tradamerican"
                ],
                [
                    "Beer Bar",
                    "beerbar"
                ]
            ],
            "snippet_text": "Nice beer selection. Terrific service. Mary and the gentleman working the bar (sorry forgot the name!) were so helpful and friendly. Enjoyable experience...",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/g9IPryNiBa-Ik_xXZcrONA/ms.jpg",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/OyXvRJKT-C9A94zpxGMFYA/ms.jpg",
            "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "id": "hopwater-distribution-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Taylor St & Mason St",
                "city": "San Francisco",
                "display_address": [
                    "850 Bush St",
                    "Nob Hill",
                    "San Francisco, CA 94108"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Nob Hill",
                    "Union Square",
                    "Lower Nob Hill"
                ],
                "postal_code": "94108",
                "country_code": "US",
                "address": [
                    "850 Bush St"
                ],
                "coordinate": {
                    "latitude": 37.7899538528782,
                    "longitude": -122.411338984966
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/la-fusión-san-francisco-2?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 853,
            "name": "La Fusión",
            "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/la-fusión-san-francisco-2?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "Latin American",
                    "latin"
                ]
            ],
            "phone": "4157810894",
            "snippet_text": "Love the ribs here! Unlike ribs from some other restaurants, the meat is not chewy but super tender, soft, and melts in your mouth! It comes with a side of...",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/7LZP0604HmgLFNeGre3rGw/ms.jpg",
            "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/qtsdq0cD0nUYL92JyxwM5Q/ms.jpg",
            "display_phone": "+1-415-781-0894",
            "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "id": "la-fusión-san-francisco-2",
            "is_closed": false,
            "location": {
                "cross_streets": "Kearny St & Belden Pl",
                "city": "San Francisco",
                "display_address": [
                    "475 Pine St",
                    "Financial District",
                    "San Francisco, CA 94104"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Financial District"
                ],
                "postal_code": "94104",
                "country_code": "US",
                "address": [
                    "475 Pine St"
                ],
                "coordinate": {
                    "latitude": 37.7916357455614,
                    "longitude": -122.403691572642
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.0,
            "mobile_url": "http://m.yelp.com/biz/hops-and-hominy-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 1399,
            "name": "Hops & Hominy",
            "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/hops-and-hominy-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "Southern",
                    "southern"
                ],
                [
                    "American (Traditional)",
                    "tradamerican"
                ]
            ],
            "menu_date_updated": 1472182091,
            "phone": "4153736341",
            "snippet_text": "Staff was great; friendly and attentive. Food was delicious! We loved the black eyed pea fritters, Mac 'n Cheese, and chicken wings. Also had their burger,...",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/xJ6mi9tza2IcPTpBHSRvPg/ms.jpg",
            "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/hS91WGMa3RzYyIA8pArydQ/ms.jpg",
            "display_phone": "+1-415-373-6341",
            "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "hops-and-hominy-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Grant Ave",
                "city": "San Francisco",
                "display_address": [
                    "1 Tillman Pl",
                    "Union Square",
                    "San Francisco, CA 94108"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Union Square",
                    "Financial District"
                ],
                "postal_code": "94108",
                "country_code": "US",
                "address": [
                    "1 Tillman Pl"
                ],
                "coordinate": {
                    "latitude": 37.7892737258644,
                    "longitude": -122.405591253967
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/state-bird-provisions-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 1891,
            "name": "State Bird Provisions",
            "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/state-bird-provisions-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "Tapas/Small Plates",
                    "tapasmallplates"
                ],
                [
                    "American (New)",
                    "newamerican"
                ]
            ],
            "menu_date_updated": 1442097786,
            "phone": "4157951272",
            "snippet_text": "EVENT: Our girl's night continues... with our driver. At first we had a reservation for 3 people... then one of my girls joined us. We called State Bird -...",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/hjT_p6bqSl8ZIZs1Hk8Mkg/ms.jpg",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/-Yiaa2daWlAtgd-Kja35Ag/ms.jpg",
            "display_phone": "+1-415-795-1272",
            "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "menu_provider": "single_platform",
            "id": "state-bird-provisions-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Ofarrell St & Geary Blvd",
                "city": "San Francisco",
                "display_address": [
                    "1529 Fillmore St",
                    "Western Addition",
                    "San Francisco, CA 94115"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Western Addition"
                ],
                "postal_code": "94115",
                "country_code": "US",
                "address": [
                    "1529 Fillmore St"
                ],
                "coordinate": {
                    "latitude": 37.78374,
                    "longitude": -122.433005
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": false,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/the-house-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 3846,
            "name": "The House",
            "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/the-house-san-francisco?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "Asian Fusion",
                    "asianfusion"
                ]
            ],
            "phone": "4159868612",
            "snippet_text": "(4.5 stars) The House is freaken awesome, especially for a late lunch when it's not too crowded and the prices are super reasonable. (Under $15 for a...",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/dDYNFB86xKF2g5PXCi1RTw/ms.jpg",
            "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/3oyGNiEb0TD3Gqn6uoVlbQ/ms.jpg",
            "display_phone": "+1-415-986-8612",
            "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "id": "the-house-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Broadway St",
                "city": "San Francisco",
                "display_address": [
                    "1230 Grant Ave",
                    "North Beach/Telegraph Hill",
                    "San Francisco, CA 94133"
                ],
                "geo_accuracy": 8.0,
                "neighborhoods": [
                    "North Beach/Telegraph Hill"
                ],
                "postal_code": "94133",
                "country_code": "US",
                "address": [
                    "1230 Grant Ave"
                ],
                "coordinate": {
                    "latitude": 37.7986203,
                    "longitude": -122.4070251
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.0,
            "mobile_url": "http://m.yelp.com/biz/loló-san-francisco-4?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 1500,
            "name": "Loló",
            "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/loló-san-francisco-4?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "Tapas/Small Plates",
                    "tapasmallplates"
                ],
                [
                    "Tapas Bars",
                    "tapas"
                ]
            ],
            "menu_date_updated": 1442010458,
            "phone": "4156435656",
            "snippet_text": "Wow what a experience!\nFirst thing you notice is the interior design is so trendy cool!\nThe food is very good. My favorite two dishes was the:\n-...",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-_hqewRYasro3NpC-v4Fug/ms.jpg",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/9t0XlS7JTzeRwjNT9HSGZA/ms.jpg",
            "display_phone": "+1-415-643-5656",
            "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "loló-san-francisco-4",
            "is_closed": false,
            "location": {
                "cross_streets": "21st St & Liberty St",
                "city": "San Francisco",
                "display_address": [
                    "974 Valencia St",
                    "Mission",
                    "San Francisco, CA 94110"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Mission"
                ],
                "postal_code": "94110",
                "country_code": "US",
                "address": [
                    "974 Valencia St"
                ],
                "coordinate": {
                    "latitude": 37.7573462,
                    "longitude": -122.4214034
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.0,
            "mobile_url": "http://m.yelp.com/biz/so-san-francisco-4?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 1465,
            "name": "SO",
            "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/so-san-francisco-4?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "Asian Fusion",
                    "asianfusion"
                ],
                [
                    "Chinese",
                    "chinese"
                ]
            ],
            "menu_date_updated": 1471676571,
            "phone": "4155527676",
            "snippet_text": "I've eaten here a number of times, and it's been absolutely delicious every time! The most recent time was on 8/22/2016. Got here with a group of 5 at...",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/D9pxFfw9vDsb03w08VzwYw/ms.jpg",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/T_M4mXXztBIbO3C9f75JdA/ms.jpg",
            "display_phone": "+1-415-552-7676",
            "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "so-san-francisco-4",
            "is_closed": false,
            "location": {
                "cross_streets": "Converse St & 8th St",
                "city": "San Francisco",
                "display_address": [
                    "1010 Bryant St",
                    "SoMa",
                    "San Francisco, CA 94103"
                ],
                "geo_accuracy": 8.0,
                "neighborhoods": [
                    "SoMa"
                ],
                "postal_code": "94103",
                "country_code": "US",
                "address": [
                    "1010 Bryant St"
                ],
                "coordinate": {
                    "latitude": 37.7724113464355,
                    "longitude": -122.407501220703
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/chez-maman-san-francisco-9?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 1667,
            "name": "Chez Maman",
            "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/chez-maman-san-francisco-9?adjust_creative=wjR8YilYjnzUtcMtFdyLpA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=wjR8YilYjnzUtcMtFdyLpA",
            "categories": [
                [
                    "French",
                    "french"
                ],
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "Creperies",
                    "creperies"
                ]
            ],
            "menu_date_updated": 1441955674,
            "phone": "4156559542",
            "snippet_text": "Chez Maman is a quaint and charming French restaurant that makes you feel as if you are dining in a Parisian café. Its small but inviting and homey and...",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/gccHe5ofFMpNyh8vmS0VSw/ms.jpg",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/BsovP7NGBqF6wjazFPpZ-Q/ms.jpg",
            "display_phone": "+1-415-655-9542",
            "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "menu_provider": "single_platform",
            "id": "chez-maman-san-francisco-9",
            "is_closed": false,
            "location": {
                "cross_streets": "Connecticut St & Missouri St",
                "city": "San Francisco",
                "display_address": [
                    "1401 18th St",
                    "Potrero Hill",
                    "San Francisco, CA 94107"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Potrero Hill"
                ],
                "postal_code": "94107",
                "country_code": "US",
                "address": [
                    "1401 18th St"
                ],
                "coordinate": {
                    "latitude": 37.7623455918468,
                    "longitude": -122.397163
                },
                "state_code": "CA"
            }
        }
    ]
}

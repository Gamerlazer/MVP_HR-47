angular.module('search', [])
.controller('searchController', function($scope, LogOut, serverRequests) {

  $scope.businesses = dataYelp.businesses;
  $scope.logout = function () {
    LogOut();
  };
  $scope.saveFavorite = function (business) {
    var bizName = business.name;
    var favBiz = {
      bizName: business.name,
      starRating: business.rating,
      location: business.location.display_address
    };
    console.log(favBiz, 'BUSINESS');
    serverRequests.saveFavorite(favBiz);
  };
});


























var dataYelp = {
    "region": {
        "span": {
            "latitude_delta": 0.012797181998806195,
            "longitude_delta": 0.016024466605387033
        },
        "center": {
            "latitude": 37.78413695196965,
            "longitude": -122.40405513650899
        }
    },
    "total": 5993,
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
            "snippet_text": "Bright, hip, sexy.  It's bustling at lunch time - make a reservation if you want to get in.  Airy and open, the scene is definitely classic bistro.  \n\nThe...",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/uweSiOf0XBB4BPk_ibHVyg/ms.jpg",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/nj6fh-F2Y69GF4ycugBXQA/ms.jpg",
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
            "review_count": 189,
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
            "review_count": 469,
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
        }
    ]
};
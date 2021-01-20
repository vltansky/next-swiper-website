export default [
  {
    "name": "ThumbsMethods",
    "children": [
      {
        "name": "swiper",
        "default": null,
        "type": {
          "type": "reference",
          "id": 1008,
          "name": "Swiper"
        },
        "comment": {
          "shortText": "Swiper instance of thumbs swiper"
        }
      },
      {
        "name": "init",
        "default": null
      },
      {
        "name": "update",
        "default": null
      }
    ]
  },
  {
    "name": "ThumbsOptions",
    "children": [
      {
        "name": "autoScrollOffset",
        "default": "0",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Allows to set on which thumbs active slide from edge it should automatically move scroll thumbs. For example, if set to 1 and last visible thumb will be activated (1 from edge) it will auto scroll thumbs",
          "tags": [
            {
              "tag": "default",
              "text": "0\n"
            }
          ]
        }
      },
      {
        "name": "multipleActiveThumbs",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled multiple thumbnail slides may get activated",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "slideThumbActiveClass",
        "default": "'swiper-slide-thumb-active'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Additional class that will be added to activated thumbs swiper slide",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-slide-thumb-active'\n"
            }
          ]
        }
      },
      {
        "name": "swiper",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 1008,
              "name": "Swiper"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "Swiper instance of swiper used as thumbs or object with Swiper parameters to initialize thumbs swiper",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "thumbsContainerClass",
        "default": "'swiper-container-thumbs'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Additional class that will be added to thumbs swiper-container",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-container-thumbs'\n"
            }
          ]
        }
      }
    ]
  }
]
export default [
  {
    "name": "A11yOptions",
    "children": [
      {
        "name": "containerMessage",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "intrinsic",
              "name": "string"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "Message for screen readers for outer swiper container",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "containerRoleDescriptionMessage",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "intrinsic",
              "name": "string"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "Message for screen readers describing the role of outer swiper container",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "enabled",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enables A11y",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "firstSlideMessage",
        "default": "'This is the first slide'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Message for screen readers for previous button when swiper is on first slide",
          "tags": [
            {
              "tag": "default",
              "text": "'This is the first slide'\n"
            }
          ]
        }
      },
      {
        "name": "itemRoleDescriptionMessage",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "intrinsic",
              "name": "string"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "Message for screen readers describing the role of slide element",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "lastSlideMessage",
        "default": "'This is the last slide'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Message for screen readers for previous button when swiper is on last slide",
          "tags": [
            {
              "tag": "default",
              "text": "'This is the last slide'\n"
            }
          ]
        }
      },
      {
        "name": "nextSlideMessage",
        "default": "'Next slide'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Message for screen readers for next button",
          "tags": [
            {
              "tag": "default",
              "text": "'Next slide'\n"
            }
          ]
        }
      },
      {
        "name": "notificationClass",
        "default": "'swiper-notification'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of a11 notification",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-notification'\n"
            }
          ]
        }
      },
      {
        "name": "paginationBulletMessage",
        "default": "'Go to slide {{index}}'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Message for screen readers for single pagination bullet",
          "tags": [
            {
              "tag": "default",
              "text": "'Go to slide {{index}}'\n"
            }
          ]
        }
      },
      {
        "name": "prevSlideMessage",
        "default": "'Previous slide'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Message for screen readers for previous button",
          "tags": [
            {
              "tag": "default",
              "text": "'Previous slide'\n"
            }
          ]
        }
      }
    ]
  }
]
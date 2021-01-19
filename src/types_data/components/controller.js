export default [
  {
    "name": "ControllerMethods",
    "children": [
      {
        "name": "control",
        "default": null,
        "type": {
          "type": "reference",
          "id": 1008,
          "name": "Swiper"
        },
        "comment": {
          "shortText": "Pass here another Swiper instance or array with Swiper instances that should be controlled\nby this Swiper"
        }
      }
    ]
  },
  {
    "name": "ControllerOptions",
    "children": [
      {
        "name": "by",
        "default": "'slide'",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "stringLiteral",
              "value": "slide"
            },
            {
              "type": "stringLiteral",
              "value": "container"
            }
          ]
        },
        "comment": {
          "shortText": "Can be 'slide' or 'container'. Defines a way how to control another slider: slide by slide\n(with respect to other slider's grid) or depending on all slides/container\n(depending on total slider percentage).",
          "tags": [
            {
              "tag": "default",
              "text": "'slide'\n"
            }
          ]
        }
      },
      {
        "name": "control",
        "default": null,
        "type": {
          "type": "reference",
          "id": 1008,
          "name": "Swiper"
        },
        "comment": {
          "shortText": "Pass here another Swiper instance or array with Swiper instances that should be controlled\nby this Swiper"
        }
      },
      {
        "name": "inverse",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true and controlling will be in inverse direction",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      }
    ]
  }
]
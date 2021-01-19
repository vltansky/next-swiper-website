export default [
  {
    "name": "CoverflowEffectOptions",
    "children": [
      {
        "name": "depth",
        "default": "100",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Depth offset in px (slides translate in Z axis)",
          "tags": [
            {
              "tag": "default",
              "text": "100\n"
            }
          ]
        }
      },
      {
        "name": "modifier",
        "default": "1",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Effect multipler",
          "tags": [
            {
              "tag": "default",
              "text": "1\n"
            }
          ]
        }
      },
      {
        "name": "rotate",
        "default": "50",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Slide rotate in degrees",
          "tags": [
            {
              "tag": "default",
              "text": "50\n"
            }
          ]
        }
      },
      {
        "name": "slideShadows",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enables slides shadows",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "stretch",
        "default": "0",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Stretch space between slides (in px)",
          "tags": [
            {
              "tag": "default",
              "text": "0\n"
            }
          ]
        }
      }
    ]
  }
]
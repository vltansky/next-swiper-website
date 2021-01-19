export default [
  {
    "name": "KeyboardEvents",
    "children": [
      {
        "name": "keyPress",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 80,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 81,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 82,
                    "name": "swiper",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "id": 1008,
                      "name": "Swiper"
                    }
                  },
                  {
                    "id": 83,
                    "name": "keyCode",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "intrinsic",
                      "name": "string"
                    }
                  }
                ],
                "type": {
                  "type": "intrinsic",
                  "name": "void"
                }
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/components/keyboard.d.ts",
                "line": 24,
                "character": 11
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on key press"
        }
      }
    ]
  },
  {
    "name": "KeyboardMethods",
    "children": [
      {
        "name": "enabled",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Whether the keyboard control is enabled"
        }
      },
      {
        "name": "disable",
        "default": null
      },
      {
        "name": "enable",
        "default": null
      }
    ]
  },
  {
    "name": "KeyboardOptions",
    "children": [
      {
        "name": "enabled",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to enable keyboard contro",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "onlyInViewport",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled it will control sliders that are currently in viewport",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "pageUpDown",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled it will enable keyboard navigation by Page Up and Page Down keys",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      }
    ]
  }
]
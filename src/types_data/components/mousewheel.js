export default [
  {
    "name": "MousewheelEvents",
    "children": [
      {
        "name": "scroll",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 276,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 277,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 278,
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
                    "id": 279,
                    "name": "event",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "name": "WheelEvent"
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
                "fileName": "swiper/types/components/mousewheel.d.ts",
                "line": 25,
                "character": 9
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on mousewheel scroll"
        }
      }
    ]
  },
  {
    "name": "MousewheelMethods",
    "children": [
      {
        "name": "enabled",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Whether the mousewheel control is enabled"
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
    "name": "MousewheelOptions",
    "children": [
      {
        "name": "eventsTarget",
        "default": "'container'",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "stringLiteral",
              "value": "container"
            },
            {
              "type": "stringLiteral",
              "value": "wrapper"
            },
            {
              "type": "reference",
              "id": 89,
              "name": "CSSSelector"
            },
            {
              "type": "reference",
              "name": "HTMLElement"
            }
          ]
        },
        "comment": {
          "shortText": "String with CSS selector or HTML element of the container accepting mousewheel events. By default it is swiper-container",
          "tags": [
            {
              "tag": "default",
              "text": "'container'\n"
            }
          ]
        }
      },
      {
        "name": "forceToAxis",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to force mousewheel swipes to axis. So in horizontal mode mousewheel will work only with horizontal mousewheel scrolling, and only with vertical scrolling in vertical mode.",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "invert",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to invert sliding direction",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "releaseOnEdges",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end)",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "sensitivity",
        "default": "1",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Multiplier of mousewheel data, allows to tweak mouse wheel sensitivity",
          "tags": [
            {
              "tag": "default",
              "text": "1\n"
            }
          ]
        }
      },
      {
        "name": "thresholdDelta",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "intrinsic",
              "name": "number"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "Minimum mousewheel scroll delta to trigger swiper slide change",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "thresholdTime",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "intrinsic",
              "name": "number"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "Minimum mousewheel scroll time delta (in ms) to trigger swiper slide change",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      }
    ]
  }
]
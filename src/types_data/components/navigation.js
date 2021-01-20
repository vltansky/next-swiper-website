export default [
  {
    "name": "NavigationEvents",
    "children": [
      {
        "name": "navigationHide",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 300,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 301,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 302,
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
                "fileName": "swiper/types/components/navigation.d.ts",
                "line": 35,
                "character": 17
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on navigation hide"
        }
      },
      {
        "name": "navigationShow",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 304,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 305,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 306,
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
                "fileName": "swiper/types/components/navigation.d.ts",
                "line": 39,
                "character": 17
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on navigation show"
        }
      }
    ]
  },
  {
    "name": "NavigationMethods",
    "children": [
      {
        "name": "nextEl",
        "default": null,
        "type": {
          "type": "reference",
          "name": "HTMLElement"
        },
        "comment": {
          "shortText": "HTMLElement of \"next\" navigation button"
        }
      },
      {
        "name": "prevEl",
        "default": null,
        "type": {
          "type": "reference",
          "name": "HTMLElement"
        },
        "comment": {
          "shortText": "HTMLElement of \"previous\" navigation button"
        }
      },
      {
        "name": "destroy",
        "default": null
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
    "name": "NavigationOptions",
    "children": [
      {
        "name": "disabledClass",
        "default": "'swiper-button-disabled'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name added to navigation button when it becomes disabled",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-button-disabled'\n"
            }
          ]
        }
      },
      {
        "name": "hiddenClass",
        "default": "'swiper-button-hidden'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name added to navigation button when it becomes hidden",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-button-hidden'\n"
            }
          ]
        }
      },
      {
        "name": "hideOnClick",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Toggle navigation buttons visibility after click on Slider's container",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "lockClass",
        "default": "'swiper-button-lock'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name added to navigation button when it is disabled",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-button-lock'\n"
            }
          ]
        }
      },
      {
        "name": "nextEl",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 89,
              "name": "CSSSelector"
            },
            {
              "type": "reference",
              "name": "HTMLElement"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "String with CSS selector or HTML element of the element that will work\nlike \"next\" button after click on it",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "prevEl",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 89,
              "name": "CSSSelector"
            },
            {
              "type": "reference",
              "name": "HTMLElement"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "String with CSS selector or HTML element of the element that will work\nlike \"prev\" button after click on it",
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
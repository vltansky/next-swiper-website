export default [
  {
    "name": "ScrollbarEvents",
    "children": [
      {
        "name": "scrollbarDragEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 416,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 417,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 418,
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
                    "id": 419,
                    "name": "event",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "union",
                      "types": [
                        {
                          "type": "reference",
                          "name": "MouseEvent"
                        },
                        {
                          "type": "reference",
                          "name": "TouchEvent"
                        },
                        {
                          "type": "reference",
                          "name": "PointerEvent"
                        }
                      ]
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
                "fileName": "swiper/types/components/scrollbar.d.ts",
                "line": 50,
                "character": 19
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on draggable scrollbar drag end"
        }
      },
      {
        "name": "scrollbarDragMove",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 411,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 412,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 413,
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
                    "id": 414,
                    "name": "event",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "union",
                      "types": [
                        {
                          "type": "reference",
                          "name": "MouseEvent"
                        },
                        {
                          "type": "reference",
                          "name": "TouchEvent"
                        },
                        {
                          "type": "reference",
                          "name": "PointerEvent"
                        }
                      ]
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
                "fileName": "swiper/types/components/scrollbar.d.ts",
                "line": 45,
                "character": 20
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on draggable scrollbar drag move"
        }
      },
      {
        "name": "scrollbarDragStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 406,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 407,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 408,
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
                    "id": 409,
                    "name": "event",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "union",
                      "types": [
                        {
                          "type": "reference",
                          "name": "MouseEvent"
                        },
                        {
                          "type": "reference",
                          "name": "TouchEvent"
                        },
                        {
                          "type": "reference",
                          "name": "PointerEvent"
                        }
                      ]
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
                "fileName": "swiper/types/components/scrollbar.d.ts",
                "line": 40,
                "character": 21
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on draggable scrollbar drag start"
        }
      }
    ]
  },
  {
    "name": "ScrollbarMethods",
    "children": [
      {
        "name": "dragEl",
        "default": null,
        "type": {
          "type": "reference",
          "name": "HTMLElement"
        },
        "comment": {
          "shortText": "HTMLElement of Scrollbar draggable handler element"
        }
      },
      {
        "name": "el",
        "default": null,
        "type": {
          "type": "reference",
          "name": "HTMLElement"
        },
        "comment": {
          "shortText": "HTMLElement of Scrollbar container element"
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
        "name": "setTranslate",
        "default": null
      },
      {
        "name": "updateSize",
        "default": null
      }
    ]
  },
  {
    "name": "ScrollbarOptions",
    "children": [
      {
        "name": "dragClass",
        "default": "'swiper-scrollbar-drag'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "    Scrollbar draggable element CSS class",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-scrollbar-drag'\n"
            }
          ]
        }
      },
      {
        "name": "dragSize",
        "default": "'auto'",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "stringLiteral",
              "value": "auto"
            },
            {
              "type": "intrinsic",
              "name": "number"
            }
          ]
        },
        "comment": {
          "shortText": "Size of scrollbar draggable element in px",
          "tags": [
            {
              "tag": "default",
              "text": "'auto'\n"
            }
          ]
        }
      },
      {
        "name": "draggable",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to enable make scrollbar draggable that allows you to control slider position",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "el",
        "default": null,
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
            }
          ]
        },
        "comment": {
          "shortText": "String with CSS selector or HTML element of the container with scrollbar."
        }
      },
      {
        "name": "hide",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Hide scrollbar automatically after user interaction",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "lockClass",
        "default": "'swiper-scrollbar-lock'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Scrollbar element additional CSS class when it is disabled",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-scrollbar-lock'\n"
            }
          ]
        }
      },
      {
        "name": "snapOnRelease",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to snap slider position to slides when you release scrollbar",
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
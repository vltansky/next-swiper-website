export default [
  {
    "name": "VirtualData",
    "children": [
      {
        "name": "from",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "index of first slide required to be rendered"
        }
      },
      {
        "name": "offset",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "slides left/top offset in px"
        }
      },
      {
        "name": "slides",
        "default": null,
        "type": {
          "type": "array",
          "elementType": {
            "type": "intrinsic",
            "name": "any"
          }
        },
        "comment": {
          "shortText": "array with slide items to be rendered"
        }
      },
      {
        "name": "to",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "index of last slide required to be rendered"
        }
      }
    ]
  },
  {
    "name": "VirtualMethods",
    "children": [
      {
        "name": "cache",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "object"
        },
        "comment": {
          "shortText": "Object with cached slides HTML elements"
        }
      },
      {
        "name": "from",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Index of first rendered slide"
        }
      },
      {
        "name": "slides",
        "default": null,
        "type": {
          "type": "array",
          "elementType": {
            "type": "intrinsic",
            "name": "any"
          }
        },
        "comment": {
          "shortText": "Array with slide items passed by virtual.slides parameter"
        }
      },
      {
        "name": "to",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Index of last rendered slide"
        }
      },
      {
        "name": "appendSlide",
        "default": null
      },
      {
        "name": "prependSlide",
        "default": null
      },
      {
        "name": "removeAllSlides",
        "default": null
      },
      {
        "name": "removeSlide",
        "default": null
      },
      {
        "name": "update",
        "default": null
      }
    ]
  },
  {
    "name": "VirtualOptions",
    "children": [
      {
        "name": "addSlidesAfter",
        "default": "0",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Increases amount of pre-rendered slides after active slide",
          "tags": [
            {
              "tag": "default",
              "text": "0\n"
            }
          ]
        }
      },
      {
        "name": "addSlidesBefore",
        "default": "0",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Increases amount of pre-rendered slides before active slide",
          "tags": [
            {
              "tag": "default",
              "text": "0\n"
            }
          ]
        }
      },
      {
        "name": "cache",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enables DOM cache of rendering slides html elements. Once they are rendered they will be saved to cache and reused from it.",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "renderExternal",
        "default": "null",
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 480,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 481,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 482,
                    "name": "data",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "id": 464,
                      "name": "VirtualData"
                    }
                  }
                ],
                "type": {
                  "type": "union",
                  "types": [
                    {
                      "type": "intrinsic",
                      "name": "any"
                    },
                    {
                      "type": "intrinsic",
                      "name": "null"
                    }
                  ]
                }
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/components/virtual.d.ts",
                "line": 109,
                "character": 18
              }
            ]
          }
        },
        "comment": {
          "shortText": "Function for external rendering (e.g. using some other library to handle DOM manipulations and state like React.js or Vue.js). As an argument it accepts data object with the following properties:",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "renderExternalUpdate",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled (by default) it will update Swiper layout right after renderExternal called. Useful to disable and update swiper manually when used with render libraries that renders asynchronously",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "renderSlide",
        "default": "null",
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 475,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 476,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 477,
                    "name": "slide",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "intrinsic",
                      "name": "any"
                    }
                  },
                  {
                    "id": 478,
                    "name": "index",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "intrinsic",
                      "name": "any"
                    }
                  }
                ],
                "type": {
                  "type": "union",
                  "types": [
                    {
                      "type": "intrinsic",
                      "name": "any"
                    },
                    {
                      "type": "intrinsic",
                      "name": "null"
                    }
                  ]
                }
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/components/virtual.d.ts",
                "line": 103,
                "character": 15
              }
            ]
          }
        },
        "comment": {
          "shortText": "Function to render slide. As an argument it accepts current slide item for slides array and index number of the current slide. Function must return an outter HTML of the swiper slide.",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "slides",
        "default": "[]",
        "type": {
          "type": "array",
          "elementType": {
            "type": "intrinsic",
            "name": "any"
          }
        },
        "comment": {
          "shortText": "Array with slides",
          "tags": [
            {
              "tag": "default",
              "text": "[]\n"
            }
          ]
        }
      }
    ]
  }
]
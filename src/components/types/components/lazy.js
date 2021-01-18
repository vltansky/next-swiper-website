export default [
  {
    "name": "LazyEvents",
    "children": [
      {
        "name": "lazyImageLoad",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 246,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 247,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 248,
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
                    "id": 249,
                    "name": "slideEl",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "name": "HTMLElement"
                    }
                  },
                  {
                    "id": 250,
                    "name": "imageEl",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "name": "HTMLElement"
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
                "fileName": "swiper/types/components/lazy.d.ts",
                "line": 22,
                "character": 16
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired in the beginning of lazy loading of image"
        }
      },
      {
        "name": "lazyImageReady",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 252,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 253,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 254,
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
                    "id": 255,
                    "name": "slideEl",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "name": "HTMLElement"
                    }
                  },
                  {
                    "id": 256,
                    "name": "imageEl",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "name": "HTMLElement"
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
                "fileName": "swiper/types/components/lazy.d.ts",
                "line": 26,
                "character": 17
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when lazy loading image will be loaded"
        }
      }
    ]
  },
  {
    "name": "LazyMethods",
    "children": [
      {
        "name": "load",
        "default": null
      },
      {
        "name": "loadInSlide",
        "default": null
      }
    ]
  },
  {
    "name": "LazyOptions",
    "children": [
      {
        "name": "checkInView",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enables to check is the Swiper in view before lazy loading images on initial slides"
        }
      },
      {
        "name": "elementClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of lazy element"
        }
      },
      {
        "name": "loadOnTransitionStart",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "By default, Swiper will load lazy images after transition to this slide, so you may enable this parameter if you need it to start loading of new image in the beginning of transition"
        }
      },
      {
        "name": "loadPrevNext",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to \"true\" to enable lazy loading for the closest slides images (for previous and next slide images)"
        }
      },
      {
        "name": "loadPrevNextAmount",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Amount of next/prev slides to preload lazy images in. Can't be less than slidesPerView"
        }
      },
      {
        "name": "loadedClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of lazy loaded element"
        }
      },
      {
        "name": "loadingClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of lazy loading element"
        }
      },
      {
        "name": "preloaderClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of lazy preloader"
        }
      },
      {
        "name": "scrollingElement",
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
              "type": "intrinsic",
              "name": "null"
            },
            {
              "type": "reference",
              "name": "Dom7Array"
            },
            {
              "type": "reference",
              "name": "HTMLElement"
            }
          ]
        },
        "comment": {
          "shortText": "Element to check scrolling on for \"checkInView\". Defaults to window"
        }
      }
    ]
  }
]
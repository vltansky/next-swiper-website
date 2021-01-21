export default [
  {
    "name": "ZoomEvents",
    "children": [
      {
        "name": "zoomChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 500,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 501,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 502,
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
                    "id": 503,
                    "name": "value",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "intrinsic",
                      "name": "number"
                    }
                  },
                  {
                    "id": 504,
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
                  },
                  {
                    "id": 505,
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
                "fileName": "swiper/types/components/zoom.d.ts",
                "line": 44,
                "character": 13
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on zoom change"
        }
      }
    ]
  },
  {
    "name": "ZoomMethods",
    "children": [
      {
        "name": "enabled",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Whether the zoom module is enabled"
        }
      },
      {
        "name": "scale",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Current image scale ratio"
        }
      },
      {
        "name": "disable",
        "default": null
      },
      {
        "name": "enable",
        "default": null
      },
      {
        "name": "in",
        "default": null
      },
      {
        "name": "out",
        "default": null
      },
      {
        "name": "toggle",
        "default": null
      }
    ]
  },
  {
    "name": "ZoomOptions",
    "children": [
      {
        "name": "containerClass",
        "default": "'swiper-zoom-container'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of zoom container",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-zoom-container'\n"
            }
          ]
        }
      },
      {
        "name": "maxRatio",
        "default": "3",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Maximum image zoom multiplier",
          "tags": [
            {
              "tag": "default",
              "text": "3\n"
            }
          ]
        }
      },
      {
        "name": "minRatio",
        "default": "1",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Minimal image zoom multiplier",
          "tags": [
            {
              "tag": "default",
              "text": "1\n"
            }
          ]
        }
      },
      {
        "name": "toggle",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enable/disable zoom-in by slide's double tap",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "zoomedSlideClass",
        "default": "'swiper-slide-zoomed'\n",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of zoomed in container",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-slide-zoomed'\n\n"
            }
          ]
        }
      }
    ]
  }
]
export default [
  {
    "name": "AutoplayEvents",
    "children": [
      {
        "name": "autoplay",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 1212,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 1213,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 1214,
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
                "fileName": "swiper/types/components/autoplay.d.ts",
                "line": 32,
                "character": 11
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when slide changed with autoplay"
        }
      },
      {
        "name": "autoplayStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 1204,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 1205,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 1206,
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
                "fileName": "swiper/types/components/autoplay.d.ts",
                "line": 24,
                "character": 16
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired in when autoplay started"
        }
      },
      {
        "name": "autoplayStop",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 1208,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 1209,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 1210,
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
                "fileName": "swiper/types/components/autoplay.d.ts",
                "line": 28,
                "character": 15
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when autoplay stopped"
        }
      }
    ]
  },
  {
    "name": "AutoplayMethods",
    "children": [
      {
        "name": "running",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Whether autoplay enabled and running"
        }
      },
      {
        "name": "start",
        "default": null
      },
      {
        "name": "stop",
        "default": null
      }
    ]
  },
  {
    "name": "AutoplayOptions",
    "children": [
      {
        "name": "delay",
        "default": "<!-- hold this slide for 2 seconds -->\n<div class=\"swiper-slide\" data-swiper-autoplay=\"2000\">\n",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled",
          "text": "If you need to specify different delay for specifi slides you can do it by using\ndata-swiper-autoplay (in ms) attribute on slide.\n",
          "tags": [
            {
              "tag": "example",
              "text": "\n<!-- hold this slide for 2 seconds -->\n<div class=\"swiper-slide\" data-swiper-autoplay=\"2000\">\n"
            },
            {
              "tag": "default",
              "text": "3000\n"
            }
          ]
        }
      },
      {
        "name": "disableOnInteraction",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to false and autoplay will not be disabled after\nuser interactions (swipes), it will be restarted\nevery time after interaction",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "reverseDirection",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enables autoplay in reverse direction",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "stopOnLastSlide",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "waitForTransition",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled autoplay will wait for wrapper transition to continue.\nCan be disabled in case of using Virtual Translate when your\nslider may not have transition",
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
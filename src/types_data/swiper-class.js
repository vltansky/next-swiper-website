export default [
  {
    "name": "Swiper",
    "children": [
      {
        "name": "constructor",
        "default": null,
        "comment": {
          "shortText": "Constructs a new Swiper instance."
        }
      },
      {
        "name": "$el",
        "default": null,
        "type": {
          "type": "reference",
          "name": "Dom7Array"
        },
        "comment": {
          "shortText": "Dom7 element with slider container HTML element. To get vanilla HTMLElement use mySwiper.el"
        }
      },
      {
        "name": "$wrapperEl",
        "default": null,
        "type": {
          "type": "reference",
          "name": "Dom7Array"
        },
        "comment": {
          "shortText": "Dom7 element with slider wrapper HTML element. To get vanilla HTMLElement use mySwiper.wrapperEl"
        }
      },
      {
        "name": "a11y",
        "default": null,
        "type": {
          "type": "reference",
          "id": 2,
          "name": "A11yMethods"
        }
      },
      {
        "name": "activeIndex",
        "default": "Note, that in loop mode active index value will be always shifted on a number of looped/duplicated slides",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Index number of currently active slide",
          "tags": [
            {
              "tag": "note",
              "text": "Note, that in loop mode active index value will be always shifted on a number of looped/duplicated slides\n"
            }
          ]
        }
      },
      {
        "name": "allowSlideNext",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Disable / enable ability to slide to the next slides by assigning false/true to this property"
        }
      },
      {
        "name": "allowSlidePrev",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Disable / enable ability to slide to the previous slides by assigning false/true to this property"
        }
      },
      {
        "name": "allowTouchMove",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning false/true to this property"
        }
      },
      {
        "name": "animating",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "true if swiper is in transition"
        }
      },
      {
        "name": "autoplay",
        "default": null,
        "type": {
          "type": "reference",
          "id": 1196,
          "name": "AutoplayMethods"
        }
      },
      {
        "name": "clickedIndex",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Index number of last clicked slide"
        }
      },
      {
        "name": "clickedSlide",
        "default": null,
        "type": {
          "type": "reference",
          "name": "HTMLElement"
        },
        "comment": {
          "shortText": "Link to last clicked slide (HTMLElement)"
        }
      },
      {
        "name": "controller",
        "default": null,
        "type": {
          "type": "reference",
          "id": 16,
          "name": "ControllerMethods"
        }
      },
      {
        "name": "coverflowEffect",
        "default": null,
        "type": {
          "type": "reference",
          "id": 24,
          "name": "CoverflowEffectMethods"
        }
      },
      {
        "name": "cubeEffect",
        "default": null,
        "type": {
          "type": "reference",
          "id": 33,
          "name": "CubeEffectMethods"
        }
      },
      {
        "name": "currentBreakpoint",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "any"
        }
      },
      {
        "name": "destroyed",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        }
      },
      {
        "name": "fadeEffect",
        "default": null,
        "type": {
          "type": "reference",
          "id": 41,
          "name": "FadeEffectMethods"
        }
      },
      {
        "name": "flipEffect",
        "default": null,
        "type": {
          "type": "reference",
          "id": 46,
          "name": "FlipEffectMethods"
        }
      },
      {
        "name": "hashNavigation",
        "default": null,
        "type": {
          "type": "reference",
          "id": 52,
          "name": "HashNavigationMethods"
        }
      },
      {
        "name": "height",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Height of container"
        }
      },
      {
        "name": "history",
        "default": null,
        "type": {
          "type": "reference",
          "id": 66,
          "name": "HistoryMethods"
        }
      },
      {
        "name": "isBeginning",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "true if slider on most \"left\"/\"top\" position"
        }
      },
      {
        "name": "isEnd",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "true if slider on most \"right\"/\"bottom\" position"
        }
      },
      {
        "name": "keyboard",
        "default": null,
        "type": {
          "type": "reference",
          "id": 72,
          "name": "KeyboardMethods"
        }
      },
      {
        "name": "lazy",
        "default": null,
        "type": {
          "type": "reference",
          "id": 238,
          "name": "LazyMethods"
        }
      },
      {
        "name": "modules",
        "default": null,
        "type": {
          "type": "reference",
          "typeArguments": [
            {
              "type": "intrinsic",
              "name": "any"
            }
          ],
          "name": "Array"
        }
      },
      {
        "name": "mousewheel",
        "default": null,
        "type": {
          "type": "reference",
          "id": 268,
          "name": "MousewheelMethods"
        }
      },
      {
        "name": "navigation",
        "default": null,
        "type": {
          "type": "reference",
          "id": 289,
          "name": "NavigationMethods"
        }
      },
      {
        "name": "pagination",
        "default": null,
        "type": {
          "type": "reference",
          "id": 315,
          "name": "PaginationMethods"
        }
      },
      {
        "name": "parallax",
        "default": null,
        "type": {
          "type": "reference",
          "id": 513,
          "name": "ParallaxMethods"
        }
      },
      {
        "name": "params",
        "default": null,
        "type": {
          "type": "reference",
          "id": 852,
          "name": "SwiperOptions"
        },
        "comment": {
          "shortText": "Object with passed initialization parameters"
        }
      },
      {
        "name": "previousIndex",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Index number of previously active slide"
        }
      },
      {
        "name": "progress",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Current progress of wrapper translate (from 0 to 1)"
        }
      },
      {
        "name": "realIndex",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Index number of currently active slide considering duplicated slides in loop mode"
        }
      },
      {
        "name": "rtlTranslate",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        }
      },
      {
        "name": "scrollbar",
        "default": null,
        "type": {
          "type": "reference",
          "id": 393,
          "name": "ScrollbarMethods"
        }
      },
      {
        "name": "slides",
        "default": null,
        "type": {
          "type": "reference",
          "name": "Dom7Array"
        },
        "comment": {
          "shortText": "Dom7 array-like collection of slides HTML elements. To get specific slide HTMLElement use mySwiper.slides[1]"
        }
      },
      {
        "name": "thumbs",
        "default": null,
        "type": {
          "type": "reference",
          "id": 429,
          "name": "ThumbsMethods"
        }
      },
      {
        "name": "touches",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 1024,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "children": [
              {
                "id": 1027,
                "name": "currentX",
                "kind": 32,
                "kindString": "Variable",
                "flags": {
                  "isExported": true
                },
                "sources": [
                  {
                    "fileName": "swiper/types/swiper-class.d.ts",
                    "line": 118,
                    "character": 12
                  }
                ],
                "type": {
                  "type": "intrinsic",
                  "name": "number"
                }
              },
              {
                "id": 1028,
                "name": "currentY",
                "kind": 32,
                "kindString": "Variable",
                "flags": {
                  "isExported": true
                },
                "sources": [
                  {
                    "fileName": "swiper/types/swiper-class.d.ts",
                    "line": 119,
                    "character": 12
                  }
                ],
                "type": {
                  "type": "intrinsic",
                  "name": "number"
                }
              },
              {
                "id": 1029,
                "name": "diff",
                "kind": 32,
                "kindString": "Variable",
                "flags": {
                  "isExported": true
                },
                "sources": [
                  {
                    "fileName": "swiper/types/swiper-class.d.ts",
                    "line": 120,
                    "character": 8
                  }
                ],
                "type": {
                  "type": "intrinsic",
                  "name": "number"
                }
              },
              {
                "id": 1025,
                "name": "startX",
                "kind": 32,
                "kindString": "Variable",
                "flags": {
                  "isExported": true
                },
                "sources": [
                  {
                    "fileName": "swiper/types/swiper-class.d.ts",
                    "line": 116,
                    "character": 10
                  }
                ],
                "type": {
                  "type": "intrinsic",
                  "name": "number"
                }
              },
              {
                "id": 1026,
                "name": "startY",
                "kind": 32,
                "kindString": "Variable",
                "flags": {
                  "isExported": true
                },
                "sources": [
                  {
                    "fileName": "swiper/types/swiper-class.d.ts",
                    "line": 117,
                    "character": 10
                  }
                ],
                "type": {
                  "type": "intrinsic",
                  "name": "number"
                }
              }
            ],
            "groups": [
              {
                "title": "Variables",
                "kind": 32,
                "children": [
                  1027,
                  1028,
                  1029,
                  1025,
                  1026
                ]
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/swiper-class.d.ts",
                "line": 115,
                "character": 10
              }
            ]
          }
        },
        "comment": {
          "shortText": "Object with the following touch event properties:"
        }
      },
      {
        "name": "translate",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Current value of wrapper translate"
        }
      },
      {
        "name": "virtual",
        "default": null,
        "type": {
          "type": "reference",
          "id": 444,
          "name": "VirtualMethods"
        }
      },
      {
        "name": "width",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Width of container"
        }
      },
      {
        "name": "zoom",
        "default": null,
        "type": {
          "type": "reference",
          "id": 485,
          "name": "ZoomMethods"
        }
      },
      {
        "name": "defaults",
        "default": null,
        "type": {
          "type": "reference",
          "id": 852,
          "name": "SwiperOptions"
        },
        "comment": {
          "shortText": "Swiper default options"
        }
      },
      {
        "name": "extendedDefaults",
        "default": null,
        "type": {
          "type": "reference",
          "id": 852,
          "name": "SwiperOptions"
        },
        "comment": {
          "shortText": "Object with global Swiper exntended options"
        }
      },
      {
        "name": "addSlide",
        "default": null
      },
      {
        "name": "appendSlide",
        "default": null
      },
      {
        "name": "attachEvents",
        "default": null
      },
      {
        "name": "changeDirection",
        "default": null
      },
      {
        "name": "destroy",
        "default": null
      },
      {
        "name": "detachEvents",
        "default": null
      },
      {
        "name": "emit",
        "default": null
      },
      {
        "name": "getBreakpoint",
        "default": null
      },
      {
        "name": "getTranslate",
        "default": null
      },
      {
        "name": "isHorizontal",
        "default": null
      },
      {
        "name": "off",
        "default": null
      },
      {
        "name": "offAny",
        "default": null
      },
      {
        "name": "on",
        "default": null
      },
      {
        "name": "onAny",
        "default": null
      },
      {
        "name": "once",
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
        "name": "setBreakpoint",
        "default": null
      },
      {
        "name": "setGrabCursor",
        "default": null
      },
      {
        "name": "setTranslate",
        "default": null
      },
      {
        "name": "slideNext",
        "default": null
      },
      {
        "name": "slidePrev",
        "default": null
      },
      {
        "name": "slideReset",
        "default": null
      },
      {
        "name": "slideTo",
        "default": null
      },
      {
        "name": "slideToClosest",
        "default": null
      },
      {
        "name": "slideToLoop",
        "default": null
      },
      {
        "name": "translateTo",
        "default": null
      },
      {
        "name": "unsetGrabCursor",
        "default": null
      },
      {
        "name": "update",
        "default": null
      },
      {
        "name": "updateAutoHeight",
        "default": null
      },
      {
        "name": "updateProgress",
        "default": null
      },
      {
        "name": "updateSize",
        "default": null
      },
      {
        "name": "updateSlides",
        "default": null
      },
      {
        "name": "updateSlidesClasses",
        "default": null
      },
      {
        "name": "extendDefaults",
        "default": null
      },
      {
        "name": "use",
        "default": null
      }
    ]
  },
  {
    "name": "SwiperClass",
    "children": [
      {
        "name": "emit",
        "default": null
      },
      {
        "name": "off",
        "default": null
      },
      {
        "name": "on",
        "default": null
      },
      {
        "name": "once",
        "default": null
      }
    ]
  }
]
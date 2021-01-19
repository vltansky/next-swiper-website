export default [
  {
    "name": "SwiperOptions",
    "children": [
      {
        "name": "_emitClasses",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "!INTERNAL When enabled will emit \"_containerClasses\" and \"_slideClasses\" events"
        }
      },
      {
        "name": "a11y",
        "default": null,
        "type": {
          "type": "reference",
          "id": 4,
          "name": "A11yOptions"
        }
      },
      {
        "name": "allowSlideNext",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to false to disable swiping to next slide direction (to right or bottom)",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "allowSlidePrev",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to false to disable swiping to previous slide direction (to left or top)",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
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
          "shortText": "If false, then the only way to switch the slide is use of external API functions like slidePrev or slideNext"
        }
      },
      {
        "name": "autoHeight",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true and slider wrapper will adapt its height to the height of the currently active slide",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "autoplay",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 1215,
              "name": "AutoplayOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "breakpoints",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 933,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "indexSignature": [
              {
                "id": 936,
                "name": "__index",
                "kind": 8192,
                "kindString": "Index signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 937,
                    "name": "ratio",
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
                  "type": "reference",
                  "id": 852,
                  "name": "SwiperOptions"
                }
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/swiper-options.d.ts",
                "line": 539,
                "character": 15
              }
            ]
          }
        }
      },
      {
        "name": "centerInsufficientSlides",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled it center slides if the amount of slides less than `slidesPerView`. Not intended to be used loop mode and slidesPerColumn"
        }
      },
      {
        "name": "centeredSlides",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If true, then active slide will be centered, not always on the left side."
        }
      },
      {
        "name": "centeredSlidesBounds",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If true, then active slide will be centered without adding gaps at the beginning and end of slider.\nRequired centeredSlides: true. Not intended to be used with loop or pagination",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "containerModifierClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "controller",
        "default": null,
        "type": {
          "type": "reference",
          "id": 19,
          "name": "ControllerOptions"
        }
      },
      {
        "name": "coverflowEffect",
        "default": null,
        "type": {
          "type": "reference",
          "id": 26,
          "name": "CoverflowEffectOptions"
        }
      },
      {
        "name": "cssMode",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled it will use modern CSS Scroll Snap API.\nIt doesn't support all of Swiper's features, but potentially should bring a much better performance in simple configurations.",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "cubeEffect",
        "default": null,
        "type": {
          "type": "reference",
          "id": 35,
          "name": "CubeEffectOptions"
        }
      },
      {
        "name": "direction",
        "default": "'horizontal'",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "stringLiteral",
              "value": "horizontal"
            },
            {
              "type": "stringLiteral",
              "value": "vertical"
            }
          ]
        },
        "comment": {
          "shortText": "Could be 'horizontal' or 'vertical' (for vertical slider).",
          "tags": [
            {
              "tag": "default",
              "text": "'horizontal'\n"
            }
          ]
        }
      },
      {
        "name": "effect",
        "default": "'slide'",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "stringLiteral",
              "value": "slide"
            },
            {
              "type": "stringLiteral",
              "value": "fade"
            },
            {
              "type": "stringLiteral",
              "value": "cube"
            },
            {
              "type": "stringLiteral",
              "value": "coverflow"
            },
            {
              "type": "stringLiteral",
              "value": "flip"
            }
          ]
        },
        "comment": {
          "shortText": "Transition effect. Could be \"slide\", \"fade\", \"cube\", \"coverflow\" or \"flip\"",
          "tags": [
            {
              "tag": "default",
              "text": "'slide'\n"
            }
          ]
        }
      },
      {
        "name": "fadeEffect",
        "default": null,
        "type": {
          "type": "reference",
          "id": 43,
          "name": "FadeEffectOptions"
        }
      },
      {
        "name": "flipEffect",
        "default": null,
        "type": {
          "type": "reference",
          "id": 48,
          "name": "FlipEffectOptions"
        }
      },
      {
        "name": "followFinger",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it"
        }
      },
      {
        "name": "freeMode",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If enabled then slides will not have fixed positions",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "freeModeMinimumVelocity",
        "default": "0.02",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Minimum touchmove-velocity required to trigger free mode momentum",
          "tags": [
            {
              "tag": "default",
              "text": "0.02\n"
            }
          ]
        }
      },
      {
        "name": "freeModeMomentum",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If enabled, then slide will keep moving for a while after you release it",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "freeModeMomentumBounce",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to false if you want to disable momentum bounce in free mode",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "freeModeMomentumBounceRatio",
        "default": "1",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Higher value produces larger momentum bounce effect",
          "tags": [
            {
              "tag": "default",
              "text": "1\n"
            }
          ]
        }
      },
      {
        "name": "freeModeMomentumRatio",
        "default": "1",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Higher value produces larger momentum distance after you release slider",
          "tags": [
            {
              "tag": "default",
              "text": "1\n"
            }
          ]
        }
      },
      {
        "name": "freeModeMomentumVelocityRatio",
        "default": "1",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Higher value produces larger momentum velocity after you release slider",
          "tags": [
            {
              "tag": "default",
              "text": "1\n"
            }
          ]
        }
      },
      {
        "name": "freeModeSticky",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to enabled to enable snap to slides positions in free mode",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "grabCursor",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        }
      },
      {
        "name": "hashNavigation",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 62,
              "name": "HashNavigationOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "height",
        "default": "Setting this parameter will make Swiper not responsive",
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
          "shortText": "Swiper height (in px). Parameter allows to force Swiper height.\nUseful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization",
          "tags": [
            {
              "tag": "note",
              "text": "Setting this parameter will make Swiper not responsive"
            },
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "history",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 68,
              "name": "HistoryOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "iOSEdgeSwipeDetection",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enable to release Swiper events for swipe-to-go-back work in iOS UIWebView"
        }
      },
      {
        "name": "iOSEdgeSwipeThreshold",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Area (in px) from left edge of the screen to release touch events for swipe-to-go-back in iOS UIWebView"
        }
      },
      {
        "name": "init",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Whether Swiper should be initialised automatically when you create an instance.\nIf disabled, then you need to init it manually by calling mySwiper.init()",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "initialSlide",
        "default": "0",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Index number of initial slide.",
          "tags": [
            {
              "tag": "default",
              "text": "0\n"
            }
          ]
        }
      },
      {
        "name": "keyboard",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 84,
              "name": "KeyboardOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "lazy",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 257,
              "name": "LazyOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "longSwipes",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to false if you want to disable long swipes"
        }
      },
      {
        "name": "longSwipesMs",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes"
        }
      },
      {
        "name": "longSwipesRatio",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Ratio to trigger swipe to next/previous slide during long swipes"
        }
      },
      {
        "name": "loop",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enables continuous loop mode",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "loopAdditionalSlides",
        "default": "0",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Addition number of slides that will be cloned after creating of loop",
          "tags": [
            {
              "tag": "default",
              "text": "0\n"
            }
          ]
        }
      },
      {
        "name": "loopFillGroupWithBlank",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enable and loop mode will fill groups with insufficient number of slides with blank slides. Good to be used with slidesPerGroup parameter",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "loopPreventsSlide",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled it prevents Swiper slide prev/next transitions when transitions is already in progress (has effect when `loop` enabled)",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "loopedSlides",
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
          "shortText": "If you use slidesPerView:'auto' with loop mode you should tell to Swiper how many slides it should loop (duplicate) using this parameter",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "mousewheel",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 280,
              "name": "MousewheelOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "navigation",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 307,
              "name": "NavigationOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "nested",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true on  Swiper for correct touch events interception. Use only on\nswipers that use same direction as the parent one",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "noSwiping",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enable/disable swiping on elements matched to class specified in noSwipingClass",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "noSwipingClass",
        "default": "'swiper-no-swiping'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Specify noSwiping's' element css class",
          "tags": [
            {
              "tag": "default",
              "text": "'swiper-no-swiping'\n"
            }
          ]
        }
      },
      {
        "name": "noSwipingSelector",
        "default": "",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Can be used instead of noSwipingClass to specify elements to disable swiping on.\nFor example 'input' will disable swiping on all inputs",
          "tags": [
            {
              "tag": "default",
              "text": "\n"
            }
          ]
        }
      },
      {
        "name": "normalizeSlideIndex",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Normalize slide index."
        }
      },
      {
        "name": "observeParents",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true if you also need to watch Mutations for Swiper parent elements",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "observeSlideChildren",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true if you also need to watch Mutations for Swiper slide children elements",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "observer",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to enable Mutation Observer on Swiper and its elements. In this case Swiper will be updated (reinitialized) each time if you change its style (like hide/show) or modify its child elements (like adding/removing slides)",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "on",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 870,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "sources": [
              {
                "fileName": "swiper/types/swiper-options.d.ts",
                "line": 148,
                "character": 6
              }
            ]
          }
        },
        "comment": {
          "shortText": "Register event handlers."
        }
      },
      {
        "name": "pagination",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 345,
              "name": "PaginationOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "parallax",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        }
      },
      {
        "name": "passiveListeners",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices.\nBut if you need to use `e.preventDefault` and you have conflict with it, then you should disable this parameter"
        }
      },
      {
        "name": "preloadImages",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled Swiper will force to load all images",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "preventClicks",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to prevent accidental unwanted clicks on links during swiping",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "preventClicksPropagation",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to stop clicks event propagation on links during swiping",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "preventInteractionOnTransition",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled it won't allow to change slides by swiping or navigation/pagination buttons during transition",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "resistance",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to false if you want to disable resistant bounds"
        }
      },
      {
        "name": "resistanceRatio",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "This option allows you to control resistance ratio"
        }
      },
      {
        "name": "roundLengths",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to round values of slides width and height to prevent blurry texts on usual\nresolution screens (if you have such)",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "runCallbacksOnInit",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Fire [Transition/SlideChange][Start/End] events on swiper initialization.\nSuch events will be fired on initialization in case of your initialSlide is not 0, or you use loop mode",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "scrollbar",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 420,
              "name": "ScrollbarOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "setWrapperSize",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides.\nMostly should be used as compatibility fallback option for browser that don't support flexbox layout well"
        }
      },
      {
        "name": "shortSwipes",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to false if you want to disable short swipes"
        }
      },
      {
        "name": "simulateTouch",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If true, Swiper will accept mouse events like touch events (click and drag to change slides)"
        }
      },
      {
        "name": "slideActiveClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slideBlankClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slideClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slideDuplicateActiveClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slideDuplicateClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slideDuplicateNextClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slideDuplicatePrevClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slideNextClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slidePrevClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slideToClickedSlide",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true and click on any slide will produce transition to this slide",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "slideVisibleClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "slidesOffsetAfter",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Add (in px) additional slide offset in the end of the container (after all slides)"
        }
      },
      {
        "name": "slidesOffsetBefore",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Add (in px) additional slide offset in the beginning of the container (before all slides)"
        }
      },
      {
        "name": "slidesPerColumn",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Number of slides per column, for multirow layout\nslidesPerColumn > 1 is currently not compatible with loop mode (loop: true)"
        }
      },
      {
        "name": "slidesPerColumnFill",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "stringLiteral",
              "value": "row"
            },
            {
              "type": "stringLiteral",
              "value": "column"
            }
          ]
        },
        "comment": {
          "shortText": "Could be 'column' or 'row'. Defines how slides should fill rows, by column or by row"
        }
      },
      {
        "name": "slidesPerGroup",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1"
        }
      },
      {
        "name": "slidesPerGroupSkip",
        "default": "0",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "The parameter works in the following way: If slidesPerGroupSkip equals 0 (default), no slides are excluded from grouping, and the resulting behaviour is the same as without this change.\nIf slidesPerGroupSkip is equal or greater than 1 the first X slides are treated as single groups, whereas all following slides are grouped by the slidesPerGroup value.",
          "tags": [
            {
              "tag": "default",
              "text": "0\n"
            }
          ]
        }
      },
      {
        "name": "slidesPerView",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "intrinsic",
              "name": "number"
            },
            {
              "type": "stringLiteral",
              "value": "auto"
            }
          ]
        },
        "comment": {
          "shortText": "Number of slides per view (slides visible at the same time on slider's container).\nIf you use it with \"auto\" value and along with loop: true then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)\nslidesPerView: 'auto' is currently not compatible with multirow mode, when slidesPerColumn > 1"
        }
      },
      {
        "name": "spaceBetween",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Distance between slides in px."
        }
      },
      {
        "name": "speed",
        "default": "300",
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Duration of transition between slides (in ms)",
          "tags": [
            {
              "tag": "default",
              "text": "300\n"
            }
          ]
        }
      },
      {
        "name": "swipeHandler",
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
          "shortText": "String with CSS selector or HTML element of the container with pagination that will work as only available handler for swiping",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "threshold",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Threshold value in px. If \"touch distance\" will be lower than this value then swiper will not move"
        }
      },
      {
        "name": "thumbs",
        "default": null,
        "type": {
          "type": "reference",
          "id": 437,
          "name": "ThumbsOptions"
        }
      },
      {
        "name": "touchAngle",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Allowable angle (in degrees) to trigger touch move"
        }
      },
      {
        "name": "touchEventsTarget",
        "default": null,
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
            }
          ]
        },
        "comment": {
          "shortText": "Target element to listen touch events on. Can be 'container' (to listen for touch events on swiper-container) or 'wrapper'\n(to listen for touch events on swiper-wrapper)"
        }
      },
      {
        "name": "touchMoveStopPropagation",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If enabled, then propagation of \"touchmove\" will be stopped"
        }
      },
      {
        "name": "touchRatio",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "Touch ratio"
        }
      },
      {
        "name": "touchReleaseOnEdges",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling"
        }
      },
      {
        "name": "touchStartForcePreventDefault",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Force to always prevent default for `touchstart` (`mousedown`) event"
        }
      },
      {
        "name": "touchStartPreventDefault",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If disabled, `touchstart` (`mousedown`) event won't be prevented"
        }
      },
      {
        "name": "uniqueNavElements",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If enabled (by default) and navigation elements' parameters passed as a string (like \".pagination\")\nthen Swiper will look for such elements through child elements first.\nApplies for pagination, prev/next buttons and scrollbar elements",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "updateOnImagesReady",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled Swiper will be reinitialized after all inner images (<img> tags) are loaded. Required preloadImages: true",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "updateOnWindowResize",
        "default": "true",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Swiper will recalculate slides position on window resize (orientationchange)",
          "tags": [
            {
              "tag": "default",
              "text": "true\n"
            }
          ]
        }
      },
      {
        "name": "url",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "intrinsic",
              "name": "string"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "Required for active slide detection when rendered on server-side and enabled history",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "userAgent",
        "default": "null",
        "type": {
          "type": "union",
          "types": [
            {
              "type": "intrinsic",
              "name": "string"
            },
            {
              "type": "intrinsic",
              "name": "null"
            }
          ]
        },
        "comment": {
          "shortText": "userAgent string. Required for browser/device detection when rendered on server-side",
          "tags": [
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "virtual",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 469,
              "name": "VirtualOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "virtualTranslate",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set.\nUseful when you may need to create custom slide transition"
        }
      },
      {
        "name": "watchOverflow",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "When enabled Swiper will be disabled and hide navigation buttons on\ncase there are not enough slides for sliding.",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "watchSlidesProgress",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Enable this feature to calculate each slides progress",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "watchSlidesVisibility",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "watchSlidesProgress should be enabled. Enable this option and slides that are in viewport will have additional visible class",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "width",
        "default": "Setting this parameter will make Swiper not responsive",
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
          "shortText": "Swiper width (in px). Parameter allows to force Swiper width.\nUseful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization",
          "tags": [
            {
              "tag": "note",
              "text": "Setting this parameter will make Swiper not responsive"
            },
            {
              "tag": "default",
              "text": "null\n"
            }
          ]
        }
      },
      {
        "name": "wrapperClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      },
      {
        "name": "zoom",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "reference",
              "id": 506,
              "name": "ZoomOptions"
            },
            {
              "type": "intrinsic",
              "name": "boolean"
            }
          ]
        }
      },
      {
        "name": "onAny",
        "default": null
      }
    ]
  }
]
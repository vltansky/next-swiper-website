export default [
  {
    "name": "PaginationEvents",
    "children": [
      {
        "name": "paginationHide",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 338,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 339,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 340,
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
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 53,
                "character": 17
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on pagination hide"
        }
      },
      {
        "name": "paginationRender",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 328,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 329,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 330,
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
                    "id": 331,
                    "name": "paginationEl",
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
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 43,
                "character": 19
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired after pagination rendered"
        }
      },
      {
        "name": "paginationShow",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 342,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 343,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 344,
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
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 58,
                "character": 17
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on pagination show"
        }
      },
      {
        "name": "paginationUpdate",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 333,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 334,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 335,
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
                    "id": 336,
                    "name": "paginationEl",
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
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 48,
                "character": 19
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when pagination updated"
        }
      }
    ]
  },
  {
    "name": "PaginationMethods",
    "children": [
      {
        "name": "bullets",
        "default": null,
        "type": {
          "type": "array",
          "elementType": {
            "type": "reference",
            "name": "Dom7Array"
          }
        },
        "comment": {
          "shortText": "Dom7 array-like collection of pagination bullets\nHTML elements. To get specific slide HTMLElement\nuse `mySwiper.pagination.bullets[1]`."
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
          "shortText": "HTMLElement of pagination container element"
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
        "name": "render",
        "default": null
      },
      {
        "name": "update",
        "default": null
      }
    ]
  },
  {
    "name": "PaginationOptions",
    "children": [
      {
        "name": "bulletActiveClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of currently active pagination bullet"
        }
      },
      {
        "name": "bulletClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of single pagination bullet"
        }
      },
      {
        "name": "bulletElement",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Defines which HTML tag will be used to represent single pagination bullet. Only for bullets pagination type."
        }
      },
      {
        "name": "clickable",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type"
        }
      },
      {
        "name": "clickableClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name set to pagination when it is clickable"
        }
      },
      {
        "name": "currentClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of the element with currently active index in \"fraction\" pagination"
        }
      },
      {
        "name": "dynamicBullets",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time."
        }
      },
      {
        "name": "dynamicMainBullets",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "number"
        },
        "comment": {
          "shortText": "The number of main bullets visible when dynamicBullets enabled."
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
          "shortText": "String with CSS selector or HTML element of the container with pagination"
        }
      },
      {
        "name": "formatFractionCurrent",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 355,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 356,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 357,
                    "name": "number",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "intrinsic",
                      "name": "number"
                    }
                  }
                ],
                "type": {
                  "type": "intrinsic",
                  "name": "number"
                }
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 107,
                "character": 25
              }
            ]
          }
        },
        "comment": {
          "shortText": "format fraction pagination current number. Function receives current number,\nand you need to return formatted value"
        }
      },
      {
        "name": "formatFractionTotal",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 359,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 360,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 361,
                    "name": "number",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "intrinsic",
                      "name": "number"
                    }
                  }
                ],
                "type": {
                  "type": "intrinsic",
                  "name": "number"
                }
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 113,
                "character": 23
              }
            ]
          }
        },
        "comment": {
          "shortText": "format fraction pagination total number. Function receives total number, and you\nneed to return formatted value"
        }
      },
      {
        "name": "hiddenClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of pagination when it becomes inactive"
        }
      },
      {
        "name": "hideOnClick",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Toggle (hide/true) pagination container visibility after click on Slider's container"
        }
      },
      {
        "name": "lockClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name set to pagination when it is disabled"
        }
      },
      {
        "name": "modifierClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "The beginning of the modifier CSS class name that will be added to pagination depending on parameters"
        }
      },
      {
        "name": "progressbarFillClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of pagination progressbar fill element"
        }
      },
      {
        "name": "progressbarOpposite",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Makes pagination progressbar opposite to Swiper's `direction` parameter, means vertical progressbar for horizontal swiper\ndirection and horizontal progressbar for vertical swiper direction"
        }
      },
      {
        "name": "progressbarOppositeClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of pagination progressbar opposite"
        }
      },
      {
        "name": "renderBullet",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 363,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 364,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 365,
                    "name": "index",
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
                    "id": 366,
                    "name": "className",
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
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 119,
                "character": 16
              }
            ]
          }
        },
        "comment": {
          "shortText": "This parameter allows totally customize pagination bullets, you need to pass here a function that accepts index number of\npagination bullet and required element class name (className). Only for bullets pagination type"
        }
      },
      {
        "name": "renderCustom",
        "default": "var swiper = new Swiper('.swiper-container', {\n  //...\n  renderCustom: function (swiper, current, total) {\n    return current + ' of ' + total;\n  }\n});\n",
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 377,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 378,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 379,
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
                    "id": 380,
                    "name": "current",
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
                    "id": 381,
                    "name": "total",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "intrinsic",
                      "name": "number"
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
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 143,
                "character": 16
              }
            ]
          }
        },
        "comment": {
          "shortText": "This parameter is required for custom pagination type where you have to specify\nhow it should be rendered.",
          "tags": [
            {
              "tag": "example",
              "text": "\nvar swiper = new Swiper('.swiper-container', {\n  //...\n  renderCustom: function (swiper, current, total) {\n    return current + ' of ' + total;\n  }\n});\n"
            }
          ]
        }
      },
      {
        "name": "renderFraction",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 368,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 369,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 370,
                    "name": "currentClass",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "intrinsic",
                      "name": "string"
                    }
                  },
                  {
                    "id": 371,
                    "name": "totalClass",
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
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 124,
                "character": 18
              }
            ]
          }
        },
        "comment": {
          "shortText": "This parameter allows to customize \"fraction\" pagination html. Only for fraction pagination type"
        }
      },
      {
        "name": "renderProgressbar",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 373,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 374,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 375,
                    "name": "progressbarFillClass",
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
                "fileName": "swiper/types/components/pagination.d.ts",
                "line": 129,
                "character": 21
              }
            ]
          }
        },
        "comment": {
          "shortText": "This parameter allows to customize \"progress\" pagination. Only for progress pagination type"
        }
      },
      {
        "name": "totalClass",
        "default": null,
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "CSS class name of the element with total number of \"snaps\" in \"fraction\" pagination"
        }
      },
      {
        "name": "type",
        "default": null,
        "type": {
          "type": "union",
          "types": [
            {
              "type": "stringLiteral",
              "value": "bullets"
            },
            {
              "type": "stringLiteral",
              "value": "fraction"
            },
            {
              "type": "stringLiteral",
              "value": "progressbar"
            },
            {
              "type": "stringLiteral",
              "value": "custom"
            }
          ]
        },
        "comment": {
          "shortText": "String with type of pagination. Can be \"bullets\", \"fraction\", \"progressbar\" or \"custom\""
        }
      }
    ]
  }
]
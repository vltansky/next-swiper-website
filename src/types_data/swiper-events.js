export default [
  {
    "name": "SwiperEvents",
    "children": [
      {
        "name": "_beforeBreakpoint",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 658,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 659,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 660,
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
                    "id": 661,
                    "name": "breakpointParams",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "id": 852,
                      "name": "SwiperOptions"
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 213,
                "character": 21
              }
            ]
          }
        },
        "comment": {
          "shortText": "!INTERNAL: Event will fired right before breakpoint change"
        }
      },
      {
        "name": "_containerClasses",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 663,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 664,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 665,
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
                    "id": 666,
                    "name": "classNames",
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 217,
                "character": 21
              }
            ]
          }
        },
        "comment": {
          "shortText": "!INTERNAL: Event will fired after setting CSS classes on swiper container element"
        }
      },
      {
        "name": "_slideClass",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 668,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 669,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 670,
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
                    "id": 671,
                    "name": "el",
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
                    "id": 672,
                    "name": "classNames",
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 221,
                "character": 15
              }
            ]
          }
        },
        "comment": {
          "shortText": "INTERNAL: Event will fired after setting CSS classes on swiper slide element"
        }
      },
      {
        "name": "_swiper",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 674,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 675,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 676,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 225,
                "character": 11
              }
            ]
          }
        },
        "comment": {
          "shortText": "INTERNAL: Event will fired as soon as swiper instance available (before init)"
        }
      },
      {
        "name": "activeIndexChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 678,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 679,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 680,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 229,
                "character": 20
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired on active index change"
        }
      },
      {
        "name": "afterInit",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 690,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 691,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 692,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 241,
                "character": 12
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired right after initialization"
        }
      },
      {
        "name": "autoplay",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 770,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 771,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 772,
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
            "id": 762,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 763,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 764,
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
            "id": 766,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 767,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 768,
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
      },
      {
        "name": "beforeDestroy",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 522,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 523,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 524,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 58,
                "character": 16
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired right before Swiper destroyed"
        }
      },
      {
        "name": "beforeInit",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 694,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 695,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 696,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 245,
                "character": 13
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired right before initialization"
        }
      },
      {
        "name": "beforeLoopFix",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 645,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 646,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 647,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 198,
                "character": 16
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired right before \"loop fix\""
        }
      },
      {
        "name": "beforeResize",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 698,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 699,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 700,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 249,
                "character": 15
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired before resize handler"
        }
      },
      {
        "name": "beforeSlideChangeStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 702,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 703,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 704,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 253,
                "character": 25
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired before slide change transition start"
        }
      },
      {
        "name": "beforeTransitionStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 706,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 707,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 708,
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
                    "id": 709,
                    "name": "speed",
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
                    "id": 710,
                    "name": "internal",
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
                  "type": "intrinsic",
                  "name": "void"
                }
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 257,
                "character": 24
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired before transition start"
        }
      },
      {
        "name": "breakpoint",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 653,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 654,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 655,
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
                    "id": 656,
                    "name": "breakpointParams",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "id": 852,
                      "name": "SwiperOptions"
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 208,
                "character": 13
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on breakpoint change"
        }
      },
      {
        "name": "changeDirection",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 712,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 713,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 714,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 261,
                "character": 18
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired on direction change"
        }
      },
      {
        "name": "click",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 587,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 588,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 589,
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
                    "id": 590,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 133,
                "character": 8
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user click/tap on Swiper. Receives 'touchend' event as an arguments."
        }
      },
      {
        "name": "destroy",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 721,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 722,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 723,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 269,
                "character": 10
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on swiper destroy"
        }
      },
      {
        "name": "doubleClick",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 716,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 717,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 718,
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
                    "id": 719,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 265,
                "character": 14
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user double click/tap on Swiper"
        }
      },
      {
        "name": "doubleTap",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 597,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 598,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 599,
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
                    "id": 600,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 143,
                "character": 12
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user double tap on Swiper's container. Receives 'touchend' event as an arguments"
        }
      },
      {
        "name": "fromEdge",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 623,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 624,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 625,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 173,
                "character": 11
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when Swiper goes from beginning or end position"
        }
      },
      {
        "name": "hashChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 774,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 775,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 776,
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
                "fileName": "swiper/types/components/hash-navigation.d.ts",
                "line": 9,
                "character": 13
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on window hash change"
        }
      },
      {
        "name": "hashSet",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 778,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 779,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 780,
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
                "fileName": "swiper/types/components/hash-navigation.d.ts",
                "line": 13,
                "character": 10
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when swiper updates the hash"
        }
      },
      {
        "name": "imagesReady",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 602,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 603,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 604,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 148,
                "character": 14
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired right after all inner images are loaded. updateOnImagesReady should be also enabled"
        }
      },
      {
        "name": "init",
        "default": "Note that with swiper.on('init') syntax it willwork only in case you set init: false parameter.\n",
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 518,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 519,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 520,
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
                  "name": "any"
                }
              }
            ],
            "sources": [
              {
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 53,
                "character": 7
              }
            ]
          }
        },
        "comment": {
          "shortText": "Fired right after Swiper initialization.",
          "tags": [
            {
              "tag": "note",
              "text": "Note that with swiper.on('init') syntax it will\nwork only in case you set init: false parameter.\n"
            },
            {
              "tag": "example",
              "text": "\nvar swiper = new Swiper('.swiper-container', {\n  init: false,\n  // other parameters\n});\nswiper.on('init', function() {\n // do something\n});\n// init Swiper\nswiper.init();\n"
            },
            {
              "tag": "example",
              "text": "\n// Otherwise use it as the parameter:\nvar swiper = new Swiper('.swiper-container', {\n  // other parameters\n  on: {\n    init: function () {\n      // do something\n    },\n  }\n});\n"
            }
          ]
        }
      },
      {
        "name": "keyPress",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 782,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 783,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 784,
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
                    "id": 785,
                    "name": "keyCode",
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
                "fileName": "swiper/types/components/keyboard.d.ts",
                "line": 24,
                "character": 11
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on key press"
        }
      },
      {
        "name": "lazyImageLoad",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 787,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 788,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 789,
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
                    "id": 790,
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
                    "id": 791,
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
            "id": 793,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 794,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 795,
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
                    "id": 796,
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
                    "id": 797,
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
      },
      {
        "name": "loopFix",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 649,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 650,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 651,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 203,
                "character": 10
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired after \"loop fix\""
        }
      },
      {
        "name": "momentumBounce",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 725,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 726,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 727,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 273,
                "character": 17
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on momentum bounce"
        }
      },
      {
        "name": "navigationHide",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 804,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 805,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 806,
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
            "id": 808,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 809,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 810,
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
      },
      {
        "name": "observerUpdate",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 641,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 642,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 643,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 193,
                "character": 17
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired if observer is enabled and it detects DOM mutations"
        }
      },
      {
        "name": "orientationchange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 729,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 730,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 731,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 277,
                "character": 20
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on orientation change (e.g. landscape -> portrait)"
        }
      },
      {
        "name": "paginationHide",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 822,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 823,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 824,
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
            "id": 812,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 813,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 814,
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
                    "id": 815,
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
            "id": 826,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 827,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 828,
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
            "id": 817,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 818,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 819,
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
                    "id": 820,
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
      },
      {
        "name": "progress",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 606,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 607,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 608,
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
                    "id": 609,
                    "name": "progress",
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 153,
                "character": 11
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1"
        }
      },
      {
        "name": "reachBeginning",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 611,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 612,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 613,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 158,
                "character": 17
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when Swiper reach its beginning (initial position)"
        }
      },
      {
        "name": "reachEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 615,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 616,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 617,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 163,
                "character": 11
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when Swiper reach last slide"
        }
      },
      {
        "name": "realIndexChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 686,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 687,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 688,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 237,
                "character": 18
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired on real index change"
        }
      },
      {
        "name": "resize",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 637,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 638,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 639,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 188,
                "character": 9
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired on window resize right before swiper's onresize manipulation"
        }
      },
      {
        "name": "scroll",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 799,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 800,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 801,
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
                    "id": 802,
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
      },
      {
        "name": "scrollbarDragEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 840,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 841,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 842,
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
                    "id": 843,
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
            "id": 835,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 836,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 837,
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
                    "id": 838,
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
            "id": 830,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 831,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 832,
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
                    "id": 833,
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
      },
      {
        "name": "setTransition",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 632,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 633,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 634,
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
                    "id": 635,
                    "name": "transition",
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 183,
                "character": 16
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired everytime when swiper starts animation. Receives current transition duration (in ms) as an arguments"
        }
      },
      {
        "name": "setTranslate",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 627,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 628,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 629,
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
                    "id": 630,
                    "name": "translate",
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 178,
                "character": 15
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when swiper's wrapper change its position. Receives current translate value as an arguments"
        }
      },
      {
        "name": "slideChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 526,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 527,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 528,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 63,
                "character": 14
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when currently active slide is changed"
        }
      },
      {
        "name": "slideChangeTransitionEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 534,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 535,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 536,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 73,
                "character": 27
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired after animation to other slide (next or previous)."
        }
      },
      {
        "name": "slideChangeTransitionStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 530,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 531,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 532,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 68,
                "character": 29
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired in the beginning of animation to other slide (next or previous)."
        }
      },
      {
        "name": "slideNextTransitionEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 542,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 543,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 544,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 83,
                "character": 25
              }
            ]
          }
        },
        "comment": {
          "shortText": "Same as \"slideChangeTransitionEnd\" but for \"forward\" direction only"
        }
      },
      {
        "name": "slideNextTransitionStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 538,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 539,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 540,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 78,
                "character": 27
              }
            ]
          }
        },
        "comment": {
          "shortText": "Same as \"slideChangeTransitionStart\" but for \"forward\" direction only"
        }
      },
      {
        "name": "slidePrevTransitionEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 550,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 551,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 552,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 93,
                "character": 25
              }
            ]
          }
        },
        "comment": {
          "shortText": "Same as \"slideChangeTransitionEnd\" but for \"backward\" direction only"
        }
      },
      {
        "name": "slidePrevTransitionStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 546,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 547,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 548,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 88,
                "character": 27
              }
            ]
          }
        },
        "comment": {
          "shortText": "Same as \"slideChangeTransitionStart\" but for \"backward\" direction only"
        }
      },
      {
        "name": "slideResetTransitionEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 737,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 738,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 739,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 285,
                "character": 26
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired in the end of animation of resetting slide to current one"
        }
      },
      {
        "name": "slideResetTransitionStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 733,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 734,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 735,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 281,
                "character": 28
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired in the beginning of animation of resetting slide to current one"
        }
      },
      {
        "name": "sliderFirstMove",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 741,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 742,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 743,
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
                    "id": 744,
                    "name": "event",
                    "kind": 32768,
                    "kindString": "Parameter",
                    "flags": {
                      "isExported": true
                    },
                    "type": {
                      "type": "reference",
                      "name": "TouchEvent"
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 289,
                "character": 18
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired with first touch/drag move"
        }
      },
      {
        "name": "sliderMove",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 577,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 578,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 579,
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
                    "id": 580,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 123,
                "character": 13
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user touch and move finger over Swiper and move it. Receives 'touchmove' event as an arguments."
        }
      },
      {
        "name": "slidesGridLengthChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 750,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 751,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 752,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 297,
                "character": 25
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when slides grid has changed"
        }
      },
      {
        "name": "slidesLengthChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 746,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 747,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 748,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 293,
                "character": 21
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when number of slides has changed"
        }
      },
      {
        "name": "snapGridLengthChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 754,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 755,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 756,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 301,
                "character": 23
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when snap grid has changed"
        }
      },
      {
        "name": "snapIndexChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 682,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 683,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 684,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 233,
                "character": 18
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will fired on snap index change"
        }
      },
      {
        "name": "tap",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 592,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 593,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 594,
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
                    "id": 595,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 138,
                "character": 6
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user click/tap on Swiper. Receives 'touchend' event as an arguments."
        }
      },
      {
        "name": "toEdge",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 619,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 620,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 621,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 168,
                "character": 9
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when Swiper goes to beginning or end position"
        }
      },
      {
        "name": "touchEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 582,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 583,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 584,
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
                    "id": 585,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 128,
                "character": 11
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user release Swiper. Receives 'touchend' event as an arguments."
        }
      },
      {
        "name": "touchMove",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 567,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 568,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 569,
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
                    "id": 570,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 113,
                "character": 12
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user touch and move finger over Swiper. Receives 'touchmove' event as an arguments."
        }
      },
      {
        "name": "touchMoveOpposite",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 572,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 573,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 574,
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
                    "id": 575,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 118,
                "character": 20
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user touch and move finger over Swiper in direction opposite to direction parameter. Receives 'touchmove' event as an arguments."
        }
      },
      {
        "name": "touchStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 562,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 563,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 564,
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
                    "id": 565,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 108,
                "character": 13
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired when user touch Swiper. Receives 'touchstart' event as an arguments."
        }
      },
      {
        "name": "transitionEnd",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 558,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 559,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 560,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 103,
                "character": 16
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired after transition."
        }
      },
      {
        "name": "transitionStart",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 554,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 555,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 556,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 98,
                "character": 18
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired in the beginning of transition."
        }
      },
      {
        "name": "update",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 758,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 759,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 760,
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
                "fileName": "swiper/types/swiper-events.d.ts",
                "line": 305,
                "character": 9
              }
            ]
          }
        },
        "comment": {
          "shortText": "Event will be fired after swiper.update() call"
        }
      },
      {
        "name": "zoomChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 845,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 846,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 847,
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
                    "id": 848,
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
                    "id": 849,
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
                    "id": 850,
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
  }
]
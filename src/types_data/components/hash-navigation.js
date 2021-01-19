export default [
  {
    "name": "HashNavigationEvents",
    "children": [
      {
        "name": "hashChange",
        "default": null,
        "type": {
          "type": "reflection",
          "declaration": {
            "id": 55,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 56,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 57,
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
            "id": 59,
            "name": "__type",
            "kind": 65536,
            "kindString": "Type literal",
            "flags": {
              "isExported": true
            },
            "signatures": [
              {
                "id": 60,
                "name": "__call",
                "kind": 4096,
                "kindString": "Call signature",
                "flags": {
                  "isExported": true
                },
                "parameters": [
                  {
                    "id": 61,
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
      }
    ]
  },
  {
    "name": "HashNavigationOptions",
    "children": [
      {
        "name": "replaceState",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Works in addition to hashnav to replace current url state with the\nnew one instead of adding it to history",
          "tags": [
            {
              "tag": "default",
              "text": "false\n"
            }
          ]
        }
      },
      {
        "name": "watchState",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Set to true to enable also navigation through slides (when hashnav\nis enabled) by browser history or by setting directly hash on document location",
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
export default [
  {
    "name": "HistoryOptions",
    "children": [
      {
        "name": "key",
        "default": "'slides'",
        "type": {
          "type": "intrinsic",
          "name": "string"
        },
        "comment": {
          "shortText": "Url key for slides",
          "tags": [
            {
              "tag": "default",
              "text": "'slides'\n"
            }
          ]
        }
      },
      {
        "name": "replaceState",
        "default": "false",
        "type": {
          "type": "intrinsic",
          "name": "boolean"
        },
        "comment": {
          "shortText": "Works in addition to hashnav or history to replace current url state with the\nnew one instead of adding it to history",
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
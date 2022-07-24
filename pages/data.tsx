import { Tree } from "./types"

export const mockGroupsTreeList: Tree = [
    {
      label: "Group A",
      id: "1",
      branches: [
        {
          label: "Group B",
          id: "2",
          branches: [
            {
              label: "Item 1",
              id: "3",
              branches: [],
            },
            {
              label: "Item 2",
              id: "4",
              branches: []
            },
            {
              label: "Item 3",
              id: "5",
              branches: []
            }
          ]
        },
        {
          label: "Group C",
          id: "6",
          branches: []
        }
      ]
    },
    {
      label: "Group D",
      id: "7",
      branches: [
        {
          label: "Group E",
          id: "8",
          branches: [
            {
              label: "Group F",
              id: "9",
              branches: [
                {
                  label: "Item 1",
                  id: "10",
                  branches: []
                },
                {
                  label: "Item 2",
                  id: "11",
                  branches: []
                }
              ]
            },
            {
              label: "Group G",
              id: "12",
              branches: [
                {
                  label: "Item 1",
                  id: "13",
                  branches: []
                },
              ]
            }
          ]
        },
        {
          label: "Group H",
          id: "14",
          branches: [
            {
              label: "Item 20",
              id: "15",
              branches: []
            },
            {
              label: "ITem 21",
              id: "16",
              branches: []
            },
            {
              label: "Item 22",
              id: "17",
              branches: []
            },
            {
              label: "Item 23",
              id: "18",
              branches: []
            },
          ]
        }
      ]
    }
  ]
  
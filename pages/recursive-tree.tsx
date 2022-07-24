import React, { Fragment, useState } from "react"

import { Tree, TreeBranch } from "./types"

interface TreeItemProps {
    readonly id: string
    readonly onSelectCallback: (e: React.MouseEvent<HTMLInputElement>) => void
    readonly label: string
    readonly isSelected: boolean | undefined
    readonly children: ReadonlyArray<JSX.Element>
}

export interface RecursiveTreeProps {
    readonly listMeta: Tree
    readonly onSelectCallback: (value: TreeBranch) => void
}

const TreeItem = ({
    onSelectCallback,
    label,
    isSelected,
    children,
}: TreeItemProps) => {
    const [isOpen, toggleItemOpen] = useState<boolean | null>(null)
    const [selected, setSelected] = useState(isSelected)

    return (
      <div>
        <div>
          {children.length > 0 && (
            <div
              className="icon-container"
              onClick={() => toggleItemOpen(!isOpen)}
            >
            {isOpen ? "-" : "+"}
            </div>
          )}
          <div
            className="label"
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>{
              setSelected(!selected)
              onSelectCallback(e)
            }}
            style={{
              marginLeft: `${children.length === 0 ? "24px" : ""}`,
              background: `${selected ? "#d5d5d5" : ""}`
            }}
          >
            {label}
          </div>
        </div>
        <div>{isOpen && children}</div>
      </div>
    )
}

const RecursiveTree = ({ listMeta, onSelectCallback }: RecursiveTreeProps) => {
    const createTree = (branch: TreeBranch) =>
        branch.branches && (
        <TreeItem
            id={branch.id}
            key={branch.id}
            onSelectCallback={(e: React.MouseEvent<HTMLElement>) => {
                onSelectCallback(branch)
                }}
            isSelected={branch.selected}
            label={branch.label}
        >
            {branch.branches.map((branch: TreeBranch) => {
            return <Fragment key={branch.id}>{createTree(branch)}</Fragment>
            })}
        </TreeItem>
        )

    return (
      <div>
        {listMeta.map((branch: TreeBranch, i: any) => (
          <div key={i}>{createTree(branch)}</div>
        ))}
      </div>
    )
}

export default RecursiveTree
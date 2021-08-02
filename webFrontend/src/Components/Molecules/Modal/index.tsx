// #region Global Imports
import { Title } from "@Components/Atom"
import React from "react"

// #endregion Global Imports

// #region Local Imports
import { IModal } from "./Modal"
import { StyledModalWrap, StyledModal, StyledModalHeader } from "./styled"
// #endregion Local Imports
export type { IModal }

export const Modal: React.FunctionComponent<IModal.IProps> = (props) => {
    const { show, title, children } = props
    return (
        <StyledModalWrap show={show}>
            <StyledModal>
                {title && (
                    <StyledModalHeader>
                        <Title>{title}</Title>
                    </StyledModalHeader>
                )}
                {children}
            </StyledModal>
        </StyledModalWrap>
    )
}

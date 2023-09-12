import styled from 'styled-components';

const Baseline = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    &:hover {
        background-color: #f2f4f5;
    }
`;

const BaselineDash = styled.h3`
    margin: 0;
    padding-bottom: 2px;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
`;

const BaselineDescription = styled.div`
    margin: 0;
    width: calc(60vw - 200px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const BaselineHR = styled.hr`
    margin-top: 0;
    background-color: #ced3d7;
    border: none;
    height: 1px;
`;

const BaselineButton = styled.div`
    color: #50565e;

    &:hover {
        color: #000;
        cursor: pointer;
    }
`;

const PinnedEditBanner = styled.div`
    display: inline;
    height: 60px;
`;

const Sticky = styled.div`
    position: sticky;
    align-self: flex-start;
    top: 0;
    overflow-y: auto;
    opacity: 1;
    z-index: 999;
`;

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
`;

export {
    Baseline,
    BaselineDash,
    BaselineDescription,
    BaselineHR,
    BaselineButton,
    PinnedEditBanner,
    PageHeader,
    Sticky,
};

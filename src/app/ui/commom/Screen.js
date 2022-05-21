import styledComponents from "styled-components";

export default function Screen() {
    return (
        <>
            <Header><span>CINEFLEX</span></Header>
        </>
    );
}

const Header = styledComponents.div`

    height: 67px;
    width: 100%;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span{
        color: #E8833A;
        font-weight: 400;
        font-size: 34px;
    }
`;

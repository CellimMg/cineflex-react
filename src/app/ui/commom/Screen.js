import styledComponents from "styled-components";

export default function Screen({ title, children }) {
    return (
        <>
            <Header><span>CINEFLEX</span></Header>
            <Title><span>{title ?? "Título"}</span></Title>
            {children}
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

const Title = styledComponents.div`
    height: 110px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

     span{
        color: #293845;
        font-weight: 400;
        font-size: 24px;
    }
`;

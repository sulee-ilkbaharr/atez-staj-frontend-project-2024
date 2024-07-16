const IProps = ({ name }: any) => {
    //component: aynı kdou bir kez yazıp bir çok yerde kullanabilirsin . DRY kod için.Componentlerde ilk harf büyüktür. 
    return (
        <div>
            <h1>Props {name}</h1>
            <p></p>
        </div>
    );
};
export default IProps;
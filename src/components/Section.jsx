import Time from "./Time";

function Section(props){
    const {className} = props;
    return (<>
    <section className={className + ' bg-gray-200 overflow-auto flex justify-center items-center h-[93%]'}>
        <Time/>
    </section>
    </>)
}

export default Section;
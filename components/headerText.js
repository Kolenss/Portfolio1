

export default function HeaderText({title, target}){
    return(
        <div>
            <a className="cursor-pointer font-bold hover:text-blue-400 top- 0" href={`#${target}`}>{ title }</a>
        </div>
    );
}
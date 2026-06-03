export default function HeaderText({title, target, onClick}){
    return(
        <a
            className="text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
            href={`#${target}`}
            onClick={onClick}
        >
            { title }
        </a>
    );
}

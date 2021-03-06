



const File = ({onClick, name}) => {

    return <div onClick={onClick} className="file">
            <span className="fas fa-file fa-4x file-logo"></span>{name}
        </div>
}

export default File;
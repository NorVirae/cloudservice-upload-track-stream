import {useState} from 'react';


const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);
    const [files, setFiles] = useState([])
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setFiles([...files, ...e.dataTransfer.files])
        console.log(e.dataTransfer.files)
    }
    return (<div className="container">
                <header>This is the Header</header>
                    <main>

                        <div 
                            onDrop={e=>handleDrop(e)}
                            onDragEnter={e=>setActiveDragZone(true)}
                            onDragLeave={e=>setActiveDragZone(false)}
                            className={`dropzone ${activeDragZone?"active":""}`}>
                            Drag and Drop Your Files Here
                        </div>
                    </main>
                <footer>This is the footer</footer>
            </div>)
}

export default Home;
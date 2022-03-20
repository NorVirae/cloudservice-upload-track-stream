import {useState, useEffect} from 'react';
import Footer from '../component/footer';
import Header from '../component/header';

const chunkSize = 10 * 1024;

const Home = () => {
    const [activeDragZone, setActiveDragZone] = useState(false);
    const [files, setFiles] = useState([]);
    const [currentFileIndex, setCurrentFileIndex] = useState(null);
    const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState(null);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(null);

    const handleDrop = (e) => {

        e.stopPropagation();
        e.preventDefault();

        setFiles([...files, ...e.dataTransfer.files])
        console.log(e.dataTransfer.files)
    }

    const handleFileInput = (e) =>  {
        e.preventDefault()
        setFiles([...files, ...e.target.files])
        console.log(files)
    }

    const readAndUploadCurrentChunk = () => {
        const reader = new FileReader()
        const file = files[currentFileIndex];
        if(!file){
            return;
        }

        const from = currentChunkIndex * chunkSize

    }




    useEffect(() => {
        // console.log(files)
        if (files.length > 0){
            if (currentFileIndex === null){
                setCurrentFileIndex(
                    lastUploadedFileIndex === null? 0: lastUploadedFileIndex + 1
                )
            }
        }
    }, [files.length])


    useEffect(() => {
        if (currentFileIndex !== null){
            setCurrentChunkIndex(0)
        }
    }, [currentFileIndex])

    useEffect(()=>{
        if (currentChunkIndex !== null){

        }
    },[])

    return (
    <div className="container">
                <header><Header/></header>
                    <main className='main'  >
                        <input className={`dropzone ${activeDragZone?"active":""}`} onDrop={e=>handleDrop(e)} onChange={e=>handleFileInput(e)} type="file" />

                        {/* <div 
                            onDragEnter={e=>setActiveDragZone(true)}
                            onDragLeave={e=>setActiveDragZone(false)}
                            // onDrop={handleDrop}
                            // className={`dropzone ${activeDragZone?"active":""}`}
                            >
                            Drag and Drop Your Files Here

                        </div> */}

                    </main>
                <footer><Footer/></footer>
            </div>
            )
}

export default Home;
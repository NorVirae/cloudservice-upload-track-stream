import { useState } from "react"



const TestUpload = () => {
    const [file, setFile] = useState()
    return <div >
        <input onChange={e => handleUpload(e)} type="file" value={file} />
        <button> Upload</button>
    </div>
}

export default TestUpload
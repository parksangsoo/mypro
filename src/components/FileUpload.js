import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { storage } from '../service/firebase';



function FileUpload(props) {

    const [Images, setImages] = useState([])
    
    const dropHandler = (files) => {

        const uploadTask = storage.ref(`uploads/${files[0].name}`).put(files[0]);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("uploads")
                    .child(files[0].name)
                    .getDownloadURL()
                    .then(url => {
                        setImages([...Images, url])
                        props.refreshFunction([...Images, url])
                    })
            }
        )
    }

    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image);
        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
        props.refreshFunction(newImages)


    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: 300, height: 240, border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        
                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>
                {Images.map((image, index) => (
                    <div onClick={() => deleteHandler(image)} key={index}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }}
                            src={image}
                        />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default FileUpload
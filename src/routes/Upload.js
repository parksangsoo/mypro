import React, { useState } from 'react'
import './Upload.css';
import { Input,TextareaAutosize } from '@material-ui/core';
import FileUpload from '../components/FileUpload';
import { db } from '../service/firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';


const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

function Upload(props) {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Images, setImages] = useState([])

    const user = useSelector(selectUser);

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!Title || !Description || !Price || !Continent || Images.length === 0) {
            return alert(" 모든 값을 넣어주셔야 합니다.")
        }

        db.collection('product').add({
            writer: user.uid,
            title: Title,
            description: Description,
            price: Price,
            images: Images,
            continents: Continent
        })
        
        props.history.push('/')
            
    }

    return (
        <div className="upload">
            <div className="uploadtitle">
                <h2>카드 상품 업로드</h2>
            </div>

            <form onSubmit={submitHandler}>
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title}/>
                <br />
                <br />
                <label>설명</label>
                <TextareaAutosize onChange={descriptionChangeHandler} value={Description}/>
                <br />
                <br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price}/>
                <br />
                <br />
                <select onChange={continentChangeHandler} value={Continent}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <button type="submit">
                    확인
                </button>
            </form>
        </div>
    )
}

export default Upload

import React from 'react'
import './styles/review.css'

const Review = React.memo(() => {

    const reviews = [
        { img: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg", name: "Zohaib Khan", message: "this tool is one of the best tool. it very perfect analyze the resume. and give weak point." },
        { img: "https://images.unsplash.com/photo-1615109398623-88346a601842?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww", name: "Aman Khan", message: "this tool is one of the best tool. it very perfect analyze the resume. and give weak point." },
        { img: "https://media.istockphoto.com/id/2165425195/photo/portrait-of-a-man-in-an-office.jpg?s=612x612&w=0&k=20&c=CoKXlahdZicUmnzglzCxmK1qo0qlrO6za2e9-Yjt8b4=", name: "Murtaza Khan", message: "this tool is one of the best tool. it very perfect analyze the resume. and give weak point." }
    ]

    return (
        <div id='review'>
            <h1>Reviews</h1>
            <div id="cards">
                {
                    reviews.map((val, idx) => {
                        return <div key={idx} className="reviewCard">
                            <img src={val.img} alt="" />
                            <h2>{val.name}</h2>
                            <p>{val.message}</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
})

Review.displayName = 'review'
export default Review
import React, { Component } from 'react'
import Card from './Card.js'


let courseData = [
    {
        "id": 1,
        "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
        "title": "Learn Python: The Complete Python Programming Course",
        "instructor": "Avinash Jain,The Codex",
        "rating": ["4.4", "2,845"],
        "sale": true,
        "original-price": "679.99",
        "new-price": "199.99",
        "best-seller": false
    },
    {
        "id": 2,
        "image": "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
        "title": "Learning Python for Data Analysis and Visualization",
        "instructor": "Jose Portilla",
        "rating": ["4.4", "17,956"],
        "sale": true,
        "original-price": "1599.99",
        "new-price": "269.99",
        "best-seller": true

    },
    {
        "id": 3,
        "image": "https://img-c.udemycdn.com/course/480x270/405878_e5a0_3.jpg",
        "title": "Python for Beginners - Learn Programming from scratch",
        "instructor": "Edwin Diaz, Coding Faculty Solutions",
        "rating": ["4.4", "1,734"],
        "sale": true,
        "original-price": "679.99",
        "new-price": "199.99",
        "best-seller": false
    },
    {
        "id": 4,
        "image": "https://img-c.udemycdn.com/course/480x270/426570_1b91_3.jpg",
        "title": "Learn Python: Python for Beginners",
        "instructor": "Abrar Hussain",
        "rating": ["4.2", "2,759"],
        "sale": true,
        "original-price": "319.99",
        "new-price": "199.99",
        "best-seller": true
    },
    {
        "id": 5,
        "image": "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
        "title": "Python Beyond the Basics - Object-Oriented Programming",
        "instructor": "Infinte Skills",
        "rating": ["4.4", "2,927"],
        "sale": true,
        "original-price": "519.99",
        "new-price": "199.99",
        "best-seller": false
    }
]


console.log(courseData)
class Courses extends Component {
    render() {
        return (

            <section class="course-details">

                <div class="course-intro">
                    <h2>Expand your career opportunities with Python</h2>
                    <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
                    <button class=" navBtn">Explore Python</button>
                </div>

                <ul>
                    <Card course={courseData[0]} />
                    <Card course={courseData[1]} />
                    <Card course={courseData[2]} />
                    <Card course={courseData[3]} />
                    <Card course={courseData[4]} />

                </ul>
            </section>
        )
    }
}

export default Courses
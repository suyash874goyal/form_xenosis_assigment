import React, { useEffect, useState } from 'react'

const Form = () => {

        const data = { name: "", email: "", password: "", cityName: "", address: "", sallary: "", schoolName: "" }
        const [inputData, SetInputData] = useState(data)
        const [flag, SetFlag] = useState(false)

        useEffect(() => {
            console.log("Registered")
        }, [flag])

        function handleData(e) {
            SetInputData({...inputData, [e.target.name]: e.target.value })
            console.log(inputData)
        }

        function handleSubmit(e) {
            e.preventDefault()
            if (!inputData.name || !inputData.email || !inputData.password || !inputData.cityName || !inputData.address || !inputData.sallary || !inputData.schoolName) {
                alert("all Fields are mandatory")
            } else {
                SetFlag(true)
            }
        }

        return (

            <
            div >

            <
            pre > {
                (flag) ? < h1 > Hello { inputData.name }
                you have registered successfully you completed schooling from { inputData.schoolName },
                and you are from { inputData.cityName } < /h1>:""}  <
                /pre>

                <
                form className = 'container'
                onSubmit = { handleSubmit } >
                <
                div className = 'header' >
                <
                h1 > Registration Form < /h1> </div >


                <
                div className = '' >
                <
                input type = "text"
                name = "name"
                placeholder = 'Enter your name'
                value = { inputData.name }
                onChange = { handleData }
                /> </div >
                <
                div >
                <
                input type = "email"
                name = "email"
                placeholder = 'Enter your Email'
                value = { inputData.email }
                onChange = { handleData }
                /> <
                /div>

                <
                div >

                <
                input type = "password"
                name = "password"
                placeholder = 'Enter your Password'
                value = { inputData.password }
                onChange = { handleData }
                /> <
                /div> <
                div >

                <
                input type = "text"
                name = "cityName"
                placeholder = 'Enter your city Name'
                value = { inputData.cityName }
                onChange = { handleData }
                /> <
                /div> <
                div >
                <
                input type = "text"
                name = "address"
                placeholder = 'Enter your Address'
                value = { inputData.address }
                onChange = { handleData }
                /> <
                /div>

                <
                div >
                <
                input type = "text"
                name = "sallary"
                placeholder = 'Enter your Sallary'
                value = { inputData.sallary }
                onChange = { handleData }
                /> <
                /div>

                <
                div >
                <
                input type = "text"
                name = "schoolName"
                placeholder = 'Enter your School name'
                value = { inputData.schoolName }
                onChange = { handleData }
                /> <
                /div>

                <
                div >
                <
                button type = "submit" > Submit < /button> <
                /div>


                <
                /form> <
                /div>
            )
        }

        export default Form
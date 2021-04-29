import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../style/register.css';

// import './style.css';



function Register() {
    // USER NAME
    const [name, setName] = useState(null)
    const nameUpdate = (event) => {
        setName(event.target.value)
    }
    // USER EMAIL
    const [email, setEmail] = useState(null)
    const emailUpdate = (event) => {
        setEmail(event.target.value)
    }
    // USER PHONE NUMBER
    const [phoneNumber, setPhoneNumber] = useState(null)
    const phoneNumberUpdate = (event) => {
        setPhoneNumber(event.target.value)
    }
    // TAKES DROP OFF LOCATION
    const [dropOff, setDropOff] = useState(null)
    const dropOffUpdate = (event) => {
        setDropOff(event.target.value)
    }
    // HANDLE RENTAL DATES
    const [selectedStartDate, setSelectedStartDate] = useState(null)
    const [selectedEndDate, setSelectedEndDate] = useState(null)
    // FOR USER TO CHOOSE ELECTRIC OR TRADITIONAL BIKE
    const [bikeType, setBikeType] = useState(null)
    const bikeUpdate = (event) => {
        setBikeType(event.target.value)
    }

    // SUBMIT ENTIRE FORM TO DB
    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                dropOff: dropOff,
                selectedStartDate: selectedStartDate,
                selectedEndDate: selectedEndDate,
                bikeType: bikeType
            })
        }
        //  API TO PUSH FORM INFO TO DB
        fetch("/api/register", requestOptions)
            .then((response) => {
                console.log(response)
                response.json();
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="container rentalForms">
            <div className="card card-text">
                <h4 className="card-header rental">
                    Rental Form
            </h4>
                <div className="card-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input required onChange={nameUpdate} type="text" className="form-control" id="name" placeholder="Name" name="name"></input>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input required onChange={emailUpdate} type="email" className="form-control" id="email" placeholder="Email" name="email"></input>
                    </div>
                    <div className="form-group">
                        <label >Phone Number</label>
                        <input required onChange={phoneNumberUpdate} type="phone" className="form-control" id="phone" placeholder="Phone Number" name="phone"></input>
                    </div>
                    <div className="form-group">
                        <label >Drop Off Location (Street Address, City)</label>
                        <input required onChange={dropOffUpdate} type="dropOff" className="form-control" id="phone" placeholder="Address" name="phone"></input>
                    </div>
                </div>
            </div>
            <div className="card card-text bikeInfoForm">
                <h4 className="card-header">
                    Bike Information</h4>
                <div className="card-body">
                    <div className="form-check electricRadioBtn">
                        <input onChange={bikeUpdate} checked={bikeType === 'Electric Bike'} className="form-check-input" type="checkbox" value="Electric Bike" id="bikeTypeRadioBtn"></input>
                        <label className="form-check-label">
                            Electric Bike</label>
                    </div>
                    <div className="form-check traditionanlRadioBtn">
                        <input onChange={bikeUpdate} checked={bikeType === 'Traditional Bike'} className="form-check-input" type="checkbox" value="Traditional Bike" id="bikeTypeRadioBtn"></input>
                        <label className="form-check-label">
                            Traditional Bike</label>
                    </div>
                    <div className="form-group">
                        <div className="startDate">
                            <label className="startDate">Rental Start Date</label>
                            <DatePicker selected={selectedStartDate} onChange={date => setSelectedStartDate(date)}
                                minDate={new Date()}
                                isClearable
                            />
                        </div>
                    <div className="endDate">
                        <label className="endDate">Rental End Date</label>
                        <DatePicker selected={selectedEndDate} onChange={date => setSelectedEndDate(date)}
                            minDate={selectedStartDate}
                            isClearable
                            />
                            </div>
                    </div>
                </div>
            <button onClick={handleSubmit} type="submit" className="formSubmit btn-sml">Rent A Bike!</button>
            </div>
        </div>
    )

};


export default Register;

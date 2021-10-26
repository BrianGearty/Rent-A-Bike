import React, { useState } from "react";
import { API } from 'aws-amplify';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../style/register.css';
import { useHistory } from "react-router-dom";
// import './style.css';


function Register() {
    let history = useHistory();
    // USER NAME
    const [name, setName] = useState("")
    const nameUpdate = (event) => {
        setName(event.target.value)
    }
    // USER EMAIL
    const [email, setEmail] = useState("")
    const emailUpdate = (event) => {
        setEmail(event.target.value)
    }
    // USER PHONE NUMBER
    const [phoneNumber, setPhoneNumber] = useState("")
    const phoneNumberUpdate = (event) => {
        setPhoneNumber(event.target.value)
    }
    // TAKES DROP OFF LOCATION
    const [dropOff, setDropOff] = useState("")
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
    const handleSubmit = (e) => {
        e.preventDefault();

        const apiName = 'rentalFormAPI';
        const path = '/api/register'; 
        const myInit = {
            body: {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                dropOff: dropOff,
                selectedStartDate: selectedStartDate,
                selectedEndDate: selectedEndDate,
                bikeType: bikeType
            }
        };

        API
            .post(apiName, path, myInit)
            .then(response => {
            console.log(response)
            }).then(
                // clearing form/resetting state after form submits
                setName(''),
                setEmail(''),
                setPhoneNumber(''),
                setDropOff(''),
                setSelectedStartDate(null),
                setSelectedEndDate(null),
                setBikeType(null)
            )
            .catch(error => {
                console.log(error.response);
            });

            history.push(`/payment/500`)
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
                        <input required onChange={nameUpdate} type="text" value={name} className="form-control" id="name" placeholder="Name" name="name"></input>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input required onChange={emailUpdate} type="email" value={email} className="form-control" id="email" placeholder="Email" name="email"></input>
                    </div>
                    <div className="form-group">
                        <label >Phone Number</label>
                        <input required onChange={phoneNumberUpdate} type="phone" value={phoneNumber} className="form-control" id="phone" placeholder="Phone Number" name="phone"></input>
                    </div>
                    <div className="form-group">
                        <label >Drop Off Location (Street Address, City)</label>
                        <input required onChange={dropOffUpdate} type="dropOff" value={dropOff} className="form-control" id="dropOff" placeholder="Address" name="phone"></input>
                    </div>
                </div>
            </div>
            <div className="card card-text bikeInfoForm">
                <h4 className="card-header">
                    Bike Information</h4>
                <div className="card-body">
                    <div className="form-check electricRadioBtn">
                        <input onChange={bikeUpdate} checked={bikeType === 'super73'} className="form-check-input" type="checkbox" value="super73" id="electricBikeRadioBtn"></input>
                        <label className="form-check-label">
                            Super 73 ZX Electric Bike</label>
                    </div>
                    <div className="form-check electricRadioBtn">
                        <input onChange={bikeUpdate} checked={bikeType === 'crewDart'} className="form-check-input" type="checkbox" value="crewDart" id="electricBikeRadioBtn"></input>
                        <label className="form-check-label">
                            Crew Dart Electric Bike</label>
                    </div>
                    <div className="form-check electricRadioBtn">
                        <input onChange={bikeUpdate} checked={bikeType === 'radPower'} className="form-check-input" type="checkbox" value="radPower" id="electricBikeRadioBtn"></input>
                        <label className="form-check-label">
                            RadRunner Utility Electric Bike</label>
                    </div>
                    <div className="form-check traditionanlRadioBtn">
                        <input onChange={bikeUpdate} checked={bikeType === 'sunCruiser'} className="form-check-input" type="checkbox" value="sunCruiser" id="regularBikeRadioBtn"></input>
                        <label className="form-check-label">
                            Sun Beach Cruiser</label>
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



/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./App.scss";
import { FaUserCircle } from "react-icons/fa";
import { MdHeadsetMic, MdNotificationsActive } from "react-icons/md";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import {
    FiChevronUp,
    FiClock,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import logo from "./assets/logo.jpeg";
import appLogo from "./assets/app-logo.png";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const App = () => {
    const results = [
        {
            moreCount: 8,
            route: ["MNL", "SIN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Singapore Air",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/SQ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "00:40",
            arrival: "18:45",
            duration: "18h 5m",
            stopCount: 2,
            price: "₹31,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "ICN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Asiana Airlines",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/OZ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "23:45",
            arrival: "06:10",
            duration: "30h 25m",
            stopCount: 2,
            price: "₹83,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "SIN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Singapore Air",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/SQ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "00:40",
            arrival: "18:45",
            duration: "18h 5m",
            stopCount: 2,
            price: "₹31,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "ICN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Asiana Airlines",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/OZ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "23:45",
            arrival: "06:10",
            duration: "30h 25m",
            stopCount: 2,
            price: "₹83,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "SIN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Singapore Air",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/SQ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "00:40",
            arrival: "18:45",
            duration: "18h 5m",
            stopCount: 2,
            price: "₹31,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "ICN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Asiana Airlines",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/OZ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "23:45",
            arrival: "06:10",
            duration: "30h 25m",
            stopCount: 2,
            price: "₹83,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "SIN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Singapore Air",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/SQ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "00:40",
            arrival: "18:45",
            duration: "18h 5m",
            stopCount: 2,
            price: "₹31,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "ICN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Asiana Airlines",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/OZ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "23:45",
            arrival: "06:10",
            duration: "30h 25m",
            stopCount: 2,
            price: "₹83,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "SIN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Singapore Air",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/SQ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "00:40",
            arrival: "18:45",
            duration: "18h 5m",
            stopCount: 2,
            price: "₹31,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "ICN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Asiana Airlines",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/OZ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "23:45",
            arrival: "06:10",
            duration: "30h 25m",
            stopCount: 2,
            price: "₹83,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "SIN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Singapore Air",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/SQ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "00:40",
            arrival: "18:45",
            duration: "18h 5m",
            stopCount: 2,
            price: "₹31,407",
        },
        {
            moreCount: 8,
            route: ["MNL", "ICN", "CGK", "UPG"],
            carriers: [
                {
                    airline: "Asiana Airlines",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/OZ_2x.png",
                },
                {
                    airline: "Garuda Indonesia",
                    icon: "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/GA_2x.png",
                },
            ],
            departure: "23:45",
            arrival: "06:10",
            duration: "30h 25m",
            stopCount: 2,
            price: "₹83,407",
        },
    ];

    // const [slider, setSlider] = useState(31407);
    const [slider, setSlider] = useState(50000);

    return (
        <div className="app-container">
            <header>
                <div className="max-width">
                    <div className="flex align row-1">
                        <div className="logo-container">
                            <img src={logo} alt={"logo"} />
                        </div>

                        <ul className="flex ali className='flex align'gn nav-li className='flex align'nks">
                            <li className="flex align active">
                                <img
                                    className="app-logo"
                                    src={appLogo}
                                    alt="app-logo"
                                />
                            </li>
                        </ul>

                        <ul className="flex align help-links">
                            <li className="flex align">INR ₹</li>
                            <li className="flex align">
                                <MdHeadsetMic /> Support
                            </li>
                            <li className="flex align">
                                <FaUserCircle /> Your Shipments
                            </li>
                        </ul>
                    </div>
                    <div className="flex align row-2">
                        <div className="form-group">
                            <select name="tripType" id="tripType">
                                <option value="NS">Non-stop</option>
                                <option value="ML">Multi-Leg</option>
                                <option value="CO">Connecting</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" value="MNL - Manila, PH" />
                        </div>
                        <div className="form-group">
                            <HiOutlineSwitchHorizontal />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value="UPG - Ujung Pandang, ID"
                            />
                        </div>
                        <div className="form-group">
                            <select name="date" id="date">
                                <option value="2021-09-10">Fri, Sep 10</option>
                                <option value="2021-09-11">Fri, Sep 11</option>
                                <option value="2021-09-12">Fri, Sep 12</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" value="20 Pieces" />
                        </div>
                        <div className="form-group">
                            <input type="text" value="100 Kg" />
                        </div>
                        <div className="form-group">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="max-width flex main-container">
                    <div className="left">
                        <div className="fare-alert-container flex">
                            <div className="fare-icon-container center">
                                <div className="fare-icon-wrapper center">
                                    <MdNotificationsActive />
                                </div>
                            </div>
                            <div className="fare-meta flex column">
                                <span>Get updates via email</span>
                                <a href="#">Set an alert</a>
                            </div>
                        </div>

                        <div className="flight-count">
                            <span>24 of 24</span> flights
                        </div>

                        <div className="accordian">
                            <div className="acc-header flex align">
                                <div className="acc-title">Stops</div>
                                <div className="acc-actions flex align">
                                    <FiChevronUp />
                                </div>
                            </div>
                            <div className="acc-body">
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb1"
                                        id="cb1"
                                    />
                                    <label htmlFor="cb1">1 stop</label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb1"
                                        id="cb1"
                                    />
                                    <label htmlFor="cb1">2 stops</label>
                                </div>
                            </div>
                        </div>

                        <div className="accordian">
                            <div className="acc-header flex align">
                                <div className="acc-title">Departure Time</div>
                                <div className="acc-actions flex align">
                                    <FiChevronUp />
                                </div>
                            </div>
                            <div className="acc-body">
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb2"
                                        id="cb2"
                                    />
                                    <label htmlFor="cb2">
                                        Early Morning
                                        <span>Midnight - 8 am</span>
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb3"
                                        id="cb3"
                                    />
                                    <label htmlFor="cb3">
                                        Morning
                                        <span>8 am - Noon</span>
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb4"
                                        id="cb4"
                                    />
                                    <label htmlFor="cb4">
                                        Afternoon
                                        <span>Noon - 4 pm</span>
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb5"
                                        id="cb5"
                                    />
                                    <label htmlFor="cb5">
                                        Evening
                                        <span>4 pm - 8 pm</span>
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb6"
                                        id="cb6"
                                    />
                                    <label htmlFor="cb6">
                                        Night
                                        <span>8 pm - Midnight</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="accordian">
                            <div className="acc-header flex align">
                                <div className="acc-title">All In Freight</div>
                                <div className="acc-actions flex align">
                                    <FiChevronUp />
                                </div>
                            </div>
                            <div className="acc-body price-range-container">
                                <div className="price">Up to ₹{slider}</div>

                                <InputRange
                                    maxValue={304219}
                                    minValue={31407}
                                    classNames={{
                                        minLabel: "range-min-label",
                                        maxLabel: "range-max-label",
                                        activeTrack: "range-active-track",
                                        inputRange: "range-input-range",
                                        labelContainer: "range-label-container",
                                        slider: "range-slider",
                                        sliderContainer:
                                            "range-slider-container",
                                        track: "range-track",
                                        valueLabel: "range-value-label",
                                    }}
                                    value={slider}
                                    onChange={(value) => setSlider(value)}
                                />

                                <div className="min-max flex align">
                                    <div className="min">₹31,407</div>
                                    <div className="max">₹3,04,219</div>
                                </div>
                            </div>
                        </div>

                        <div className="accordian">
                            <div className="acc-header flex align">
                                <div className="acc-title">
                                    Special Handling Code
                                </div>
                                <div className="acc-actions flex align">
                                    <FiChevronUp />
                                </div>
                            </div>
                            <div className="acc-body">
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb13"
                                        id="cb13"
                                    />
                                    <label htmlFor="cb13">
                                        LIFE TROPICAL FISH
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb14"
                                        id="cb14"
                                    />
                                    <label htmlFor="cb14">LIVE CHCIKEN</label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb15"
                                        id="cb15"
                                    />
                                    <label htmlFor="cb15">
                                        SPORTING WEAPONS
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb16"
                                        id="cb16"
                                    />
                                    <label htmlFor="cb16">
                                        SAVE HUMAN LIFE
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="accordian">
                            <div className="acc-header flex align">
                                <div className="acc-title">Product</div>
                                <div className="acc-actions flex align">
                                    <FiChevronUp />
                                </div>
                            </div>
                            <div className="acc-body">
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb17"
                                        id="cb17"
                                    />
                                    <label htmlFor="cb17">GENERAL</label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb18"
                                        id="cb18"
                                    />
                                    <label htmlFor="cb18">GO PREMIUM</label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb19"
                                        id="cb19"
                                    />
                                    <label htmlFor="cb19">GO BAGGAGE</label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb20"
                                        id="cb20"
                                    />
                                    <label htmlFor="cb20">CITY TO PORT</label>
                                </div>
                            </div>
                        </div>
                        <div className="accordian">
                            <div className="acc-header flex align">
                                <div className="acc-title">Commodities</div>
                                <div className="acc-actions flex align">
                                    <FiChevronUp />
                                </div>
                            </div>
                            <div className="acc-body">
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb21"
                                        id="cb21"
                                    />
                                    <label htmlFor="cb21">GENERAL</label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb22"
                                        id="cb22"
                                    />
                                    <label htmlFor="cb22">FRESH FRUIT</label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb23"
                                        id="cb23"
                                    />
                                    <label htmlFor="cb23">PASSPORT/VISA</label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb24"
                                        id="cb24"
                                    />
                                    <label htmlFor="cb24">
                                        LONG DIMENSION ITEM
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="accordian">
                            <div className="acc-header flex align">
                                <div className="acc-title">Airlines</div>
                                <div className="acc-actions flex align">
                                    <FiChevronUp />
                                </div>
                            </div>
                            <div className="acc-body">
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb7"
                                        id="cb7"
                                    />
                                    <label htmlFor="cb7">
                                        Show multi-airline itineraries
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb8"
                                        id="cb8"
                                    />
                                    <label htmlFor="cb8">
                                        All Nippon <span>₹51,214</span>
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb9"
                                        id="cb9"
                                    />
                                    <label htmlFor="cb9">
                                        Asiana Airlines <span>₹51,214</span>
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb10"
                                        id="cb10"
                                    />
                                    <label htmlFor="cb10">
                                        Garuda Indonesia <span>₹51,214</span>
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb11"
                                        id="cb11"
                                    />
                                    <label htmlFor="cb11">
                                        Korean Air Lines <span>₹51,214</span>
                                    </label>
                                </div>
                                <div className="cb-group flex align">
                                    <input
                                        type="checkbox"
                                        name="cb12"
                                        id="cb12"
                                    />
                                    <label htmlFor="cb12">
                                        Singapore Air <span>₹51,214</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="search-results-container">
                            <div className="search-date-changer-wrapper">
                                <div className="flex search-date-changer">
                                    <div className="chevron-wrapper">
                                        <FiChevronLeft />
                                    </div>
                                    <div className="date-container">
                                        <div className="date-changer-date">
                                            Tue, 07 Sep
                                        </div>
                                        <div className="date-changer-best-price">
                                            -
                                        </div>
                                    </div>
                                    <div className="date-container active">
                                        <div className="date-changer-date">
                                            Wed, 08 Sep
                                        </div>
                                        <div className="date-changer-best-price">
                                            ₹31,407
                                        </div>
                                    </div>
                                    <div className="date-container">
                                        <div className="date-changer-date">
                                            Thu, 09 Sep
                                        </div>
                                        <div className="date-changer-best-price">
                                            -
                                        </div>
                                    </div>
                                    <div className="date-container">
                                        <div className="date-changer-date">
                                            Fri, 10 Sep
                                        </div>
                                        <div className="date-changer-best-price">
                                            -
                                        </div>
                                    </div>
                                    <div className="date-container">
                                        <div className="date-changer-date">
                                            Sat, 11 Sep
                                        </div>
                                        <div className="date-changer-best-price">
                                            -
                                        </div>
                                    </div>
                                    <div className="date-container">
                                        <div className="date-changer-date">
                                            Sun, 12 Sep
                                        </div>
                                        <div className="date-changer-best-price">
                                            -
                                        </div>
                                    </div>
                                    <div className="date-container">
                                        <div className="date-changer-date">
                                            Mon, 13 Sep
                                        </div>
                                        <div className="date-changer-best-price">
                                            -
                                        </div>
                                    </div>
                                    <div className="chevron-wrapper">
                                        <FiChevronRight />
                                    </div>
                                </div>
                            </div>

                            <div className="list-header-wrapper">
                                <div className="flex align list-header-container">
                                    <div className="airline-header list-header">
                                        Airlines
                                    </div>
                                    <div className="departure-header list-header">
                                        Departure
                                    </div>
                                    <div className="arrival-header list-header">
                                        Arrival
                                    </div>
                                    <div className="duration-header list-header">
                                        Duration
                                    </div>
                                    <div className="price-header list-header">
                                        Price
                                    </div>
                                    <div className="actions-header list-header"></div>
                                </div>
                            </div>

                            <ul>
                                {results.map((item, i) => (
                                    <li key={i}>
                                        <div className="item-info flex">
                                            <div className="airline-section">
                                                <div className="flex align airline-images">
                                                    {item.carriers.map(
                                                        (carrier, idx) => (
                                                            <img
                                                                key={idx}
                                                                src={
                                                                    carrier.icon
                                                                }
                                                                alt={
                                                                    carrier.airline
                                                                }
                                                                title={
                                                                    carrier.airline
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </div>
                                                {item.carriers.length > 1 && (
                                                    <span>
                                                        Multiple Carrier
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex departure-section">
                                                <div className="departure-time">
                                                    {item.departure}
                                                </div>
                                                <div className="flex align route-container">
                                                    {item.route.map(
                                                        (station, s_idx) => (
                                                            <React.Fragment
                                                                key={s_idx}
                                                            >
                                                                <span>
                                                                    {station}
                                                                </span>
                                                                {item.route
                                                                    .length !==
                                                                    s_idx +
                                                                        1 && (
                                                                    <div className="arrow">
                                                                        →
                                                                    </div>
                                                                )}
                                                            </React.Fragment>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            <div className="arrival-section">
                                                {item.arrival}
                                            </div>

                                            <div className="flex duration-section">
                                                <div className="duration-container">
                                                    {item.duration}
                                                </div>
                                                {item.stopCount && (
                                                    <div className="stop-count">
                                                        {item.stopCount} stop
                                                    </div>
                                                )}
                                            </div>

                                            <div className="price-section">
                                                {item.price}
                                            </div>

                                            <div className="flex actions-section">
                                                <button>Book</button>
                                            </div>
                                        </div>
                                        <div className="flex align item-footer">
                                            <a
                                                href="#"
                                                className="flight-details-link"
                                            >
                                                Flight Details
                                            </a>
                                            <FiClock />
                                            <a
                                                href="#"
                                                className="see-more-options-link"
                                            >
                                                +{item.moreCount} More options
                                                at the same price
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* <footer>
                <div className="max-width">ϞϞ(๑⚈ ․̫ ⚈๑)∩</div>
            </footer> */}
        </div>
    );
};

export default App;

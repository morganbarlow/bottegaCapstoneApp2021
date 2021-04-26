import React from "react";


export default function servicePrice() {
    return (
        <div className = "service-price-container">
            <div className = "prices">

                <div className = "columns">
                    <h2>Full Set Lashes</h2>
                    <ul>Classic $100 (~2hr)</ul>
                    <ul>Hybrid $130 (~2.5hr)</ul>
                    <ul>Volume $160 (~3hr)</ul>
                    <ul>Mega Volume $180 (~3-3.5hr)</ul>
                </div> 

                <div className = "columns">
                    <h2>Lash Fill</h2>
                    <ul>30 min $35</ul>
                    <ul>1 hr $55</ul>
                    <ul>1 hr 30 min $70</ul>
                    <ul>2 hrs $90</ul>
                </div>           

                    <div className = "columns">
                    <h2>Brows</h2>
                    <ul>Brow Lamination $65 (~1hr)</ul>
                    <ul>Henna Brow $30 (~30min)</ul>
                </div>

                <div className = "columns">
                    <h2>Wax</h2>
                    <ul>Brow Wax $10</ul>
                    <ul>Lip Wax $7</ul>
                </div>

                <div className = "columns">
                    <h2>Makeup</h2>
                    <ul>Natural $60 (~1hr)</ul>
                    <ul>Glam $75 (~1hr 15min)</ul>
                    <ul>Bridal Glam $80 (~1hr 15min)</ul>
                    <h4>**Strip lashes are NOT included in pricing</h4>
                </div>

            </div>
        </div>
    )
}
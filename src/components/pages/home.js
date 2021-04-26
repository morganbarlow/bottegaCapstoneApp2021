import React from 'react';

import InstagramEmbed from "react-instagram-embed"


export default function home() {
    return (
        <div className = "homepage-container">
            <div className = "introduction">
                <h1>Hello, Thank you for visiting.</h1>
            </div>
            <div className = "insta-feed">
                <InstagramEmbed
                    url = "https://www.instagram.com/p/CN8W08KDaUo/"
                    clientAccessToken='EAAoZA0zVyIoQBAAws6YGYyWJg2ZCOnGh1NUkVE44aJEoLgxQeVI1TDnWRdG2tlUJ9g8kvlHfUS1pDbAKu5FR5eM6yeObscdgAkSioHuSA9H3m5xvZAi7IOvaaTJZAsOn8nhxwIhaCWgCErKoipA416C6xJgGAbN3osDZAEeFXzq623hXGm5XHb6ZB20eGq5ZAqIMyhoNOAbHw3ZAFZCyNomlc1FmKLPIkciYc5fqMvvyuY1W4RkroKdZAn'
                    maxWidth = {320}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                />
            </div>
        </div>
    )
}
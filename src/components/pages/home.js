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
                    className = "instagram"
                    url = "https://www.instagram.com/p/CN8W08KDaUo/"
                    clientAccessToken='EAAoZA0zVyIoQBADw1SAvQEuQf9MYMKCic2dkaQqdxvUG9uc4kxW4oHY0QQBkbWYinIbNm0CHmWr5TtC8217qCQq3AGgG8StqGJMk4JZAHsgCpRk1nHMSZA4c0KRZBOqMJgEb1jCuJOWBRXxZAZAict6jYc3JSw29h4TursOV9oZB1jaJcuvhwv7RAvpfxRPRY5yqfpdKtDpCM5a5K5HZBoviRvgFzzKjSr17hVN3aeCuYH9yxi60gncV'
                    maxWidth = {300}
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
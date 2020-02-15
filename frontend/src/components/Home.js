import React, { useEffect, useState } from 'react'

import { apiKey, baseUrl } from '../config'
import Feed from './Feed'

const Home = ({ stateObj, setStateObj }) => {
    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetch(`${baseUrl}/api/v1/posts?feed=true`, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey,
                'Authorization': 'Bearer ' + stateObj.token
            }
        })
            .then(res => res.json())
            .then(json => {
                setFeed(json)
            }).catch(err => {
                alert(`Something Went Wrong! ${err}`)
            })
    }, [])
    console.log(feed)
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <p className="row">Hello {stateObj.user.name}!</p>
                    <h2 className="row">Latest Feed</h2>
                    <Feed feed={feed.results} />
                </div>
            </div>
        </div>
    )
}

export default Home
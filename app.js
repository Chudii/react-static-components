const Navigation = () => {
    return (
        <div className='nav box'>
            <div className='navbox'>
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        </div>
    )
}

const Reviews = () => {
    return (
        <div className='minibox box'>
            <p>Reviews</p>
            <h1>1,281</h1>
        </div>
    )
}

const AverageRating = () => {
    return (
        <div className='minibox box'>
            <p>Average Rating</p>
            <h1>4.6</h1>
        </div>
    )
}

const SentimentAnalysis = () => {
    return (
        <div className='minibox box'>
            <p>Sentiment Analysis</p>
            <div className='reviewtype'>
                <h2>960</h2>
                <h2>122</h2>
                <h2>321</h2>
            </div>
        </div>
    )
}

const WebsiteVisitors = () => {
    return (
        <div className='bigbox box'>
            <p>Website Visitors</p>
            <h1>821</h1>
            <div className='graph'>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className='container'>
            <Navigation />
            <div className='right'>
                <div className='topview'>
                    <Reviews />
                    <AverageRating />
                    <SentimentAnalysis />
                </div>
                <div className='bottomview'>
                    <WebsiteVisitors />
                </div>
            </div>
            
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('main')
);
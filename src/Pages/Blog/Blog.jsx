import React from 'react';

const Blog = () => {
    return (
        <div  className='p-20 text-xl'>
            <div>
            <h2 className='font-semibold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h2> 
            <p>Token issuance: Once authenticated, the server issues both an access token and a refresh token to the client. Access token use: The access token is used for accessing protected resources until it expires. Access token expiry: Upon expiration, the client will use the refresh token to obtain a new access token.</p>
            </div> <br />
            <div>
                <h2  className='font-semibold'>2. Compare SQL and NoSQL databases?</h2>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div> <br />
            <div>
                <h2  className='font-semibold'>3. What is express js? What is Nest JS?</h2>
                <p>Both NestJS and Express. js are frameworks, specifically for building backend web applications. A framework is an opinionated set of tools that serves as a basis or a starting point for creating something. In formal terms: a software framework is an abstraction that provides generic functionality.</p>
            </div> <br />
            <div>
                <h2  className='font-semibold'>4. What is MongoDB aggregate and how does it work?</h2>
                <p>From the MongoDB documentation: Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result.</p>
            </div>
        </div>
    );
};

export default Blog;
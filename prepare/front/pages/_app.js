import 'antd/dist/antd.css';
import PropTypes from "prop-types";
import Head from 'next/head';
import React from "react";

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>

    )
}

NodeBird.prototype = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;
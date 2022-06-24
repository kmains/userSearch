import React, { useState, useEffect } from 'react';
import '../styles/search.scss';

function Pages({page, numRes, setPage}) {

    function buildPages(){
        let totalPages = Math.ceil(numRes/20);
        console.log(totalPages, page)
        totalPages = totalPages > 50 ? 50 : totalPages;

        //First, Prev, Next, Last, display current page+/-2 & first/last
        const nextPage = (page<totalPages ? page+1 : '');
        const prevPage = (page>1 ? page-1 : '');

        return (<div className="pagination">
            {page !== 1 &&
            <button onClick={()=>setPage(1)} >First</button>
            }
            {prevPage !== '' &&
             <button onClick={()=>setPage(prevPage)}>{prevPage}</button> }
            <button className="selected">{page}</button>
            {nextPage !== '' &&
             <button onClick={()=>setPage(nextPage)}>{nextPage}</button> }
              {page !== totalPages &&
            <button onClick={()=>setPage(totalPages)}>Last</button> }
        </div>)

    }

return (

    buildPages()
);
}

export default Pages;

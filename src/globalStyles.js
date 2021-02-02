import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Roboto', sans-serif;
            -webkit-font-smoothing: antialised;
            -moz-osx-font-something: antialised;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #334680;
        margin: 0;
        padding: 12px;
        background: #F6F7FB;
    }

    body {
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }

    p {
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }



.pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none; 
}

.pagination>.active > a,
.pagination>.active > a:hover {
    background-color: #47ccde;
    border-color: #47ccde;
    color: #fff;
}


.pagination>li>a {
    border: 1px solid #B7BCCE;
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 12px; 
    padding: 5px 10px; 
    color: #B7BCCE;
    outline: none;
    cursor: pointer;
}

.pagination > li > a:hover {
    border: 1px solid #47ccde;
    color: #47ccde;
}

.pagination>.active>a, .pagination>.active>span, .pagination>.active>a:hover, .pagination>.active>span:hover, .pagination>.active>a:focus, .pagination>.active>span:focus {
    background-color: #47ccde;
    border-color: #47ccde;
    outline: none;
}
 
.pagination>li:first-child>a, .pagination>li:first-child>span, .pagination>li:last-child>a, .pagination>li:last-child>span {
    border-radius: unset
}

@media(min-width: 1114px) {
    .pagination {
        justify-content: flex-end;
    }
}`;
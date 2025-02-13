/* Mobile View (480px and below) */
@media screen and (max-width: 480px) {
    /* header {
        padding: 10px;
        text-align: center;
        flex-direction: column;
    }

    .navbar {
        display: none; 
        flex-direction: column;
        align-items: center;
        width: 100%;
        background: #333;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
    }

    .navbar ul {
        flex-direction: column;
        width: 100%;
        text-align: center;
    }

    .navbar ul li {
        padding: 10px 0;
        width: 100%;
    }

    .navbar ul li a {
        display: block;
        width: 100%;
        color: white;
        text-decoration: none;
    }

    .menu-toggle {
        display: block; 
        cursor: pointer;
        text-align: center;
        padding: 10px;
        background: #333;
        color: white;
    }

    .menu-toggle.active + .navbar {
        display: flex;
    }


    .img{
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px;
    }
    .container, .nav, .dcContainer, .categoryBlock, .blogCard {
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px;
    }

    .inline input[type="text"] {
        width: 100%;
        padding: 10px;
        font-size: 12px;
    }

    .categoriesBlock {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }

    .giftLink div {
        width: 100%;
    }

    .displayInline {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 15px;
    }

    .etsyIndia {
        flex-direction: column;
        gap: 10px;
        height: auto;
        padding: 10px;
    }

    .btnLang, .downloadBtn {
        width: 100%;
        text-align: center;
    } */
    *{
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex-wrap: wrap;
    }
}

/* Tablet View (768px and below) */
@media screen and (max-width: 768px) {
    .container, .nav, .dcContainer, .categoryBlock, .blogCard {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    header {
        padding: 15px;
        text-align: center;
        flex-direction: column;
    }

    .navbar {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background: #444;
    }

    .navbar ul {
        flex-direction: column;
        width: 100%;
        text-align: center;
    }

    .navbar ul li {
        padding: 12px 0;
        width: 100%;
    }

    .navbar ul li a {
        display: block;
        width: 100%;
        color: white;
        text-decoration: none;
    }

    .menu-toggle {
        display: block; /* Show menu toggle */
        cursor: pointer;
        text-align: center;
        padding: 10px;
        background: #444;
        color: white;
    }

    .menu-toggle.active + .navbar {
        display: flex;
    }

    .inline input[type="text"] {
        width: 90%;
        padding: 12px;
        font-size: 14px;
    }

    .categoriesBlock {
        flex-wrap: wrap;
        justify-content: center;
    }

    .giftLink div {
        width: 45%;
    }

    .displayInline {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
    }
}


/* Styles for screens with a maximum width of 1024px */
@media (max-width: 1024px) {
    .container { 
        flex-direction: column;
        align-items: center;
        font-size: medium;
    }

    .inline {
        flex-direction: column;
        gap: 20px;
    }

    .inline input[type="text"] {
        width: 100%;
    }

    .nav {
        flex-direction: column;
        gap: 10px;
    }

    .categoriesBlock {
        flex-direction: column;
        align-items: center;
        left: 0;
    }

    .recentlyBlock div {
        flex-direction: column;
        align-items: center;
    }

    .categoryBlock {
        flex-direction: column;
        gap: 20px;
    }

    .displayInline {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    .etsyIndia {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }

    header {
        padding: 10px;
        text-align: center;
        flex-direction: column;
    }
    .container { 
        flex-direction: row;
        align-items: flex-start;
        font-size: large;
    }

    .inline {
        flex-direction: row;
        gap: 10px;
    }

    .inline input[type="text"] {
        width: auto;
    }

    .nav {
        flex-direction: row;
        gap: 15px;
    }

    .categoriesBlock {
        flex-direction: row;
        align-items: flex-start;
        left: auto;
    }

    .recentlyBlock div {
        flex-direction: row;
        align-items: flex-start;
    }

    .categoryBlock {
        flex-direction: row;
        gap: 10px;
    }

    .displayInline {
        flex-direction: row;
        width: auto;
        align-items: flex-start;
    }

    .etsyIndia {
        flex-direction: row;
        gap: 10px;
        text-align: left;
    }

    .navbar {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .navbar ul {
        flex-direction: column;
        text-align: center;
        width: 100%;
    }

    .navbar ul li {
        padding: 10px 0;
        width: 100%;
    }

    .navbar ul li a {
        display: block;
        width: 100%;
    }

    .menu-toggle {
        display: block; 
        text-align: center;
        cursor: pointer;
    }

    .menu-toggle.active + .navbar {
        display: flex;
    }
}

/* Styles for screens with a minimum width of 1024px */
@media (min-width: 1024px) {
    header {
        padding: 20px;
        text-align: left;
        flex-direction: row;
        justify-content: space-between;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

    .navbar ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .navbar ul li {
        padding: 10px 15px;
    }

    .navbar ul li a {
        text-decoration: none;
        padding: 10px;
    }

    .menu-toggle {
        display: none; 
    }
    .container { 
        flex-direction: row;
        align-items: flex-start;
        font-size: large;
    }

    .inline {
        flex-direction: row;
        gap: 10px;
    }

    .inline input[type="text"] {
        width: auto;
    }

    .nav {
        flex-direction: row;
        gap: 15px;
    }

    .categoriesBlock {
        flex-direction: row;
        align-items: flex-start;
        left: auto;
    }

    .recentlyBlock div {
        flex-direction: row;
        align-items: flex-start;
    }

    .categoryBlock {
        flex-direction: row;
        gap: 10px;
    }

    .displayInline {
        flex-direction: row;
        width: auto;
        align-items: flex-start;
    }

    .etsyIndia {
        flex-direction: row;
        gap: 10px;
        text-align: left;
    }
}

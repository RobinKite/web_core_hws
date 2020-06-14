let font = 0;

function changeFont() {
    if (font === 1) {
        document.documentElement.classList.replace('font-different', 'font-default');
        font = 0;
    } else {
        document.documentElement.classList.replace('font-default', 'font-different');
        font = 1;
    }
}

function enableTheme(themeName) {
    removeLi();
    setTheme(themeName);
    addLi(themeName);
};

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    if (font === 1) {
        document.documentElement.classList.add('font-different');
    } else {
        document.documentElement.classList.add('font-default');
    }
}

function removeLi() {
    let lis = document.querySelectorAll('#colorList li');
    for (let i = 0; li = lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

function addLi(themeName) {
    if (themeName === 'template') {
        let colors = ['Black', 'White'];
        let hash = ['#000000', '#ffffff'];
        let desc = [
            'The color of power and grandeur can often be found in the luxury theme. A trivial and controversial color, symbolizing intimacy, secrecy, reducing concentration with prolonged exposure, emphasizes brand solidity. It is considered a classic color. In many cultures, black is the color of mourning and is associated with longing and depression. In America it symbolizes caution, and in China - honesty.',
            'The color of freshness and purity, bright emotions and openness, inspires confidence. It is often used as a background design. Symbolizes the height of the brand, is also considered a classic. On the negative side, it reminds of sterility, emptiness, alienation.'
        ];
        changeText(colors, hash, desc);
    }

    if (themeName === 'theme-first') {
        let colors = ['Orange', 'Yellow', 'Blue', 'Dark Blue', 'Pink'];
        let hash = ['#f3d2c1', '#fef6e4', '#8bd3dd', '#001858', '#f582ae'];
        let desc = [
            'Controversial color, characterized as a provocateur of excitement and caution, as well as demonstrates warmth and comfort. Reflects enthusiasm. May express aggression. Marketers recommend using this color to call for action. It, like red, is aimed at impulsive buyers. When used with the brand it seems friendly, cheerful and confident.',
            'Symbol of warmth and cheerfulness. Psychologists say that it stimulates intellectual and mental processes, as well as the nervous system in general, but with prolonged exposure causes fatigue. Represents optimism and youth, demonstrates clarity. Some shades can cause a feeling of soreness and dirt.',

            'The color of trust, reliability and carefree, is used to design business projects and international organizations through productivity, sufficiency and neutrality. Associated with water and peace. It is more a choice of men. Suppresses appetite, is perceived as permanence in human life and increases productivity. This color is the most universal in understanding logical perception on a global scale. Creates an atmosphere of security, but can be associated with coldness, stiffness and isolation.',
            'Same as blue.',
            'The color of romance and tender feelings. It is considered a feminine color. Represents the subtlety of the product.'
        ];
        changeText(colors, hash, desc);
    }

    if (themeName === 'theme-second') {
        let colors = ['Yellow', 'Pink', 'Light Pink', 'Brown', 'Green', 'White'];
        let hash = ['#faeee7', '#ff8ba7', '#ffc6c7', '#33272a', '#c3f0ca', '#fffffe'];
        let desc = [
            'Symbol of warmth and cheerfulness. Psychologists say that it stimulates intellectual and mental processes, as well as the nervous system in general, but with prolonged exposure causes fatigue. Represents optimism and youth, demonstrates clarity. Some shades can cause a feeling of soreness and dirt.',
            'The color of romance and tender feelings. It is considered a feminine color. Represents the subtlety of the product.',
            'Same as pink.',
            "This color is a natural color that evokes a sense of strength and reliability. It's often seen as solid, much like the earth, and it's a color often associated with resilience, dependability, security, and safety. Brown can also create feelings of loneliness, sadness, and isolation. In large quantities, it can seem vast, stark, and empty, like an enormous desert devoid of life. Brown brings to mind feelings of warmth, comfort, and security. It's often described as natural, down-to-earth, and conventional, but brown can also be sophisticated. More females than males chose brown as their overall favorite color, but it was still one of the three least favorite colors for both genders.",
            'The color of tranquility, nature and ecology. It symbolizes health and peace, as well as money. With prolonged exposure calms the nervous system, relieves depression. The human eye is most sensitive to shades of color. Associated with relaxation and wealth, was a symbol of fertility. In business, it symbolizes growth and development, so marketers recommend painting the purchase buttons on the sites in green, use it in new products, increasing trust. Among the negative associations are boredom and inhibition',
            'The color of freshness and purity, bright emotions and openness, inspires confidence. It is often used as a background design. Symbolizes the height of the brand, is also considered a classic. On the negative side, it reminds of sterility, emptiness, alienation.'
        ];
        changeText(colors, hash, desc);
    }


    if (themeName === 'theme-third') {
        let colors = ['Yellow', 'Light Yellow', 'Blue', 'Dark Blue', 'White'];
        let hash = ['#ffd803', '#fffbe7', '#bae8e8', '#272343', '#fffffe'];
        let desc = [
            'Symbol of warmth and cheerfulness. Psychologists say that it stimulates intellectual and mental processes, as well as the nervous system in general, but with prolonged exposure causes fatigue. Represents optimism and youth, demonstrates clarity. Some shades can cause a feeling of soreness and dirt.',
            'Same as Yellow.',
            'The color of trust, reliability and carefree, is used to design business projects and international organizations through productivity, sufficiency and neutrality. Associated with water and peace. It is more a choice of men. Suppresses appetite, is perceived as permanence in human life and increases productivity. This color is the most universal in understanding logical perception on a global scale. Creates an atmosphere of security, but can be associated with coldness, stiffness and isolation.',
            'Same as Blue.',
            'The color of freshness and purity, bright emotions and openness, inspires confidence. It is often used as a background design. Symbolizes the height of the brand, is also considered a classic. On the negative side, it reminds of sterility, emptiness, alienation.'
        ];
        changeText(colors, hash, desc);
    }

    if (themeName === 'theme-forth') {
        let colors = ['Light Red', 'Blue', 'Light Blue', 'Dark Blue', 'White'];
        let hash = ['#eebbc3', '#232946', '#b8c1ec', '#121629', '#feffff'];
        let desc = [
            "The color of quick decisions, aggression and strong emotions, impulsiveness, so it is often used to denote sales, promotions and visual accents on web resources to direct a person's attention to the right point. As the main color is almost not used, because the color can irritate the nervous system with prolonged exposure. Stimulates appetite. Increase passion and intensity. Causes increased heart rate, creates a sense of urgency. In America it symbolizes love, in China - kindness, and in the CIS countries - high activity.",
            'The color of trust, reliability and carefree, is used to design business projects and international organizations through productivity, sufficiency and neutrality. Associated with water and peace. It is more a choice of men. Suppresses appetite, is perceived as permanence in human life and increases productivity. This color is the most universal in understanding logical perception on a global scale. Creates an atmosphere of security, but can be associated with coldness, stiffness and isolation.',
            'Same as Blue.',
            'Same as Blue.',
            'The color of freshness and purity, bright emotions and openness, inspires confidence. It is often used as a background design. Symbolizes the height of the brand, is also considered a classic. On the negative side, it reminds of sterility, emptiness, alienation.',
        ];
        changeText(colors, hash, desc);
    }

    if (themeName === 'theme-fifth') {
        let colors = ['Brown', 'Light Brown', 'Orange', 'Dark Blue', 'White'];
        let hash = ['#8c7851', '#eaddcf', '#f25042', '#020826', '#fffffe'];
        let desc = [
            "It is a natural color that evokes a sense of strength and reliability. It's often seen as solid, much like the earth, and it's a color often associated with resilience, dependability, security, and safety. Brown can also create feelings of loneliness, sadness, and isolation. In large quantities, it can seem vast, stark, and empty, like an enormous desert devoid of life. Brown brings to mind feelings of warmth, comfort, and security. It's often described as natural, down-to-earth, and conventional, but brown can also be sophisticated. More females than males chose brown as their overall favorite color, but it was still one of the three least favorite colors for both genders.",
            'Controversial color, characterized as a provocateur of excitement and caution, as well as demonstrates warmth and comfort. Reflects enthusiasm. May express aggression. Marketers recommend using this color to call for action. It, like red, is aimed at impulsive buyers. When used with the brand it seems friendly, cheerful and confident.',
            'The color of freshness and purity, bright emotions and openness, inspires confidence. It is often used as a background design. Symbolizes the height of the brand, is also considered a classic. On the negative side, it reminds of sterility, emptiness, alienation.',
            'The color of trust, reliability and carefree, is used to design business projects and international organizations through productivity, sufficiency and neutrality. Associated with water and peace. It is more a choice of men. Suppresses appetite, is perceived as permanence in human life and increases productivity. This color is the most universal in understanding logical perception on a global scale. Creates an atmosphere of security, but can be associated with coldness, stiffness and isolation.',
            'The color of freshness and purity, bright emotions and openness, inspires confidence. It is often used as a background design. Symbolizes the height of the brand, is also considered a classic. On the negative side, it reminds of sterility, emptiness, alienation.',
        ];
        changeText(colors, hash, desc);
    }


    if (themeName === 'theme-sixth') {
        let colors = ['Cyan', 'Violet', 'Light Violet', 'Yellow', 'White'];
        let hash = ['#4fc4cf', '#994ff3', '#f2eef5', '#fbdd74', '#fffffe'];
        let desc = [
            'The color promotes and encourages peaceful behaviors and calmness. It also encourages clear or rational thinking, thoughtfulness, cleanliness, hygiene, emotional control or repression of emotions. Cyan is also believed to have a negative impact on our sleep.',
            'The color of creativity, wisdom and wealth. Demonstrates royalty, temperament. Used for support and calm. Symbolizes status. Represents a rich imagination. Inspires the assertion of the brand, its strength and experience. In India, it symbolizes sadness. Among the negative emotions that provoke this color, we can indicate depression, depressed mood.',
            'Same as Violet.',
            'Symbol of warmth and cheerfulness. Psychologists say that it stimulates intellectual and mental processes, as well as the nervous system in general, but with prolonged exposure causes fatigue. Represents optimism and youth, demonstrates clarity. Some shades can cause a feeling of soreness and dirt.',
            'The color of freshness and purity, bright emotions and openness, inspires confidence. It is often used as a background design. Symbolizes the height of the brand, is also considered a classic. On the negative side, it reminds of sterility, emptiness, alienation.',
        ];
        changeText(colors, hash, desc);
    }

    function changeText(colors, hash, desc) {
        let ul = document.getElementById("colorList");
        for (let i = 0; i < colors.length; i++) {
            let name = colors[i];
            let value = hash[i];
            let text = desc[i];
            let li = document.createElement('li');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let div = document.createElement('div');
            let p2 = document.createElement('p');
            ul.appendChild(li);
            li.className = "colors-item";

            li.appendChild(h2);
            li.appendChild(p1);
            li.appendChild(div);

            li.appendChild(p2);

            h2.setAttribute("class", "colorName");
            p1.setAttribute("class", "colorHash");
            p2.setAttribute("class", "colorDesc");

            h2.appendChild(document.createTextNode(name));
            p1.appendChild(document.createTextNode(value));
            div.style.backgroundColor = hash[i];
            p2.appendChild(document.createTextNode(text));


        }
    }
}
import React, { useState, useEffect } from "react";
import Gallo1 from '../../assert/gallo-1.svg'
import Gallo2 from '../../assert/gallo-2.svg'
import Gallo3 from '../../assert/gallo-3.svg'
import Gato1 from '../../assert/gato-1.svg'
import Gato2 from '../../assert/gato-2.svg'
import Gato3 from '../../assert/gato-3.svg'
import Perro1 from '../../assert/perro-1.svg'
import Perro2 from '../../assert/perro-2.svg'
import Perro3 from '../../assert/perro-3.svg'

function Carta(props) {
    var card_id = props.card_id % 56;

    switch (card_id) {
        case 0:
        return (
            <img src={Gallo1} alt="gallo" />
        );
        break;
        case 1:
        return (
            <img src={Gallo2} alt="gallo" />
        );
        break;
        case 2:
        return (
            <img src={Gallo3} alt="gallo" />
        );
        break;
        case 3:
        return (
            <img src={Gato1} alt="gato" />
        );
        break;
        case 4:
        return (
            <img src={Gato2} alt="gato" />
        );
        break;
        case 5:
        return (
            <img src={Gato3} alt="gato" />
        );
        break;
        case 6:
        return (
            <img src={Perro1} alt="perro" />
        );
        break;
        case 7:
        return (
            <img src={Perro2} alt="perro" />
        );
        break;
        case 8:
        return (
            <img src={Perro3} alt="perro" />
        );
        break;
        
    }

}

export default Carta;

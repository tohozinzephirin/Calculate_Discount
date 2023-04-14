document.querySelector('#commander').onclick = function calculateDiscount() {
    const discountMac = 0.1,
        discountHp = 0.125,
        discount_10Pcs = 0.15;
    let priceMac = 300000,
        priceHp = 250000,
        discountPrice,
        totalPrice,
        discountPriceMsg,
        totalPriceMsg;

    console.log('Je suis fiere');
    let typePc = prompt("veillez entrer le type de pc que vous voulez ");
    let qtePctext= prompt("veillez entrer la quantité de pc que vous voulez");
    let qtePc= parseInt(qtePctext);
    if (typePc.toLocaleLowerCase() == "macbook") { 
        if (qtePc >= 10) {
            discountPrice = priceMac - (priceMac * discount_10Pcs);
            totalPrice = discountPrice * qtePc;
            discountPriceMsg = `le prix réduit d'un pc de type MacBook est ${discountPrice} FCFA`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pcs de type MacBook vous coûtent ${totalPrice} FCFA`;
            alert(totalPriceMsg);
        } else if (qtePc > 1 && qtePc < 10) {
            discountPrice = priceMac - (priceMac * discountMac);
            totalPrice = discountPrice * qtePc;
            discountPriceMsg = `le prix réduit d'un pc de type MacBook est ${discountPrice} FCFA`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pcs de type MacBook vous coûtent ${totalPrice} FCFA`;
            alert(totalPriceMsg);
        } else if (qtePc == 1) {
            // discountPrice = priceMac-(priceMac * discountMac);
            // totalPrice = discountPrice * qtePc;
            discountPriceMsg = `le prix d'un pc de type MacBook est ${priceMac} FCFA`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pc de type MacBook vous coûte ${priceMac} FCFA`;
            alert(totalPriceMsg);
        }
    } else if (typePc == "HP" || typePc == "Hp") {
        if (qtePc >= 10) {
            discountPrice = priceHp - (priceHp * discount_10Pcs);
            totalPrice = discountPrice * qtePc;
            discountPriceMsg = `le prix réduit d'un pc de type HP est ${discountPrice} FCFA`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pcs de type HP vous coûtent ${totalPrice} FCFA`;
            alert(totalPriceMsg);
        } else if (qtePc > 1 && qtePc < 10) {
            discountPrice = priceHp - (priceHp * discountHp);
            totalPrice = discountPrice * qtePc;
            discountPriceMsg = `le prix réduit d'un pc de type Hp est ${discountPrice} FCFA`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pcs de type Hp vous coûtent ${totalPrice} FCFA`;
            alert(totalPriceMsg);
        } else if (qtePc == 1) {
            // discountPrice = priceHp-(priceHp * discountHp);
            // totalPrice = discountPrice * qtePc;
            discountPriceMsg = `le prix d'un pc de type Hp est ${priceHp} FCFA`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pc de type Hp vous coûte est ${priceHp} FCFA`;
            alert(totalPriceMsg);
        }
    } else {
        alert("Désolé! Nous ne vendons pas le type de Pc que vous avez saisie. Prière d'acheté vos Pc de type Hp et MacBook chez nous");
    }
}


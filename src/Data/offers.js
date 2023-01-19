function OfferData(shortDescription, description, coupon, TnC, image) {
    this.shortDescription = shortDescription;
    this.description = description;
    this.coupon = coupon;
    this.TnC = TnC;
    this.image = image;
}

var offerDataArray = [
    new OfferData(
        "Flat 15% off up to Rs. 120",
        "Flat 15% off up to INR 120 on minimum order value of INR 499 and above using HSBC credit cards. Valid on orders above ₹ 499.",
        "HSBC15",
        [
            "Valid on orders above ₹ 499.",
            "Valid on HSBC Credit Cards only.",
            "Valid on all products except Buffets",
        ],
        "https://picsum.photos/200" + "?random=" + Math.random(),
    ),
    new OfferData(
        "Flat 25% off up to Rs. 120",
        "Flat 15% off up to INR 120 on minimum order value of INR 499 and above using HSBC credit cards. Valid on orders above ₹ 499.",
        "HSBC15",
        [
            "Valid on orders above ₹ 499.",
            "Valid on HSBC Credit Cards only.",
            "Valid on all products except Buffets",
        ],
        "https://picsum.photos/200" + "?random=" + Math.random(),
    ),
    new OfferData(
        "Flat 35% off up to Rs. 120",
        "Flat 15% off up to INR 120 on minimum order value of INR 499 and above using HSBC credit cards. Valid on orders above ₹ 499.",
        "HSBC15",
        [
            "Valid on orders above ₹ 499.",
            "Valid on HSBC Credit Cards only.",
            "Valid on all products except Buffets",
        ],
        "https://picsum.photos/200" + "?random=" + Math.random(),
    ),
    new OfferData(
        "Flat 45% off up to Rs. 120",
        "Flat 15% off up to INR 120 on minimum order value of INR 499 and above using HSBC credit cards. Valid on orders above ₹ 499.",
        "HSBC15",
        [
            "Valid on orders above ₹ 499.",
            "Valid on HSBC Credit Cards only.",
            "Valid on all products except Buffets",
        ],
        "https://picsum.photos/200" + "?random=" + Math.random(),
    ),
];

export default offerDataArray;
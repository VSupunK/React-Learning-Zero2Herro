import React from "react";
import ReactDOM from "react-dom/client";

//If we need to add styles in here, we can do it as JS object
const styleCard = {
    margin: "5px",
    padding: "5px",
    width: "200px",
    height: "300px",
    padding: "10px",
    // border: "1px solid black",
    backgroundColor: "#fff0e0"
}

//header
const Header = () => {
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://cdn6.f-cdn.com/contestentries/138969/13901059/54b67fa240afc_thumb900.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
<div className="res-card" style={styleCard}>
    <img className="res-logo" src="https://www.southernliving.com/thmb/j_6gABRIAMegN6RFHxOgbUqBxjA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" alt="pizza-img"/>
    
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines}</h4>
        <h4>{resData.data.avgRating}</h4>
        <h4>{resData.data.costForTwo}</h4>
        <h4>{resData.data.deliveryTime}</h4>
    </div>
    )
}

//Data API - Restaurant List
const resObj = 
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '121603',
        name: 'Kannur Food Point',
        uuid: '51983905-e698-4e31-b0d7-e376eca56320',
        city: '1',
        area: 'Tavarekere',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
        cuisines: ['Kerala', 'Chinese'],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: '24 MINS',
        lastMileTravel: 3,
        slugs: {
          restaurant: 'kannur-food-point-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
        locality: 'SG Palya',
        parentId: 20974,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: '',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '3 kms',
        hasSurge: false,
        sla: {
          restaurantId: '121603',
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '3.9',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
}
    

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search
            </div>
                <div className="restaurant-container"> 
                    {/* RestaurantCard */}
                    <RestaurantCard resData = {resObj}/>
                    
                </div>
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
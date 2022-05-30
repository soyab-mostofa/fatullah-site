import React from "react";
import { AiFillPhone } from "react-icons/ai";

const locationData = {
  retail: [
    {
      title: "Bexi Fabrics Head Office",
      location: {
        house: "Khalesh Mention (4th Floor)",
        city: "108, Islampur Road,  Dhaka-1100",
      },
      phone: "57391527",
      mobile: "01711639201",
    },
    {
      title: "Mohammadpur Branch",
      location: {
        house: "32/19 kha, Block-C, Tajmahal Road (South of Krishi Market)",
        city: "Mohammadpur, Dhaka-1207,  Dhaka-1100",
      },
      mobile: "01701206390",
    },
    {
      title: "Mirpur Branch",
      location: {
        house: "Mirpur Shopping Center (3rd Floor) Shop No. 315-319",
        city: "Mirpur- 06, Dhaka- 1216",
      },
      mobile: "01701206393",
    },
    {
      title: "Mohammadpur Branch",
      location: {
        house: "32/19 kha, Block-C, Tajmahal Road (South of Krishi Market)",
        city: "Mohammadpur, Dhaka-1207,  Dhaka-1100",
      },
      mobile: "01701206390",
    },
    {
      title: "Uttara Branch",
      location: {
        house: "Amir Complex (3rd Floor), Shop No. 55,56,57,60",
        city: "Plot- 43, Sector- 03, Uttara, Dhaka- 1230",
      },
      mobile: "01701206394",
    },
    {
      title: "Bashundhara Branch",
      location: {
        house: "Shop No. 13-12, Level-04, Block- B,",
        city: "Bashundhara City Complex, Dhaka- 1207",
      },
      mobile: "01701206395",
    },
    {
      title: "Narayanganj Branch",
      location: {
        house: "Shop No: 61, 62, 75, & 76 (2nd Floor),",
        city: "194 Bangabandhu Road New Shomobay Market, Narayanganj.",
      },
      mobile: "01701206396",
    },
    {
      title: "Mogbazar Branch",
      location: {
        house: "Razia Eye Mention (2nd Floor)",
        city: "23, Shahid Sangbadik Selina Parvin Road Boro Mogbazar, Dhaka-1230",
      },
      mobile: "01701206392",
    },
    {
      title: "Science Lab Branch",
      location: {
        house: "Priyangon shopping Center, Shop No. 201-204 (2nd Floor)",
        city: "47,Mirpur Road, Dhaka-1205",
      },
      mobile: "01701 206391",
    },
  ],
  wholeSale: [
    {
      title: "Fatullah Fabrics",
      location: {
        house: "Jahangir Tower",
        city: "114-116, Islampur Road, Dhaka-1100",
      },
      phone: "57393465",
    },
    {
      title: "Shoeb Corporation",
      location: {
        house: "Doulot Complex (2nd Floor)",
        city: "109, Islampur Road, Dhaka-1100",
      },
      phone: "57393011",
      mobile: "01308227308",
    },
    {
      title: "Moon Light Cloth House",
      location: {
        house: "Feroz Market",
        city: "20/10-11, Islampur Road, Dhaka-1100",
      },
      phone: "57391949",
    },
    {
      title: "Bexi Lungi",
      location: {
        house: "Hazi Bashir & Jahanara Complex",
        city: "20,Islampur Road (Underground) Dhaka- 1100",
      },
      mobile: "01753072550",
    },
  ],
};

const Card = ({ data, key }) => {
  return (
    <div key={key} className="w-full max-w-md px-2 py-4 mx-auto bg-neutral-200">
      <p className="mb-2 text-xl font-semibold">{data.title}</p>

      <p>{data.location.house}</p>
      <p>{data.location.city}</p>
      <p>{data.phone}</p>

      {data.phone && (
        <p className="flex items-center gap-2">
          <span>
            <AiFillPhone />
          </span>
          {data.phone}
        </p>
      )}
      {data.mobile && (
        <p className="flex items-center gap-2">
          <span>
            <AiFillPhone />
          </span>
          {data.mobile}
        </p>
      )}
    </div>
  );
};

const Location = () => {
  return (
    <div className="container max-w-5xl px-4 mx-auto">
      <h1 className="my-4 text-2xl font-bold">Our store locations</h1>
      <p className="mt-8 mb-4 text-xl font-bold text-center">Retail Stores</p>
      <div className="space-y-4 md:gap-4 md:space-y-0 md:grid md:grid-cols-2">
        {locationData.retail.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
      <p className="mt-8 mb-4 text-xl font-bold text-center">
        Wholesale Stores
      </p>
      <div className="space-y-4 md:gap-4 md:space-y-0 md:grid md:grid-cols-2 md:">
        {locationData.wholeSale.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Location;

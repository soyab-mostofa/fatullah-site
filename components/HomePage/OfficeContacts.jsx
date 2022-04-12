import Image from "next/image";
import React from "react";
import { CgShapeZigzag } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import bdMap from "../../public/assets/bdmap.png";

const OfficeContacts = () => {
  return (
    <div className="bg-blue-primary/10">
      <div className="container px-2 py-10 mx-auto sm:flex ">
        <div>
          <div>
            <h3 className="text-2xl font-bold ">Office Contacts</h3>
            <CgShapeZigzag className="mb-5 -mt-3 text-5xl " />
          </div>
          <p className="text-sm">
            The textile, textile product, and apparel manufacturing industries
            include establishments that process fiber into fabric and fabric
            into clothing and other textile products. While most apparel
            manufacturers worldwide rely on people to cut and sew pieces of
            fabric together.
          </p>
          <div className="flex gap-3 mt-5 item-center">
            <GrLocation className="text-3xl" />
            <div>
              <h2 className="font-semibold">Factory Address</h2>
              <p className="mb-5 text-sm">
                Fatullah Fabrics Ltd., Post Office Road, Fatullah,
                Narayanganj-1420, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-52 sm:w-auto h-52">
          <Image src={bdMap} height={bdMap.height} width={bdMap.width} />
        </div>
      </div>
    </div>
  );
};

export default OfficeContacts;

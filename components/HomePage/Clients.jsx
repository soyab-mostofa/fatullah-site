import Image from "next/image";
import React from "react";
import { CgShapeZigzag } from "react-icons/cg";
import { Fade } from "react-reveal";
import logo1 from "../../public/assets/client1.png";
import logo2 from "../../public/assets/client2.png";
import logo3 from "../../public/assets/client3.png";
import logo4 from "../../public/assets/client4.png";

const clients = [logo1, logo2, logo3, logo4];

const renderedClients = clients.map((client, i) => {
  return (
    <Fade key={i}>
      <Image
        alt="client"
        height={client.height * 0.5}
        width={client.width * 0.5}
        src={client}
      />
    </Fade>
  );
});

const Clients = () => {
  return (
    <div>
      <Fade up>
        <h3 className="text-2xl font-bold text-center">Our Clients</h3>
        <CgShapeZigzag className="mx-auto mb-5 -mt-3 text-5xl" />
      </Fade>
      <div className="flex flex-col items-center justify-around max-w-5xl gap-3 mx-auto md:flex-row">
        {renderedClients}
      </div>
    </div>
  );
};

export default Clients;

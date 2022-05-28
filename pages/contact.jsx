import React from 'react';
import tw from 'tailwind-styled-components';
import { Container } from '../lib/styles';

const data = [
  {
    name: 'DIRECTOR (OPERATION)',
    details: [
      ['Contact Person Name', 'Irfanul Hoque'],
      ['Designation', 'Executive Director'],
      ['Contact Info', ' +880-170-1220702'],
      ['E-mail', 'irfan@fatullah.com'],
    ],
  },
  {
    name: 'MARKETING',
    details: [
      ['Contact Person Name', 'Engr. M S Jalal'],
      [
        'Designation',
        'Chief Operating Officer (COO) Fatullah Fabrics Garment Division',
      ],
      ['Contact Info', '+880-171-3443982, +880-161-3443982'],
      ['E-mail', 'jalal@fatullahfabrics.com, jalal.ffgd@gmail.com'],
    ],
  },
  {
    name: 'KNITTING & DYEING',
    details: [
      ['Contact Person Name', 'Robiul Islam Rubel'],
      ['Designation', 'Assistant General Manager (Knitting & Dyeing)'],
      ['Contact Info', '+880-176-8781007'],
      ['E-mail', 'rubel.fatulah@gmail.com'],
    ],
  },
  {
    name: 'ADMIN & COMPLIANCE',
    details: [
      ['Contact Person Name', 'Md. Shahab Uddin'],
      ['Designation', 'General Manager (Admin & Compliance)'],
      ['Contact Info', '+880-171-1680629'],
      ,
    ],
  },
];
export const H1 = tw.h1`text-xl font-bold text-center md:text-left my-4`;

const Info = ({ info }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="px-1 basis-40 py-.5 text-sm ">{info[0]}:</p>
      <p className="flex-grow text-sm">{info[1]}</p>
    </div>
  );
};

const ContactItem = ({ item, key }) => {
  return (
    <div key={key}>
      <H1>{item.name}</H1>
      {item.details.map((info, i) => (
        <Info info={info} key={i} />
      ))}
    </div>
  );
};

const contact = () => {
  return (
    <Container className="py-12">
      {data.map((item, i) => (
        <ContactItem key={i} item={item} />
      ))}
    </Container>
  );
};

export default contact;

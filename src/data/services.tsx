import { ReactElement } from "react";
import { FaUserTie } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";

interface Service {
  id: number;
  name: string;
  description: string;
  icon: ReactElement;
}
export const servicesData: Service[] = [
  {
    id: 1,
    name: 'Direito Empresarial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum posuere blandit. Maecenas nec magna quis erat venenatis suscipit eu sed est.',
    icon: <FaUserTie/>
  },
  {
    id: 2,
    name: 'Direito Criminal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum posuere blandit. Maecenas nec magna quis erat venenatis suscipit eu sed est.',
    icon: <GiPoliceOfficerHead/>
  },
  {
    id: 3,
    name: 'Direito Empresarial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum posuere blandit. Maecenas nec magna quis erat venenatis suscipit eu sed est.',
    icon: <MdFamilyRestroom/>
  },
]
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
    description: 'Consultoria contratual, fusões e aquisições, recuperação de crédito e planejamento tributário para proteger os interesses da sua empresa.',
    icon: <FaUserTie/>
  },
  {
    id: 2,
    name: 'Direito Criminal',
    description: 'Defesa técnica especializada em inquéritos policiais, processos criminais e tribunais do júri, com estratégias personalizadas para cada caso.',
    icon: <GiPoliceOfficerHead/>
  },
  {
    id: 3,
    name: 'Direito de Família',
    description: 'Soluções humanizadas em divórcio, guarda de filhos, pensão alimentícia e inventários, preservando a harmonia familiar.',
    icon: <MdFamilyRestroom/>
  },
]
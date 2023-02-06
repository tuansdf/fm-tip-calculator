import Image from "next/image";
import iconPerson from "/public/images/icon-person.svg";

export default function IconPerson() {
  return <Image src={iconPerson} alt="person icon" />;
}

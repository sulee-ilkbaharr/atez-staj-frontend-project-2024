"use client";
import Image from "next/image";
import CustomButton from "./button";
import { useRouter } from "next/navigation";

interface IProductCardProps {
  id: number;
  title: string;
  desc: string;
  price: number;
  
}

const MyProductCard = ({ id, title, desc, price }: IProductCardProps) => {
  const router = useRouter();
  return (
    <div
      style={{
        border: "none",
        padding: "10px",
        gap: "10px",
        backgroundColor: "gray",
        borderRadius: "10px",
      }}
    >
      {/* <Image src={img} alt={title} width={200} height={200} /> */}
      {/* onClick={() => router.push(`/product/${id}`)} */}
      <h2>{title}</h2>
      <p>{desc}</p>
      <p style={{ fontWeight: "bold", textAlign: "right" }}>{price} TL</p>
      <CustomButton />
    </div>
  );
};

export default MyProductCard;

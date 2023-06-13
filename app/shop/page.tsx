import Link from "next/link";

const Shop = () =>{
    return <div className="text-center">
        <h1 className=" text-xl  ">Hello wolrd</h1>
        <Link href="/"> Go Back!!!</Link>
        <Link href="/parallax">GO to Parallax</Link>
    </div>
};

export default Shop;
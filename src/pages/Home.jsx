import React from "react";
import {
  bag_brown,
  bag_brickred,
  bag_cream,
  bag_white,
  bag_mainbg,
  bag_louis,
  bag_girlie,
  bg_ladyakimbo,
} from "../assets/images";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import "swiper/css";
import HeroSlider from "../components/HeroSlider";
import { productData } from "../data/productData";
import { IoStar, IoStarOutline, IoThumbsUp } from "react-icons/io5";
import { reviewData } from "../data/reviewData";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/reducers/cartSlice";

export default function () {
  const dispatch = useDispatch()
  const handleClick = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <main>
      <section className="bg-white pb-10 px-4 relative">
        <img src={bag_mainbg} alt="" className="absolute top-0 left-0 w-full h-full object-cover object-top"/>
        <div className="container mx-auto relative grid grid-cols-2 lg:grid-cols-3">
          <h2 className="col-span-2 py-20 max-w-md flex flex-col justify-center text-secondary text-xl md:text-4xl lg:text-6xl font-bold leading-tight"><span className="text-primary">Trikko</span> Collection Series{" "}{new Date().getFullYear()} </h2>
          <aside className="lg:row-span-2 flex flex-col justify-center gap-4 bg-white py-20">
            <div className="relative h-40 lg:h-60">
              <img src={bag_brown} alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
            </div>
            <div className="flex flex-col gap-2 text-secondary p-4">
              <h4 className="text-lg lg:text-2xl font-bold">Large Adriamo</h4>
              <p className="text-sm lg:text-base opacity-60">
                A Large bag with a unique design that can be used as a shoulder bag or a handbag. Its key features are magnetic closure, 100% large lamb skin with braided strap
              </p>
              <Link to={"/products"} className="border-b border-primary pb-0 pt-4 text-primary text-base md:text-lg font-semibold flex gap-2 items-center w-max group">Show all Collections{" "}<FaArrowRight className="-rotate-45 group-hover:rotate-0" />{" "}</Link>
            </div>
          </aside>
          <aside className="relative lg:h-[300px] bg-white">
            <HeroSlider />
          </aside>
        </div>
      </section>
      <section className="relative py-10 px-4">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-3xl lg:text-5xl text-secondary lg:max-w-md relative pb-10 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:absolute after:w-[58%] font-semibold">
              Our <span className="text-primary">New Collections</span> by
              Category
            </h4>
            <p className="text-sm lg:text-base text-secondary opacity-60 font-semibold text-justify lg:max-w-lg">
              Introduced in Matthieu Blazy's Summer 23 collection, Andiamo is a
              new expression of the signature technique realised by the expert
              craftsmanship of artisans in Italian ateliers. Its name, Andiamo,
              "Let's go" in Italian, embodies the spirit of the bag, a tribute
              to going places and the craft in motion.
            </p>
          </div>
          <div className="relative flex py-10">
            <aside className="flex flex-col gap-4 w-full max-w-sm">
              <Link
                to={"/products"}
                className="border-b border-primary pb-0.5 pt-4 text-primary text-base md:text-lg font-semibold flex gap-2 items-center w-max group"
              >
                Featured Collections {new Date().getFullYear()}{" "}
                <FaArrowRight className="-rotate-45 group-hover:rotate-0" />{" "}
              </Link>
              <div className="relative h-28 lg:py-32">
                <img
                  src={bag_cream}
                  alt=""
                  className="absolute left-0 top-0 h-full w-full object-cover object-center"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="relative py-10 px-4">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-3xl lg:text-5xl text-secondary lg:max-w-md relative pb-10 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:absolute after:w-[58%] font-semibold">
              Our <span className="text-primary"> Our Best Seller</span> by
              Category
            </h4>
            <p className="text-sm lg:text-base text-secondary opacity-60 font-semibold text-justify lg:max-w-lg">
              Introduced in Matthieu Blazy's Summer 23 collection, Andiamo is a
              new expression of the signature technique realised by the expert
              craftsmanship of artisans in Italian ateliers. Its name, Andiamo,
              "Let's go" in Italian, embodies the spirit of the bag, a tribute
              to going places and the craft in motion.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {productData.map((product) => (
              <aside
                key={product.id}
                className="flex flex-col gap-4 bg-white group"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="relative overflow-hidden h-36 lg:h-48"
                >
                  <img
                    src={product.image}
                    alt={product.productname}
                    className="absolute left-0 top-0 object-cover w-full h-full group-hover:scale-110"
                  />
                </Link>
                <div className="flex gap-2 p-4 pt-0 items-center">
                  <div className="flex flex-col gap-1 flex-1">
                    <h4 className="text-lg lg:text-2xl text-dark font-bold">
                      {product.productname}
                    </h4>
                    <p className="text-base lg:text-lg text-primary font-bold">
                      &#8358;{product.price.toLocaleString()}
                    </p>
                  </div>
                  <button onClick ={() => handleClick(product)} className="cursor-pointer h-8 w-8 rounded-full bg-primary text-white grid place-items-center text-base lg:text-lg font-bold">
                    <FaPlus />
                  </button>
                </div>
              </aside>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-10 px-4">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-3xl lg:text-5xl text-secondary lg:max-w-md relative pb-10 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:absolute after:w-[58%] font-semibold">
              Our <span className="text-primary">Featured</span> Collections
            </h4>
            <p className='text-justify text-sm lg:text-base lg:max-w-md'>The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget.</p>
          </div>
        </div>
      </section>
      <section className="relative py-10 px-4 ">
        <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 justify-center ">
          <div className="relative h-40 lg:h-80 ">
            <img src={bag_white} alt="" className='w-full h-full object-cover'/>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute flex bottom-3 left-3 text-white">
            <h4 className="text-3xl lg:text-5xl text-light lg:max-w-md relative pb-10 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:absolute after:w-[60%] lg:after:w-[60%] font-semibold font-serif">Mule Sandal Series</h4>
            <button className="cursor-pointer h-10 w-10 rounded-full bg-primary text-white grid place-items-center text-base lg:text font-bold "><FaArrowRight className="-rotate-45 group-hover:rotate-0"/></button>
            </div>
          </div>
          <div className="relative h-40 lg:h-80 ">
            <img src={bg_ladyakimbo} alt="" className='w-full h-full object-cover'/>
            <div className="absolute inset-0 bg-black opacity-50 w-full h-full"></div>
            <div className="absolute flex bottom-3 left-3 text-white">
            <h4 className="text-3xl lg:text-5xl text-light lg:max-w-md relative pb-10 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:absolute after:w-[60%] lg:after:w-[60%] font-semibold font-serif">Angel Sunglasses Series </h4>
             <button className="cursor-pointer h-10 w-10 rounded-full bg-primary text-white grid place-items-center text-base lg:text font-bold "><FaArrowRight className="-rotate-45 group-hover:rotate-0"/></button>
            </div>
          </div>
          <div className="relative lg:col-span-2">
            <div className='h-40 lg:h-95'>
            <img src={bag_cream} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className="absolute inset-0 bg-black opacity-50 w-full h-full" ></div>
            <div className="absolute flex top-3 right-3 text-white">
            <h4 className="text-3xl lg:text-3xl text-light lg:max-w-md relative pb-10 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:absolute after:w-[60%] lg:after:w-[60%] font-semibold font-serif">Bottega Venete Women Exclusive Series </h4>
            <button className="cursor-pointer h-10 w-10 rounded-full bg-primary text-white grid place-items-center text-base lg:text font-bold "><FaArrowRight className="-rotate-45 group-hover:rotate-0"/></button>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="relative py-10 px-4">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-3xl lg:text-5xl text-secondary lg:max-w-md relative pb-10 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:absolute after:w-[58%] font-semibold">
              Our <span className="text-primary"> Customer </span> Reviews
            </h4>
            <p className="text-sm lg:text-base text-secondary opacity-60 font-semibold text-justify lg:max-w-lg">
              Introduced in Matthieu Blazy's Summer 23 collection, Andiamo is a
              new expression of the signature technique realised by the expert
              craftsmanship of artisans in Italian ateliers. Its name, Andiamo,
              "Let's go" in Italian, embodies the spirit of the bag, a tribute
              to going places and the craft in motion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto grid-flow-dense">
            {
              reviewData.map(review => (
                <aside key={review.id} className={`p-4 flex flex-col gap-4 bg-slate-/30 ${review?.productImage ? 'row-span-2': 'row-span-1'}`}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center w-max">
                    <img src={review.image} alt={review.name} className="h-4 w-4 md:h-8 md:w-8 rounded-full flex-shrink-0 object-cover" />
                    <div className="">
                      <h5 className="text-base lg:text-lg font-semibold text-dark">
                        {review.name}
                      </h5>
                      <div className="flex gap-1 text-primary text-xs lg:text-sm">
                        {Array(review.rating).map((ei,i) => <IoStar key={i} />)}
                        <IoStarOutline />
                      </div>
                    </div>
                  </div>
                  <IoThumbsUp className="text-slate-300" />
                </div>
                  {review?.productImage && <img src={review.productImage} alt="" className="object-cover w-full h-32 lg:h-48" />}
                  <p className="text-base lg:text-lg text-dark font-medium text-justify leading-loose">{review.text}</p>
                </aside>
              ))
            }

          </div>
        </div>
      </section>
    </main>
  );
}

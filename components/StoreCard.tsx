import Image from "next/image";
import Link from "next/link";
import React from "react";

function StoreCard({
  src,
  alt,
  cardTitle,
  subtitle,
  href,
  params,
}: {
  src: string;
  alt: string;
  cardTitle: string;
  subtitle: string;
  href: string;
  params: any;
}) {
  return (
    <div className="card shadow-2xl hover:scale-[1.03] transition-all ">
      <figure className="w-full h-52">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className=" object-contain"
        />
      </figure>
      <div className="card-body gap-y-4 p-5 ">
        <div className="flex flex-col justify-center items-start gap-y-3">
          <h2 className="card-title text-zinc-500 dark:text-primary-800">
            {cardTitle}
          </h2>
          <p className=" text-zinc-500 dark:text-slate-500">{subtitle}</p>
        </div>
        <Link
          href={{
            pathname: href,
            query: {
              category: params,
            },
          }}
          className="card-actions justify-end "
        >
          <button className="btn btn-outline  dark:btn--primary ">
            View More ...
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StoreCard;

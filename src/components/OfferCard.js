import offerlogo from '../assets/offer.webp';

const OfferCard = ({ header, couponCode }) => {
  return (
    <div className="flex xl:min-w-[21rem] gap-2 p-4 border border-gray-300 rounded-3xl">
      <div className="flex-shrink-0">
        <img
          className="w-12 h-12"
          alt="offerLogo"
          src={offerlogo}
        />
      </div>
      <div className="flex flex-col flex-grow ">
        {" "}
        {/* Added inline style */}
        <h2 className="text-lg text-nowrap">{header}</h2>
        <p className="text-base text-nowrap">{couponCode}</p>
      </div>
    </div>
  );
};

export default OfferCard;

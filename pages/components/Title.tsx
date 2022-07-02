const Title: React.FC = () => {
  return (
    <h1
      className={`flex items-center justify-center text-center text-3xl font-bold text-[#10aeff]`}
    >
      <svg
        className={`mr-3 h-10 w-10 fill-[#10aeff]`}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M95.468,416.532c41.078,41.077,97.838,66.489,160.532,66.489s119.448-25.412,160.532-66.489  c41.078-41.078,66.489-97.839,66.489-160.532S457.61,136.546,416.532,95.468C375.448,54.388,318.693,28.976,256,28.976  S136.546,54.388,95.468,95.468C54.385,136.546,28.973,193.307,28.973,256S54.385,375.454,95.468,416.532 M256,0  c141.382,0,256,114.615,256,256c0,141.382-114.618,256-256,256C114.612,512,0,397.382,0,256C0,114.615,114.612,0,256,0z" />
        <path d="M112.088,301.73v-91.461c0-6.092,4.987-11.076,11.076-11.076h76.027v-76.028  c0-6.091,4.987-11.076,11.076-11.076h91.465c6.095,0,11.076,4.984,11.076,11.076v76.028h76.027c6.095,0,11.076,4.984,11.076,11.076  v91.461c0,6.096-4.981,11.082-11.076,11.082h-76.027v76.021c0,6.09-4.981,11.076-11.076,11.076h-91.465  c-6.089,0-11.076-4.986-11.076-11.076v-76.021h-76.027C117.075,312.813,112.088,307.826,112.088,301.73" />
      </svg>
      ReMe
    </h1>
  );
};

export default Title;

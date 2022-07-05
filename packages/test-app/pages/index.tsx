import Image from 'next-image-no-width-and-height';

const Home = () => {
  return (
    <div>
      <h1>Random dog image, no need to specify width and height</h1>
      <Image
        src="https://images.dog.ceo/breeds/newfoundland/n02111277_13670.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;

import React from "react";
import Carousel from 'react-bootstrap/Carousel';
const HomePage = () => {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0003/assets/6c41f008-2fd3-4a0f-86ab-f1df35545104.png?format=avif"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0003/assets/a20b97c2-43c7-42fb-9ba6-7cc6d8987e92.png?format=avif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0003/assets/fe42dd8a-6fa7-428f-8865-9d4c95770078.png?format=avif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0003/assets/d7783170-da45-486a-a08e-766821057c0c.png?format=avif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0003/assets/12518e86-9379-4605-b26c-37241ff84dc4.png?format=avif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0003/assets/a92443db-1170-4ab9-92ca-7d204c972416.png?format=avif"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className="container ">
      <div className="row m-3">
        <div className="col">
        <img src="https://f.nooncdn.com/mpcms/EN0003/assets/4886816a-4a03-4c3d-9558-fcae1d9af045.png?format=avif"  width={"100"}/>
        </div>
        <div className="col">
        <img src="https://f.nooncdn.com/mpcms/EN0003/assets/f9a2cb4a-8f3e-47f7-bb09-3f37af0787f0.png?format=avif"  width={"100"}/>
        </div>
        <div className="col">
        <img src="https://f.nooncdn.com/mpcms/EN0003/assets/b2a4895d-5f13-4b4b-9862-da34859002e6.png?format=avif"  width={"100"}/>
        </div>
        <div className="col">
        <img src="https://f.nooncdn.com/mpcms/EN0003/assets/ecd619fe-7950-49b6-b514-d3aee7f8ad55.png?format=avif"  width={"100"}/>
        </div>
        <div className="col">
        <img src="https://f.nooncdn.com/mpcms/EN0003/assets/d458c95a-57e5-48de-b44a-ff8350c8d138.png?format=avif"  width={"100"}/>
        </div>
        <div className="col">
        <img src="https://f.nooncdn.com/mpcms/EN0003/assets/97155f5b-b2b6-4a57-a1af-745015feeebd.png?format=avif"  width={"100"}/>
        </div>
        <div className="col">
        <img src="https://f.nooncdn.com/mpcms/EN0003/assets/d95baf9f-96c0-4384-b4bd-24ede5441ff2.png?format=avif" width={"100"}/>
        </div>
      </div>
      <div className="row">
        <div className="text-end h2 m-3">مُقترحة لك</div>

      </div>
    </div>

    </>
  );
};

export default HomePage;